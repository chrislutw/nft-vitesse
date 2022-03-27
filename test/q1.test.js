import { beforeEach } from 'vitest'
import { Holiday } from '../src/ut/q1.js'

describe('sayHello', () => {
  let holiday = new Holiday()
  beforeEach(() => {
    holiday = new Holiday()
  })
  function givenTody(month, date) {
    holiday.getYouWantDay = () => new Date(2022, month - 1, date)
  }
  function sayHelloShuoldBe(expectValue) {
    expect(holiday.sayHello()).toBe(expectValue)
  }

  it('12/25 is Christmas', () => {
    givenTody(12, 25)
    sayHelloShuoldBe('Merry Christmas')
  })

  it('Today is Christmas', () => {
    givenTody(12, 25)
    sayHelloShuoldBe('Merry Christmas')
  })

  it('12/24 is Christmas', () => {
    givenTody(12, 24)
    sayHelloShuoldBe('Merry Christmas')
  })

  it('1/25 is not Christmas', () => {
    givenTody(1, 25)
    sayHelloShuoldBe('Today is not Christmas')
  })

  it('11/24 is not Christmas', () => {
    givenTody(11, 24)
    sayHelloShuoldBe('Today is not Christmas')
  })
})
