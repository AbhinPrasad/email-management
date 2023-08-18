const express = require("express");
const colors = require('colors')
const dotenv = require("dotenv").config();
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(routes.email);

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`Server is running on ${port}`.america);
});
