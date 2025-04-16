// External modules
const express = require("express");

// local modules


//Create app using express
const app = express();

// Create server using express
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`server is running on address http://localhost:${PORT}`);
})