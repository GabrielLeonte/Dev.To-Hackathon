import { getCaseByCallSid, closeCase } from "../../utils/recordings";
import { sendSolveSMS } from "../../utils/twilio";
import { verifyJWT } from "../../utils/JWT";

const solveCaseEvent = async (socket, data) => {
  try {
    // verify if the token is valid
    const UserData = await verifyJWT(data.token);

    // get case data from the database
    const caseData = await getCaseByCallSid(data.id);

    // gather all data into one single object
    const dataBlock = {
      SolvedBy: UserData.id,
      Caller_Number: caseData.dataValues.Caller,
      Contact_Name: data.clientName,
      City: caseData.dataValues.CallerCity,
      State: caseData.dataValues.CallerState,
      Zip: caseData.dataValues.CallerZip,
      Description: data.description,
    };

    // send the SolveSMS by the case type
    switch (data.type) {
      case "shoppings":
        await sendSolveSMS("SHOPPINGS", dataBlock);
        break;
      case "food-delivery":
        await sendSolveSMS("FOOD_DELIVERY", dataBlock);
        break;
      case "human-help":
        await sendSolveSMS("HUMAN_HELP", dataBlock);
        break;
      case "pharmacy-shoppings":
        await sendSolveSMS("PHARMACY_SHOPPINGS", dataBlock);
        break;
      case "basic-food":
        await sendSolveSMS("BASIC_FOOD", dataBlock);
        break;
      case "other":
        await sendSolveSMS("OTHER", dataBlock);
        break;
      default:
        throw "The case provided is incorrect";
    }

    // update database case and solve this freaking awesome case
    await closeCase(dataBlock);

    // send a really cute success notification
    socket.emit("success_response", `Whooooooooooo! You're a hero! The description has been forwarded to a volunteer, let's hope that this man will be happy again! :D`);
  } catch (err) {
    console.log(err);
    socket.emit("error_response", err);
  }
};

export default solveCaseEvent;
