import { Authentication } from '../src/ut/authentication'

// eslint-disable-next-line no-undef
describe('authenticate account is valid', () => {
  it('should be valid', () => {
    const authentication = new Authentication()
    expect(authentication.is_valid('joey', '91')).toBe(true)
  })
})
