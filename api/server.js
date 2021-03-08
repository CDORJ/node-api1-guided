// IMPORTS AT THE TOP
// IMPORTS AT THE TOP
// IMPORTS AT THE TOP
const express = require('express') // import express from 'express'
// const { findAll, findById } = require('./dog-model')
const Dog = require('./dog-model.js')

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

// [GET] /api/dogs/:id (R of CRUD, fetch dog by :id)
server.get('/api/dogs/:foo', (req, res) => {
  // ? where is this id parameter coming from?
  const id = req.params.foo
})

// [GET] /api/dogs (R of CRUD, fetch all dogs)
server.get('/api/dogs', (req, res) => {
  // CAREFUL NEVER TO RESPOND MORE THAN ONCE ---> ERROR
  // res.status(200).json('it works!!!!!!!')
  Dog.findAll()
    .then(dogs => {
      console.log(dogs)
      res.status(200).json(dogs)
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})

// [POST] /api/dogs (C of CRUD, create new dog from JSON payload)

// [PUT] /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)

// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)


// [GET] / (Hello World endpoint)
server.use('*', (req, res) => {
  // here we do whatever with the request from the client
  res.status(404).json({ message: 'resource not found in this server' })
})

// EXPOSING THE SERVER TO OTHER MODULES
// EXPOSING THE SERVER TO OTHER MODULES
// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server
