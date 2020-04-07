import User from "../models/user";
import md5 from "md5";

const createAccount = async (data) => {
  try {
    await User.sync();
    await User.create({ lastName: data.lastName, phoneNumber: data.phoneNumber, password: md5(data.password), accountType: data.accountType });
    return true;
  } catch (err) {
    throw err;
  }
};

const comparePassword = async (phone, password) => (await User.findOne({ where: { phoneNumber: phone } }, { fields: ["password"] }).password) === md5(password); // return true if the database password is the same with the enter one

const checkIfUserExists = async (phone) => ((await User.findAll({ where: { phoneNumber: phone } })).length !== 0 ? false : true); // return true if the user doesn't exists

export { createAccount, checkIfUserExists, comparePassword };
