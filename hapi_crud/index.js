const Hapi = require("@hapi/hapi");

const items = {
  1: {
    name: "corbata",
    precio: 80
  },
  2: {
    name: "pantalon",
    precio: 170
  }
};

let itemCount = 2;

const server = Hapi.server({
  port: 3000,
  host: "localhost"
});

server.route({
  method: "GET",
  path: "/",
  handler: function(request, h) {
    return "Hello World";
  }
});

//List
server.route({
  method: "GET",
  path: "/items",
  handler: function(request, h) {
    return items;
  }
});

//List by ID
server.route({
  method: "GET",
  path: "/item/{id}",
  handler: function(request, h) {
    return { item: items[request.params.id] };
  }
});

//Create
server.route({
  method: "POST",
  path: "/item",
  handler: function(request, h) {
    itemCount++;
    items[itemCount] = request.payload;
    return { mensaje: "Item Agregado", item: items[itemCount] };
  }
});

//Update
server.route({
  method: "PUT",
  path: "/item/{id}",
  handler: function(request, h) {
    let { name, precio } = request.payload;
    items[request.params.id] = { name, precio };
    return { mensaje: "Item Actualizado", item: items[request.params.id] };
  }
});

//Delete
server.route({
  method: "DELETE",
  path: "/item/{id}",
  handler: function(request, h) {
    delete items[request.params.id];

    return { mensaje: "Item Eliminado" };
  }
});

//Delete all
server.route({
  method: "DELETE",
  path: "/items",
  handler: function(request, h) {
    for (let item in items) {
      delete items[item];
    }
    return { mensaje: "Items Eliminados" };
  }
});

const start = async () => {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("Server running at:", server.info.uri);
};

start();
