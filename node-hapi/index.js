const Hapi = require('hapi');


let students = {
  0: {
    name: 'Alicia',
    company: 'Linkedin'
  },
  1: {
    name: 'Gonzalo',
    company: 'Facebook'
  },
  2: {
    name: 'Melania',
    company: 'Google'
  }
};

const server = Hapi.server({
  port: 8080,
  host: 'localhost'
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, response) => {
    return 'Hello World!';
  }
});

server.route({
  method: 'POST',
  path: '/',
  handler: function (request, response) {
    const id = Object.values(students).length;
    const addStudents = {...students, [id]: request.payload };
    return response.response(addStudents).type('application/json');
  }
});

server.route({
  method: 'PUT',
  path: '/{id}',
  handler: function (request, response) {
    students[request.params.id] = request.payload;
    return students;
  }
});

server.route({
  method: 'DELETE',
  path: '/{id}',
  handler: function (request, response) {
    delete students[request.params.id];
    const updateStudents = Object.keys(students).reduce((acc, prev, idx) => {
      acc[idx] = students[prev]
      return acc;
    }, {}); 
    return newStudents;
  }
});

const init = async () => {
  try {
    await server.start();
    console.log('Server running on %s', server.info.uri);
  } catch (error) {
    console.log('Error server :(');
  }
  await server.start();
};

init();