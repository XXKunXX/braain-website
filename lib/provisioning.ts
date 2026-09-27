import { createHmac, randomUUID } from "node:crypto";

/**
 * Aufrufe an die Kunden-Instanzen (k01.braain.io, k02.braain.io, …).
 *
 * Laut Thomas (26.09.2026):
 * - Endpunkte: POST /api/provisioning/assign | /billing | /status | /release | /restore
 * - Signatur: HMAC-SHA256 über `${timestamp}.${rawBody}` mit dem Instanz-Geheimnis
 * - Header: X-Braain-Timestamp, X-Braain-Signature
 * - Idempotenz über `eventId` im Body
 *
 * OFFEN: Die genauen Felder je Endpunkt stehen im Schnittstellenvertrag
 * (Abschnitt „Instanz-Pool“). Bis der vorliegt, ist nur die Signatur
 * umgesetzt; die Nutzlast wird unverändert durchgereicht.
 * Ebenfalls mit dem Vertrag abgleichen: Signatur als Hex (hier) oder Base64,
 * Timestamp in Sekunden (hier) oder Millisekunden.
 */

export type InstanzAktion = "assign" | "billing" | "status" | "release" | "restore";

export interface Instanz {
  instanceId: string;
  baseUrl: string; // z. B. https://k01.braain.io
  secret: string;
}

export function signiere(secret: string, timestamp: string, rawBody: string): string {
  return createHmac("sha256", secret).update(`${timestamp}.${rawBody}`).digest("hex");
}

export async function rufeInstanz(
  instanz: Instanz,
  aktion: InstanzAktion,
  nutzlast: Record<string, unknown>,
  eventId: string = randomUUID(),
): Promise<Response> {
  const rawBody = JSON.stringify({ eventId, ...nutzlast });
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const url = `${instanz.baseUrl.replace(/\/+$/, "")}/api/provisioning/${aktion}`;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Braain-Timestamp": timestamp,
      "X-Braain-Signature": signiere(instanz.secret, timestamp, rawBody),
    },
    body: rawBody,
    signal: AbortSignal.timeout(15_000),
  });
}
