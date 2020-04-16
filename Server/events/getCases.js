import { getAllCases } from "../utils/recordings";
import { verifyJWT } from "../utils/JWT";

const getCases = async (socket, data) => {
  try {
    // make sure JWT Token is Valid
    await verifyJWT(data);

    // get all cases from the database
    const cases = await getAllCases();

    // send cases array to the client
    socket.emit("cases", cases);
  } catch (err) {
    console.log(err);
    socket.emit("critical_error", err);
  }
};

export default getCases;
