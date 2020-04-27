import { releaseCase, getCaseByCallSid } from "../../utils/recordings";
import { verifyJWT } from "../../utils/JWT";
import { getUserDataByPhone } from "../../utils/database";
import { newOpenCase } from "../../socketsEventListener";

const releaseCaseEvent = async (socket, data) => {
  try {
    // get User Login Data from the Json Web Token
    const UserTokenData = await verifyJWT(data.token);

    // use the provided phone number to receive user unique ID from database
    const UserDBData = await getUserDataByPhone(UserTokenData.phoneNumber);

    // update the record with the specified CallSid
    await releaseCase(data.CallSid, UserDBData.id);

    // send a really cute success notification
    socket.emit("success_response", `Case ${data.CallSid} has been successfully release`);

    // get call record by CallSid from database
    const CallData = await getCaseByCallSid(data.CallSid);

    // emit callData back into the client
    newOpenCase.emit("event", CallData.dataValues);
  } catch (err) {
    socket.emit("error_response", err);
  }
};

export default releaseCaseEvent;
