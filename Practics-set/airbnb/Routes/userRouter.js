// External modules
const express = require("express");

const userRouter = express.Router(); // create a router object

userRouter.get("/", (req, res, next) => {
  res.send(`
		<h1>hello from airbnb</h1>
		<a href="add-home">Add Home</a>
		`);
});

module.exports = userRouter; // export the router object
