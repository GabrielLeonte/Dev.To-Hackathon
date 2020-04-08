import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { getUserDataByPhone } from "./database";

// load .env data
dotenv.config();

const generateJWTByPhone = async (phone) => {
  // get user data from database
  const user = await getUserDataByPhone(phone);

  // remove password key from user data
  delete user["password"];

  // sign token and return it
  return jwt.sign(user, process.env.ACCOUNT_SECRET);
};

export { generateJWTByPhone };
