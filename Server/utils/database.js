import User from "../models/user";
import md5 from "md5";

const getUserDataByPhone = async (phone) => (await User.findOne({ where: { phoneNumber: phone } })).dataValues; // return user Data from database

const checkIfUserExists = async (phone) => ((await User.findAll({ where: { phoneNumber: phone } })).length !== 0 ? true : false); // return true if the user doesn't exists

const comparePassword = async (phone, password) => {
  try {
    // get password from the database
    const DBpassword = (await User.findOne({ where: { phoneNumber: phone } }, { fields: ["password"] })).dataValues.password;

    // get password as md5 hash from the client
    const CLpassword = md5(password);

    // return true if if the passwords match
    return DBpassword === CLpassword ? true : false;
  } catch (err) {
    throw err;
  }
};

const createAccount = async (data) => {
  try {
    // create new record into the database
    const UserData = await User.create({ lastName: data.lastName, phoneNumber: data.phoneNumber, password: md5(data.password), accountType: data.accountType });

    // return user data values
    return UserData.dataValues;
  } catch (err) {
    throw err;
  }
};

export { createAccount, checkIfUserExists, comparePassword, getUserDataByPhone };
