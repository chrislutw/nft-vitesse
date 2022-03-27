/* eslint-disable import/namespace */
/* eslint-disable no-import-assign */
import { beforeEach, vi } from 'vitest'
import { Authentication } from '../src/ut/authentication'
import * as otp from '../src/ut/otp'
vi.mock('../src/ut/otp')

// eslint-disable-next-line no-undef
describe('authenticate account is valid', () => {
  let fakeGetPasswork
  let fakeGetToken
  let authentication = new Authentication()

  beforeEach(() => {
    authentication = new Authentication()
    fakeGetPasswork = vi.fn()
    fakeGetToken = vi.fn()
    authentication.getPassword = fakeGetPasswork
    otp.getToken = fakeGetToken
  })

  it('should be valid', () => {
    givenPassword('91')
    givenToken('000000')
    shouldBeValid('91', '91000000')
  })

  it('should be invalid', () => {
    givenPassword('91')
    givenToken('000000')
    shouldBeInvalid('91', 'wong password')
  })

  function shouldBeValid(user, token) {
    expect(authentication.isValid(user, token)).toBe(true)
  }
  function shouldBeInvalid(user, token) {
    expect(authentication.isValid(user, token)).toBe(false)
  }

  function givenPassword(pwd) {
    authentication.getPassword = vi.fn().mockReturnValueOnce(pwd)
  }
  function givenToken(token) {
    fakeGetToken.mockReturnValueOnce(token)
  }
})
