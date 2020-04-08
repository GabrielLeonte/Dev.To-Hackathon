import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// load .env data
dotenv.config();

// check if the token is valid
const token_valability = async (socket, token) => {
  try {
    await jwt.verify(token, process.env.ACCOUNT_SECRET); // to avoid too many requests we're just checking the token, without returning any value
  } catch (err) {
    socket.emit("critical_error", { message: err.message, name: err.name });
  }
};

export default token_valability;
