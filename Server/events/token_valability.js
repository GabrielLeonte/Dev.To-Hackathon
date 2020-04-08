import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { getUserDataByPhone } from "../utils/database";

// load .env data
dotenv.config();

// check if the token is valid
const token_valability = async (socket, token) => {
  try {
    // get user data from a valid token
    const UserData = await jwt.verify(token, process.env.ACCOUNT_SECRET);

    // get database user data by Phone Number
    const DBUserData = await getUserDataByPhone(UserData.phoneNumber);

    // remove password key from DBUserData Object
    delete DBUserData["password"];

    // return user data to the client
    socket.emit("user_data", DBUserData);
  } catch (err) {
    socket.emit("critical_error", { message: err.message, name: err.name });
  }
};

export default token_valability;
