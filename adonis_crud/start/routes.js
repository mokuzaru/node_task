"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

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

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

//List
Route.get("/items", () => {
  return { items: items };
});

//List by ID
Route.get("/item/:id", ({ params }) => {
  return { item: items[params.id] };
});

//Create
Route.post("/item", ({ request }) => {
  itemCount++;
  items[itemCount] = request.post();
  return { mensaje: "Item Agregado", item: items[itemCount] };
});

//Update
Route.put("/item/:id", ({ request, params }) => {
  let { name, precio } = request.post();
  items[params.id] = { name, precio };
  return { mensaje: "Item Actualizado", item: items[params.id] };
});

//Delete
Route.delete("/item/:id", ({ params }) => {
  delete items[params.id];

  return { mensaje: "Item Eliminado" };
});

//Delete all
Route.delete("/items", ({ request, params }) => {
  for (let item in items) {
    delete items[item];
  }
  return { mensaje: "Items Eliminados" };
});
