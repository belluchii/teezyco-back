// Configuración del server
const express = require("express");
const db = require("./config/db");
const routes = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const corsOptions = {
  origin: process.env.CORS,
  credentials: true,
};

const app = express();
app.use(cookieParser());

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", routes);

db.sync({ force: false }).then(() => {
  app.listen(process.env.DB_PORT || 3001);
});
