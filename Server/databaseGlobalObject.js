import Sequelize from "sequelize";
import dotenv from "dotenv";

// load .env data
dotenv.config();

// connect to the database (sqlite one in our case)
const sequelize = new Sequelize({ dialect: "sqlite", storage: process.env.DB_PATH });

export { Sequelize, sequelize };
