// IMPORTS AT THE TOP
// IMPORTS AT THE TOP
// IMPORTS AT THE TOP
const express = require('express') // import express from 'express'

// INSTANCE OF EXPRESS APP
// INSTANCE OF EXPRESS APP
// INSTANCE OF EXPRESS APP
const server = express()

// GLOBAL MIDDLEWARE
// GLOBAL MIDDLEWARE
// GLOBAL MIDDLEWARE
server.use(express.json()) // teaches express to parse the bodies of reqs as JSON

// ENDPOINTS
// ENDPOINTS
// ENDPOINTS

// [GET] / (Hello World endpoint)
server.use('*', (req, res) => {
  // here we do whatever with the request from the client
  res.status(200).json({  })
})

// [GET] /api/dogs/:id (R of CRUD, fetch dog by :id)

// [GET] /api/dogs (R of CRUD, fetch all dogs)

// [POST] /api/dogs (C of CRUD, create new dog from JSON payload)

// [PUT] /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)

// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)

// EXPOSING THE SERVER TO OTHER MODULES
// EXPOSING THE SERVER TO OTHER MODULES
// EXPOSING THE SERVER TO OTHER MODULES
