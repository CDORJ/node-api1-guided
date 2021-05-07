// IMPORTS AT THE TOP
const express = require("express");
const Dog = require("./dog-model");

// INSTANCE OF EXPRESS APP
const server = express();

// GLOBAL MIDDLEWARE
server.use(express.json());

// ENDPOINTS
// ENDPOINTS
// ENDPOINTS

// [GET] / (Hello World endpoint)
server.get("/", (req, res) => {
  res.status(200);
  res.send({ message: "Hello World" });
});

// [GET] /api/dogs/:id (R of CRUD, fetch dog by :id)
server.get("/api/dogs/:id", async (req, res) => {
  const { id } = req.params;
  const specificDog = await Dog.findById(id);
  
  if (specificDog === undefined) {
    res.status(404).send({ message: "Dog not found. Invalid ID." });
  } else {
    res.send(specificDog);
  }
});

// [GET] /api/dogs (R of CRUD, fetch all dogs)
server.get("/api/dogs", async (req, res) => {
  const dogs = await Dog.findAll();
  res.send(dogs);
});

// [POST] /api/dogs (C of CRUD, create new dog from JSON payload)
server.post("/api/dogs", async (req, res) => {
  const { name, weight } = req.body;

  if (!name || !weight) {
    res.status(400).send({ message: "name and weight required" });
  } else {
    const newDog = await Dog.create({ name, weight });
    res.status(200).send(newDog);
  }
});

// [PUT] /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)

// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)

// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server;
