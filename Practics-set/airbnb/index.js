// External modules
const express = require("express");

const app = express();

// Local modules
const userRouter = require("./Routes/userRouter");
const hostRouter = require("./Routes/hostRouter");

app.use(express.urlencoded()); // parse urlencoded data

app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1> 404 your page is not found in airbnb </h1>");
});
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`server is running on address http://localhost:${PORT}`);
});
