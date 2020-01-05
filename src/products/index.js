const handlerProducts = require('./handlerProducts')


const getProducts = {
  method:'GET',
  path:'/products',
  handler: handlerProducts.getAllProducts
}
const getByIdProduct = {
  method:'GET',
  path:'/products/{id}',
  handler: handlerProducts.getOnlyProduct
}
const postProducts = {
    method:'POST',
    path:'/products',
    handler: handlerProducts.postProducts
}


module.exports = {
  getProducts,
  getByIdProduct,
  postProducts,
}