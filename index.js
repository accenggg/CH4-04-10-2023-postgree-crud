const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const router = require("./routes");
const { port } = require("pg/lib/defaults");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));
app.use(router);

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
