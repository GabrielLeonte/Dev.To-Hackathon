import Sequelize from "sequelize";
import dotenv from "dotenv";

// load .env data
dotenv.config();

// connect to the database (sqlite one in our case)
const sequelize = new Sequelize({ dialect: "sqlite", storage: process.env.DB_PATH });

const Model = Sequelize.Model;
class User extends Model {}

User.init(
  {
    // attributes
    lastName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    accountType: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "user",
  }
);

export default User;
