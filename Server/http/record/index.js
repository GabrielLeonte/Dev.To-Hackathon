import { createRecordIntoDatabase } from "../../utils/recordings";
import { newOpenCase } from "../../socketsEventListener";

const voice = async (req, res) => {
  // get data into the database
  const callData = await createRecordIntoDatabase(req.body); 

  // send data from the call through an event
  newOpenCase.emit("event", callData);
};

export default voice;
