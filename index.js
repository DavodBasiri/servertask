require("dotenv").config();
const Aplication = require("./app/server");
new Aplication(process.env.PORT, process.env.DATABASE_URL);
