# @mixos-go/lazada-sdk

TypeScript SDK untuk **Lazada Open Platform API** — mencakup **372 API** dalam
**33 kategori**, di-*generate* langsung dari doc reference repo ini
(`references/api/**`).

- HMAC-SHA256 signing otomatis (Lazop-style)
- Routing region (Singapore, Malaysia, Philippines, Indonesia, Thailand, Vietnam)
- Inject parameter umum (`app_key`, `timestamp`, `sign_method`, `access_token`, `sign`)
- Typed request/response per API (nested types dari dot-notation `data.orders.*`)
- Zero dependency runtime (hanya TypeScript/devDep)

## Instalasi

```bash
# build SDK (jalankan dari folder sdk/)
cd sdk
npm install
npm run build
```

## Quick start

```ts
import { Lazada } from './index'

const lazada = new Lazada({
  credentials: { app_key: 'YOUR_APP_KEY', app_secret: 'YOUR_APP_SECRET' },
  region: 'indonesia',   // 'singapore' | 'malaysia' | 'philippines' | 'indonesia' | 'thailand' | 'vietnam'
  accessToken: 'YOUR_ACCESS_TOKEN',
})

// GET-style API
const orders = await lazada.order.getOrders({
  created_after: '2024-01-01T00:00:00+08:00',
  sort_by: 'created_at',
  limit: 20,
})
console.log(orders.data?.orders)

// POST-style API
await lazada.product.createProduct({
  payload: '{"name":"Example Product"}',
})
```

Per-call override region/token/timestamp:

```ts
const res = await lazada.product.getProducts(
  { offset: 0, limit: 50 },
  { region: 'thailand', timestamp: '1517820392000' },
)
```

## Otorisasi (access_token)

Bangun URL otorisasi seller, lalu tukar `code` dengan access_token:

```ts
import { Lazada, buildAuthUrl, exchangeAuthCode } from './index'

const url = buildAuthUrl(
  { app_key: 'YOUR_APP_KEY', app_secret: 'YOUR_APP_SECRET' },
  'https://yourapp/callback',
  { region: 'indonesia' },
)
// arahkan seller ke `url`; mereka redirect ke callback?code=...&state=...

const token = await exchangeAuthCode(
  { app_key: 'YOUR_APP_KEY', app_secret: 'YOUR_APP_SECRET' },
  'CODE_FROM_CALLBACK',
  { region: 'indonesia' },
)
// token.data.access_token -> masukkan ke Lazada(accessToken)
```

## Struktur

```
src/
  index.ts        # entry: class Lazada + wiring 33 category sub-clients
  client.ts       # LazadaClient: signing (HMAC-SHA256), request, token exchange
  auth.ts         # buildAuthUrl (OAuth authorize)
  endpoints.ts    # region -> host (api.lazada.<region>)
  types.ts        # LazadaCredentials, LazadaError, envelope types
  generated/      # AUTO-GENERATED per-category typed clients
scripts/
  generate.cjs    # generator (parse references/api -> src/generated)
  smoke.cjs       # smoke test signing/request/envelope
```

Regenerate setelah update doc: `npm run generate`.

## Lisensi

MIT
