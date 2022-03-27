import { Profile } from './profile'
import * as otp from './otp'

export class Authentication {
  isValid(account, password) {
    const password_from_profile = this.getPassword(account)
    const token = otp.getToken()
    const valid_password = password_from_profile + token

    console.log(`password:${password_from_profile}, token:${token}`)
    console.log(`input password:${password}, token:${token}`)

    if (valid_password === password) {
      return true
    }
    else {
      this.send(`account:${account} try to login failed`)
      return false
    }
  }

  getPassword(account) {
    const profile = new Profile()
    return profile.get_password(account)
  }

  send(message) {
    console.log(message)
  }
}
