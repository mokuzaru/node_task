const hapi = require('@hapi/hapi');

const server = hapi.server({
    host: 'localhost',
    port: 8000
});

//routes


// server.get('/item', (res, req, next) => {
//     res.
// })

//server

const start = async () => {

    server.route({
        method: 'GET',
        path: '/hello',
        handler: (request, h) => {
            return 'Hello World!';
        }
    });
    try {
        await server.start();
        console.log('Server running at:', server.info.uri);
    }
    catch (err) {
        console.log('error al inicar hapi');
    }
};
start();

// server.listen('port', ()=> {
//     console.log('Server on port 4000');
// })