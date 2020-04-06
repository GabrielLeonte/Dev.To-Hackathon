import dotenv from "dotenv";
import Sequelize from "sequelize";

// load .env data
dotenv.config();

// connect to the database (sqlite one in our case)
const sequelize = new Sequelize({ dialect: "sqlite", storage: process.env.DB_PATH });

/*const test = async () => {
  await User.sync();
  await User.create({ firstName: "XiaoMing", lastName: "1234567890", data: "xiaoming@qq.com" });
};*/
