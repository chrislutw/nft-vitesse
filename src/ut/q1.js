import { getDate, getMonth } from 'date-fns'
export class Holiday {
  sayHello() {
    const today = this.getYouWantDay()
    const CHRISTMAS_MONTH = 12
    const CHRISTMAS_DAY = 24
    const CHRISTMAS_DAY2 = 25

    console.log(`today month and date: ${getMonth(today)} ${getDate(today)}`)
    const isChristmas = (CHRISTMAS_DAY === getDate(today) || CHRISTMAS_DAY2 === getDate(today)) && CHRISTMAS_MONTH === getMonth(today) + 1

    if (isChristmas)
      return 'Merry Christmas'

    return 'Today is not Christmas'
  }

  getYouWantDay() {
    return new Date()
  }
}
