import { OrderService } from '../src/ut/order_service'

describe('sync book orders', () => {
  it('should only sync book orders', () => {
    const orderService = new OrderService()
    orderService.sync_book_orders()
  })
})
