// External module
const express = require("express");

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.send(`
		<h1>hello from add-home</h1>
		<form action="/add-home" method="POST">
			<input type="text" name="home" placeholder="Enter Home Name" required>
			<button type="submit">Add Home</button>
		</form>
		`);
});

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body); // { home: 'home name' }
  res.send(`
		<h1>Home register successfully</h1>
	  <a href="/">Home</a>
		`);
});

module.exports = hostRouter;
