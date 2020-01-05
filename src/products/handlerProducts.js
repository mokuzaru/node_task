const {products} = require('../../db')

const handlerProducts = {
  getAllProducts : (req, h) =>{
    return h.response(products)
  },
  getOnlyProduct:(req,h)=>{
    const userFilter = products.filter(user => req.params.id===user.id)[0]
    if(userFilter) return h.response(products)
    else return h.response({message:'no existe este producto'})
  },
  postProducts: (req, h) =>{
    products.push({...req.payload})
    return h.response(products)
  },
  putProducts: (req, h) =>{
    const userFilter = products.filter(user => req.params.id===user.id)[0]
    products.push({...userFilter,...req.payload})
    return h.response(products)
  }
}

module.exports = handlerProducts;