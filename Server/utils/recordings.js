import Recordings from "../models/recordings";
import { removeOpenCase } from "../socketsEventListener";

const createRecordIntoDatabase = async (body) => {
  try {
    return Recordings.create({
      CallSid: body.CallSid,
      CallStatus: body.CallStatus,
      Caller: body.Caller,
      CallerCity: body.CallerCity,
      CallerState: body.CallerState,
      CallerZip: body.CallerZip,
      RecordingDuration: body.RecordingDuration,
      RecordingUrl: body.RecordingUrl,
      Status: "Waiting",
    });
  } catch (err) {
    throw JSON.stringify(err);
  }
};

const getAllCases = async () => {
  try {
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

const takeCase = async (CallSid, id) => {
  try {
    // get the hole record from the database
    const caseData = await Recordings.findOne({ where: { CallSid: CallSid } });

    // check if the case still exists
    if (caseData === null) throw "Sorry but this case doesn't exist anymore";

    // check if the case isn't already taked
    if (caseData.dataValues.Status != "Taken" && caseData.dataValues.takenBy !== null) throw "This case already has been taken";

    // update database record
    await Recordings.update({ takenBy: id, Status: "Taken", takenByTime: Date.now() }, { where: { CallSid: CallSid } });

    // emit case data object and notify every client
    removeOpenCase.emit("event", caseData);

    // return a beautiful answare :D
    return true;
  } catch (err) {
    throw JSON.stringify(err);
  }
};

const releaseCase = async (CallSid, UserId) => {
  try {
    // get the hole record from the database
    const caseData = await Recordings.findOne({ where: { CallSid: CallSid } });

    // check if the case still exists
    if (caseData === null) throw "Sorry but this case doesn't exist anymore";

    // make sure that the case is taken by the requesting user id
    if (caseData.dataValues.takenBy != UserId) throw "Sorry, but this case doesn't belong to you...";

    // update database record
    await Recordings.update({ takenBy: null, Status: "Waiting" }, { where: { CallSid: CallSid } });

    // return a beautiful answare :D
    return true;
  } catch (err) {
    throw JSON.stringify(err);
  }
};

const getCaseByCallSid = async (id) => {
  try {
    return await Recordings.findOne({ where: { CallSid: id } });
  } catch (err) {
    throw err;
  }
};

const closeCase = async (data) => {
  try {
    await Recordings.update({ solvedDescription: data.Description, solvedClientName: data.Contact_Name, solvedByID: data.SolvedBy, Status: "Solved" }, { where: { Caller: data.Caller_Number } });
  } catch (err) {}
};
export { createRecordIntoDatabase, getAllCases, getMyCases, takeCase, releaseCase, getCaseByCallSid, closeCase };
