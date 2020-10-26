'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.post('user', 'UserController.store').validator(['user'])

Route.post('session', 'SessionController.store')

Route.group(() => {
  Route.put('user', 'UserController.update')
  Route.delete('user', 'UserController.destroy')
}).middleware(['auth'])
