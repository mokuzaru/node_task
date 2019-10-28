const {users} = require('../../db')

const handlerUsers = {
  getAllUsers : (req, h) =>{
    return h.response(users)
  },
  postUsers: (req, h) =>{
    console.log({...req.payload})
    users.push({...req.payload})
    return h.response(users)
  }
}

module.exports = handlerUsers;