import { checkIfUserExists, comparePassword, getUserDataByPhone } from "../utils/database";
import { generateJWTByPhone } from "../utils/JWT";

const loginEvent = async (socket, data) => {
  try {
    // check if all parameters exists in the data object
    if (Object.keys(data).length !== 2 || !data.phone || !data.password) throw "Please provide the correct login params";

    // check if user exists
    if (await checkIfUserExists(data.phone)) throw "The user phone you entered does not exist";

    // compare passwords
    if (!(await comparePassword(data.phone, data.password))) throw "The password you entered is incorrect";

    // generate json web token
    const token = await generateJWTByPhone(data.phone);

    // get user data
    const user = await getUserDataByPhone(data.phone);

    // remove password key from user data
    delete user["password"];

    // send token back to the client
    socket.emit("token", token);

    // send user data to update store
    socket.emit("user_data", { user });
  } catch (err) {
    socket.emit("error_response", err);
  }
};

export default loginEvent;
