import { Lazada } from '../src/index'

const lazada = new Lazada({
  credentials: {
    app_key: 'YOUR_APP_KEY',
    app_secret: 'YOUR_APP_SECRET',
  },
  region: 'indonesia',
  accessToken: 'YOUR_ACCESS_TOKEN',
})

async function main() {
  // GET-style API: orders (params sent as query params, signed)
  const orders = await lazada.order.getOrders({
    created_after: '2024-01-01T00:00:00+08:00',
    sort_by: 'created_at',
    limit: 20,
  })
  console.log(orders.data?.orders)

  // POST-style API: create product
  await lazada.product.createProduct({
    payload: '{"name":"Example Product","short_description":"..."}',
  })
}

main().catch((e) => {
  console.error(e)
})
