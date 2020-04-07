import User from "../models/user";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import md5 from "md5";

// load .env data
dotenv.config();

const getUserDataByPhone = async (phone) => (await User.findOne({ where: { phoneNumber: phone } })).dataValues; // return user Data from database

const checkIfUserExists = async (phone) => ((await User.findAll({ where: { phoneNumber: phone } })).length !== 0 ? false : true); // return true if the user doesn't exists

const comparePassword = async (phone, password) => {
  try {
    // get password from the database
    const DBpassword = (await User.findOne({ where: { phoneNumber: phone } }, { fields: ["password"] })).dataValues.password;

    // get password as md5 hash from the client
    const CLpassword = md5(password);

    return DBpassword === CLpassword ? true : false;
  } catch (err) {
    throw err;
  }
};

const createAccount = async (data) => {
  try {
    await User.sync();
    await User.create({ lastName: data.lastName, phoneNumber: data.phoneNumber, password: md5(data.password), accountType: data.accountType });
  } catch (err) {
    throw err;
  }
};

const generateJWTByPhone = async (phone) => {
  // get user data from database
  const user = await getUserDataByPhone(phone);

  // remove password key from user data
  delete user["password"];

  // sign token
  return jwt.sign(user, process.env.ACCOUNT_SECRET);
};

export { createAccount, checkIfUserExists, comparePassword, generateJWTByPhone, getUserDataByPhone };
