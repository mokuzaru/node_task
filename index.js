const Hapi = require('@hapi/hapi');
const {getUsers, postUsers} = require('./src/users')
const { 
  getProducts,
  postProducts,
  getByIdProduct} = require('./src/products')

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    //handlerRoutes

    server.route(getUsers)
    server.route(postUsers)
    server.route(getProducts)
    server.route(postProducts)
    server.route(getByIdProduct)


    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();