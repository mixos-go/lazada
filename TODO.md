# TODO — Lazada SDK (connector + OAuth)

Urutan fase wajib diikuti (fase N butuh fase N-1 selesai). Dalam satu fase, task boleh paralel
selama tidak menyentuh file yang sama. Setiap task = 1 PR.

Status: `[ ]` belum, `[~]` in progress, `[x]` selesai & merged.

> **Contract connector SERAGAM** (dipakai identik di SDK Shopee/TTS/Lazada/Blibli — hanya detail
> internal platform yang beda). Jangan ubah bentuk/struktur contract tanpa persetujuan bersama:
> folder, interface `TokenStore`, tipe `TokenSet`, dan kelas connector harus sama persis antar repo.

---

## Kontrak seragam connector (multi-seller)

Folder yang harus ada (bentuk sama di semua repo):

```
sdk/src/connector/
├── types.ts        <- TokenSet, ConnectorConfig, token + shop identifier
├── token-store.ts  <- interface TokenStore + InMemoryTokenStore
├── connector.ts    <- class LazadaConnector (multi-seller) + auto-refresh
└── index.ts        <- createLazadaConnector(config) factory
```

### `types.ts`

```ts
interface TokenSet {
  accessToken: string
  refreshToken?: string
  /** epoch ms saat token kedaluwarsa (dari expires_in platform saat diperoleh). */
  expiresAt?: number
  /** field tambahan spesifik platform (mis. sellerId, region). */
  [key: string]: unknown
}

interface ConnectorConfig {
  credentials: /* tipe kredensial platform (mis. LazadaCredentials) */
  redirectUri: string
  store?: TokenStore
  /** environment/region default + pilihan tambahan sesuai platform. */
  environment?: unknown
  scope?: string
}
```

### `token-store.ts`

```ts
interface TokenStore {
  get(shopId: string): Promise<TokenSet | undefined> | TokenSet | undefined
  set(shopId: string, token: TokenSet): Promise<void> | void
  delete(shopId: string): Promise<void> | void
}

class InMemoryTokenStore implements TokenStore { /* Map<shopId, TokenSet> */ }
```

### `connector.ts`

Kelas `LazadaConnector` **multi-seller** (satu instance, banyak shop):

- `buildAuthUrl(shopId, state?): string` — URL OAuth yang harus dikunjungi seller (per shop).
- `handleCallback(shopId, code): Promise<TokenSet>` — exchange code → token, simpan ke store.
- `refresh(shopId): Promise<TokenSet>` — refresh token sebelum/ketika kedaluwarsa, update store.
- `getClient(shopId): LazadaClient` — client untuk shop tsb yang **auto-inject token** dan
  `auto-refresh` saat `expiresAt` mendekat; kalau token belum ada → lempar error yang jelas.
- `listShopIds(): string[]`.

### `index.ts`

`createLazadaConnector(config: ConnectorConfig): LazadaConnector`

---

## Fase 1 — Connector core (struktur + contract)

- [ ] `connector/types.ts` — `TokenSet`, `ConnectorConfig` sesuai kontrak; tambah field spesifik
      Lazada (`region`, `sellerId` di `TokenSet`).
- [ ] `connector/token-store.ts` — `interface TokenStore` + `InMemoryTokenStore`.
- [ ] `connector/connector.ts` — class `LazadaConnector` (multi-seller):
  - `buildAuthUrl(shopId, state?)` → pakai `buildAuthUrl()` yang ada di `src/auth.ts`
    (per `region`).
  - `handleCallback(shopId, code)` → panggil `exchangeAuthCode()` yang ada di `src/client.ts`,
    parse jadi `TokenSet` (access_token, refresh_token, expiresAt dari `expires_in`), simpan.
  - `refresh(shopId)` → pakai `system.refreshAccessToken()` (`src/generated/SystemAPI`);
    update store.
  - `getClient(shopId)` → return `LazadaClient` yang auto-inject token & auto-refresh (Fase 2).
  - `listShopIds()`.
- [ ] `connector/index.ts` — `createLazadaConnector(config)`.
- [ ] Ekspor connector dari `src/index.ts`; aktifkan & pakai `LazadaTokenResult`
      (`src/index.ts:200`, saat ini menganggur).

## Fase 2 — Token injection & auto-refresh runtime

- [ ] **`exchangeAuthCode` bypass `LazadaClient.fetch`** (`src/client.ts:195` pakai `fetch` global):
      rapikan agar konsisten dgn transport client (custom fetch/proxy), atau biarkan & catat.
- [ ] Riset & putuskan pendekatan injection: `LazadaClient.defaults.accessToken` `private readonly` →
      pilih (a) konstruksi ulang client, atau (b) setter baru/`updateToken`, atau (c) getClient dari
      store tiap call. Dokumentasikan keputusan.
- [ ] Implement auto-refresh: cek `expiresAt` sebelum call; refresh jika `< threshold`.
      Single-flight agar refresh tidak dobel saat paralel.

## Fase 3 — Multi-seller & multi-region

- [ ] `getClient(shopId)` utk shop berbeda menghasilkan client dgn token sendiri.
- [ ] Pastikan `region` per shop benar (access token Lazada terikat region); jangan campur.
- [ ] Test isolasi antar shop & antar region.

## Fase 4 — Testing (connector)

- [ ] Unit test `TokenStore`.
- [ ] Unit test `LazadaConnector` pakai mock: buildAuthUrl (per region), handleCallback (parse
      token + expire), refresh, auto-refresh, error path.
- [ ] Unit test isolasi multi-seller & multi-region.
- [ ] Smoke test signing tetap hijau (jangan rusak `sign()`).

## Fase 5 — Docs & release

- [ ] Update `sdk/README.md`: contoh OAuth flow multi-seller (+ region).
- [ ] Bump version + publish ke GitHub Packages.

---

## Catatan platform (mulai implement dari sini)

- Kredensial: `LazadaCredentials { app_key, app_secret }` (`src/types.ts`).
- Signing: `src/client.ts sign()` — HMAC-SHA256 (Lazop), hasil di-uppercase; token (`access_token`)
  masuk ke query + ikut base string.
- OAuth sudah ada: `buildAuthUrl` (`src/auth.ts`), `exchangeAuthCode` (`src/client.ts`),
  `system.refreshAccessToken` + `generateAccessToken` (`src/generated/SystemAPI`).
- `LazadaClient.request()` terima `opts.access_token` per-call → jalur bagus untuk auto-inject.
- `LazadaTokenResult` (`src/index.ts`) dideklarasikan tapi tak dipakai → aktifkan.
- Gap yang dilengkapi: integrasi token ke client, TokenStore, expiry tracking, auto-refresh,
  multi-seller, tipe token ter-struktur.
