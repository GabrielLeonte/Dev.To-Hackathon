import { verifySignUpCode, updateCode } from "../utils/code";
import { checkIfUserExists, createAccount } from "../utils/database";
import { generateJWTByPhone } from "../utils/JWT";

const signup = async (socket, data) => {
  try {
    // check if the sign up code is valid
    if (await verifySignUpCode(data.code)) throw "The code is not valid";

    // check if the user  exists
    if (await checkIfUserExists(data.phone)) throw "The phone number has already been used";

    // insert user data into the database
    const UserData = await createAccount({ lastName: data.lastname, phoneNumber: data.phone, password: data.password, accountType: "user" });

    // generate json web token
    const token = await generateJWTByPhone(data.phone);

    // remove password key from UserData
    delete UserData["password"];

    // send json web token to the client
    socket.emit("token", token);

    // send user data to the client
    socket.emit("user_data", UserData);

    // update code stats
    await updateCode(data.code, UserData.id);
  } catch (err) {
    console.log(err);
    socket.emit("error_response", err);
  }
};

export default signup;
