import { getAllCases } from "../utils/recordings";

const getCases = async (socket, data) => {
  try {
    // get all cases from the database
    const cases = await getAllCases();

    // send cases array to the client
    socket.emit("cases", cases);
  } catch (err) {
    console.log(err);
    socket.emit("error_response", err);
  }
};

export default getCases;
