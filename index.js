const Hapi = require('@hapi/hapi');
const {getUsers, postUsers} = require('./controllers')

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    //handleRoutes

    server.route(getUsers)
    server.route(postUsers)

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();