const Hapi = require('hapi')


const listUser = {
  1:{
    name: 'name1',
    lastName: 'lastname1'
  },
  2:{
    name: 'name2',
    lastName: 'lastname2'
  }
};

const init = async () => {
  const server = Hapi.server({
    port:3000,
    host:'localhost',
    app: {}
  })

  await server.start();

  server.route({
    method:'GET',
    path:'/',
    handler: (request, h)=>{
      return listUser
    }
  },
  {
    method: 'POST',
    path: '/usuarios',
    handler: async (req, res) => {
      console.log('hello')
    }
  })
  
}

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();

// async ? 
// const iniciarServer = async () => {
//   try {
//     await server.start();
//   }
// }

