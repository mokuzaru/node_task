module.exports = {
    name: 'ApiRoutes',
    register: async (server, options) => {
        server.route([
            //GET Devuelve Saludo Cliente
            {
                method: 'GET',
                path: '/',
                handler: async (req, res) => {
                    return 'Hola Cliente!';
                }
            },
            //GET Devuelve Cliente ingresado
            {
                method: 'GET',
                path: '/users/{name?}',
                handler: (req, res) => {
                    const name = (req.params.name) ? req.params.name: 'Usuario';
                    return `Hola ${name}! ☻`;
                }
            },
            // POST ingresa y devuelve el cliente
            {
                method: 'POST',
                path: '/users',
                handler: async (req, res) => {
                    const newUser = {
                        name: req.payload.name,
                        lastname: req.payload.lastname
                    };
                    return res.response({
                        datos: newUser
                    }).type('application/json');
                }
            },
            //PUT
            {
                method: 'PUT',
                path: '/users/{id}',
                handler: async (req, res) => {
                    const newUser = {
                        name: req.payload.name,
                        lastname: req.payload.lastname
                    };
                    return res.response({
                        datos: newUser,
                        msg: `Usuario ID: ${req.params.id} modificado exitósamente!`
                    }).type('application/json')
                }
            },
            //Delete
            {
                method: 'DELETE',
                path: '/users/{id}',
                handler: async (req, res) => {
                    return res.response({
                        msg: `Usuario ID: ${req.params.id} eliminado exitósamente!`
                    }).type('application/json');
                }
            }
        ]);
    }
}
