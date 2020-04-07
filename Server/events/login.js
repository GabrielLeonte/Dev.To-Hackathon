import { checkIfUserExists, comparePassword } from "../utils/database";

const login = async (socket, data) => {
  try {
    // check if all parameters exists in the data object
    if (Object.keys(data).length !== 2 || !data.phone || !data.password) throw "Please provide the correct login params";

    // check if user exists
    if (await checkIfUserExists(data.phone)) throw "The user phone you entered does not exist";

    // compare passwords
    if (!(await comparePassword(data.phone, data.password))) throw "The password you entered is incorrect";

    // compare password
  } catch (err) {
    socket.emit("error_response", err);
  }
};

export default login;

//const user = await User.findAll({ where: { authorId: 2 } });
