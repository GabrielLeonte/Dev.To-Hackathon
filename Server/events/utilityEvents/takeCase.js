import { takeCase } from "../../utils/recordings";
import { verifyJWT } from "../../utils/JWT";
import { getUserDataByPhone } from "../../utils/database";

const takeCaseEvent = async (socket, data) => {
  try {
    // get User Login Data from the Json Web Token
    const UserTokenData = await verifyJWT(data.token);

    // use the provided phone number to receive user unique ID from database
    const UserDBData = await getUserDataByPhone(UserTokenData.phoneNumber);

    // update the record with the specified CallSid
    await takeCase(data.CallSid, UserDBData.id);

    // send a really cute success notification
    socket.emit("success_response", `Case ${data.CallSid} has been successfully taken`);
  } catch (err) {
    socket.emit("error_response", err);
  }
};

export default takeCaseEvent;
