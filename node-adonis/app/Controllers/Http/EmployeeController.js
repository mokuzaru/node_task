'use strict'

class EmployeeController {
  async store ({ request, response }) { 
    try {
      return response
        .status(200)
        .send('success!!')
    } catch (err) {
      return response
        .status(err.status)
        .send(err)
    }
   }
}

module.exports = EmployeeController
