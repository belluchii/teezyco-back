const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DB_NAME, null, null, {
  host: process.env.DB_HOST,
  dialect: "postgres",
  logging: false,
});

module.exports = db;
