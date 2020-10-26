'use strict'

class UserController {
  async store ({ request, auth }) {
    const { email, password } = request.only(['email', 'password'])

    const token = await auth.withRefreshToken().attempt(email, password)

    return token
  }
}

module.exports = UserController
