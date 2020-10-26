'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', table => {
      table.increments()
      table.string('nickname').notNullable().unique()
      table.string('first_name', 80).notNullable()
      table.string('last_name', 80)
      table.string('biography')
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.timestamp('birthday').notNullable()
      table.boolean('confirmed_email').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
