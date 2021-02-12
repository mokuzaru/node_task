'use strict';

const hp = require('@hapi/hapi');
const routes = require('./routes')

const init = async () => {

    // const user ={
    //     username : "tony",
    //     age : 20
    // };

    const server = hp.server({
        port: 3000,
        host: 'localhost',
        app: {}
    });

    await server.register(routes);
    await server.start();
    console.log('server running on %s', server.info.uri);

    //Routing
    //GET all
    // server.route({
    //     method: 'GET',
    //     path: '/',
    //     handler: (req, h) =>{
    //         req.log('error', 'Event error');
    //         return 'Hallo everybody'
    //     }
    // });
    //
    // //GET
    // server.route({
    //     method: 'GET',
    //     path: '/user/{user}',
    //     handler: function (request, h) {
    //
    //         return `Hello ${request.params.user}!`;
    //     }
    // });

    //POST
    // server.route({
    //     method: 'POST',
    //     path: '/signup',
    //     handler: function (request, h) {
    //
    //         const payload = request.payload;
    //
    //         return `Welcome ${payload.username}!`;
    //     }
    // });

};

process.on('onunhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();


