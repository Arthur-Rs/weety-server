'use strict'

class user {
  get rules () {
    return {
      nickname: 'required|unique:users',
      email: 'required|email|unique:users',
      first_name: 'required',
      password: 'required',
      birthday: 'required|date'
    }
  }

  get messages () {
    return {
      'nickname.required': 'You must provide a nickname.',
      'nickname.unique': 'You must provide a valid nickname.',
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'password.required': 'You must provide a password.'
    }
  }
}

module.exports = user
