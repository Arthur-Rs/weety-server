'use strict'

const User = use('App/Models/User')
const differenceInYears = require('date-fns/differenceInYears')
const parseISO = require('date-fns/parseISO')

class UserController {
  async store ({ request }) {
    const body = request.all()
    const birthday = parseISO(body.birthday)

    if (differenceInYears(birthday, new Date()) < 13) {
      return
    }

    const user = await User.create(body)

    return user
  }

  async update ({ request, auth }) {
    const body = request.all()

    auth.user.marge(body)

    await auth.user.save()

    return auth.user
  }

  async destroy ({ auth }) {
    await auth.user.destroy()
  }
}

module.exports = UserController
