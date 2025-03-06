// core modules
const http = require("http");

// External modules
const express = require("express");

const app = express(); // create an express app

const server = http.createServer(app); // create a server using the express app

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
