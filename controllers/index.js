const handlerUsers = require('./users/handleUsers')

const getUsers = {
  method:'GET',
  path:'/users',
  handler: handlerUsers.getAllUsers
}
const postUsers = {
    method:'POST',
    path:'/users',
    handler: handlerUsers.postUsers
}


module.exports = {
  getUsers,
  postUsers
}