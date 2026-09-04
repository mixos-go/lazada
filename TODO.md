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

- [x] `connector/types.ts` — `TokenSet`, `LazadaConnectorConfig` sesuai kontrak; field spesifik
      Lazada (`region` di `TokenSet`; `region` + `refreshThresholdMs` di config).
- [x] `connector/token-store.ts` — `interface TokenStore` + `InMemoryTokenStore` (dengan `keys()`).
- [x] `connector/connector.ts` — class `LazadaConnector` (multi-seller):
  - `buildAuthUrl(shopId, state?)` → pakai `buildAuthUrl()` yang ada di `src/auth.ts` (per `region`);
    `shopId` & `state` disisipkan ke query redirect.
  - `handleCallback(shopId, code)` → panggil `exchangeAuthCode()` yang ada di `src/client.ts`,
    parse jadi `TokenSet` (flat response) + akses `LazadaTokenResult`, simpan ke store.
  - `refresh(shopId)` → pakai `system.refreshAccessToken()` (`src/generated/SystemAPI`); parse
    baik response terbungkus `data` maupun flat; update store.
  - `getClient(shopId)` (async) → return `LazadaClient` ter-inject access token; auto-refresh
    saat `expiresAt` mendekat di Fase 2.
  - `listShopIds()` — union dari `keys()` store + Set internal connector.
- [x] `connector/index.ts` — `createLazadaConnector(config)`.
- [x] Ekspor connector dari `src/index.ts` (`export * from './connector'`); `LazadaTokenResult`
      (`src/index.ts:200`) kini dipakai connector (type-import dari `../index`).

## Fase 2 — Token injection & auto-refresh runtime

- [x] **`exchangeAuthCode` konsisten dgn transport client**: `exchangeAuthCode` (`src/client.ts:195`)
      kini terima `opts.fetch` (default `globalThis.fetch`) — connector meneruskan `fetchImpl`.
      Tidak lagi hardcode `fetch` global; tetap pakai signing Lazop yang sama dengan `LazadaClient`.
- [x] **Keputusan injection (b)**: `LazadaClient` (src/client.ts) ditambah optional hook
      `beforeRequest` (dipanggil di awal tiap `request`) + `updateToken(accessToken?)` (field
      `defaults` diubah mutable). Additif, non-breaking; per-call `opts.access_token` tetap didukung.
- [x] Implement auto-refresh: `beforeRequest` cek `expiresAt` di store; bila
      `expiresAt - now < refreshThresholdMs` → `refresh(shopId)` (pakai
      `system.refreshAccessToken`) lalu `client.updateToken(...)`. Terverifikasi manual:
      3 request paralel saat expiry mendekat → refresh 1x, 3 sukses, store ter-update.
- [x] Race / single-flight: `Map<shopId, Promise<TokenSet>>` `refreshing` + `.finally()` cleanup.

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
