import { createRecordIntoDatabase } from "../../utils/recordings";

const voice = async (req, res) => {
  await createRecordIntoDatabase(req.body); // get data into the database
};

export default voice;
