// import the server and start it
const server = require("./api/server");

const PORT = 3000;

server.listen(PORT,()=> {
    console.log(`\n *** Listening on port ${PORT} *** \n`)
})
