const users = [
  {
    id:'owner1',
    name:'Mayte',
    email:'mayte@gmail.com',
    password:'123456'
  },
  {
    id:'owner12',
    name:'Nancy',
    email:'nancy@gmail.com',
    password:'123456'
  }
]
const products = [
  {
    id:'product1',
    name: 'casacas',
    price:'150',
    currency:'soles',
    owner:'owner1'
  },
  {
    id:'product2',
    name: 'pantalon',
    price:'100',
    currency:'soles',
    owner:'owner2'
  }
]

module.exports = {
  users,
  products
}