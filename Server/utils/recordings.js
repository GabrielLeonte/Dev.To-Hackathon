import Recordings from "../models/recordings";

const createRecordIntoDatabase = async (body) => {
  try {
    await Recordings.create({
      CallSid: body.CallSid,
      CallStatus: body.CallStatus,
      Caller: body.Caller,
      CallerCity: body.CallerCity,
      CallerState: body.CallerState,
      CallerZip: body.CallerZip,
      RecordingDuration: body.RecordingDuration,
      RecordingUrl: body.RecordingUrl,
      Status: "waiting",
    });

    return true;
  } catch (err) {
    throw JSON.stringify(err);
  }
};

const getAllCases = async () => {
  try {
    console.log(await Recordings.findAll());

    return await Recordings.findAll();
  } catch (err) {
    throw JSON.stringify(err);
  }
};

const getMyCases = async (id) => {
  try {
    const cases = await Recordings.findAll({ where: { takenBy: id } });
    return cases;
  } catch (err) {
    throw JSON.stringify(err);
  }
};

export { createRecordIntoDatabase, getAllCases, getMyCases };
