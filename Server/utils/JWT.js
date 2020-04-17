import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { getUserDataByPhone } from "./database";

// load .env data
dotenv.config();

const generateJWTByPhone = async (phone) => {
  try {
    // get user data from database
    const user = await getUserDataByPhone(phone);

    // remove password key from user data
    delete user["password"];

    // sign token and return it
    return jwt.sign(user, process.env.ACCOUNT_SECRET);
  } catch (err) {
    socket.emit("error_response", err);
  }
};

const verifyJWT = async (token) => {
  try {
    // return JWT Token data if it is required
    return await jwt.verify(token, process.env.ACCOUNT_SECRET);
  } catch (err) {
    throw "Invalid JWT";
  }
};

export { generateJWTByPhone, verifyJWT };
