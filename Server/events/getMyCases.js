import { getMyCases } from "../utils/recordings";
import { verifyJWT } from "../utils/JWT";

const getMyCases = async (socket, data) => {
  try {
    // make sure JWT Token is Valid
    const userData = await verifyJWT(data);

    // get cases by phone from the database
    const cases = await getMyCases(userData.phone);

    // send cases array to the client
    socket.emit("cases", cases);
  } catch (err) {
    console.log(err);
    socket.emit("critical_error", err);
  }
};

export default getMyCases;
