import { getMyCases } from "../utils/recordings";
import { verifyJWT } from "../utils/JWT";

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

// Test Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibGFzdE5hbWUiOiJHaWdhIiwicGhvbmVOdW1iZXIiOiIwNzYzMTcxNDcyIiwiYWNjb3VudFR5cGUiOiJ1c2VyIiwiY3JlYXRlZEF0IjoiMjAyMC0wNC0wOVQxMjoyMDo0MC4yMDRaIiwidXBkYXRlZEF0IjoiMjAyMC0wNC0wOVQxMjo0MToyNC41MzNaIiwiaWF0IjoxNTg2NzkzMDM4fQ.52uRIvx7t5fF2hPKZxX9MKce6eorN0f_hXhkkeGWEks
