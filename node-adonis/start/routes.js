'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

let employees = {
  0: {
    name: 'Alicia',
    company: 'Linkedin'
  },
  1: {
    name: 'Gonzalo',
    company: 'Facebook'
  },
  2: {
    name: 'Melania',
    company: 'Google'
  }
};


Route.on('/').render('welcome');

Route.get('employees', () => employees);

Route.post('/employees', 'EmployeeController.store')
