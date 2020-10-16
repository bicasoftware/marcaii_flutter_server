"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return {
    status: "online",
  };
});

Route.group(() => {
  Route.post("/register", "AuthController.register");
  Route.post("/login", "AuthController.login");
}).prefix("auth");

Route.group(() => {
  Route.get("", "EmpregoController.listAll");
  Route.get("/:id", "EmpregoController.findById");
  Route.delete("/:id", "EmpregoController.remove");
  Route.post("", "EmpregoController.insert");
  Route.put("/:id", "EmpregoController.update");
}).prefix("empregos");

Route.group(() => {
  Route.get("/:id", "HoraController.listAll");
  Route.post("", "HoraController.insert");
  Route.delete("/:id", "HoraController.remove");
}).prefix("horas");
