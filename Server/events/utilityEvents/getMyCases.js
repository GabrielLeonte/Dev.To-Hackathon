import { getMyCases } from "../../utils/recordings";
import { verifyJWT } from "../../utils/JWT";

const getMyCasesEvent = async (socket, token) => {
  try {
    // make sure JWT Token is Valid
    const userData = await verifyJWT(token);

    // get cases by phone from the database
    const cases = await getMyCases(userData.id);

    // send cases array to the client
    socket.emit("MyCases", cases);
  } catch (err) {
    socket.emit("critical_error", err);
  }
};

export default getMyCasesEvent;
