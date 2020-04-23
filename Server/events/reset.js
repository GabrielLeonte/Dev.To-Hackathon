import sendNewPassword from "../utils/twilio";
import { generatePassword } from "../utils/strings";
import { updatePassword, checkIfUserExists } from "../utils/database";

const resetEvent = async (socket, data) => {
  try {
    // check if the phone is empty
    if (!data.phone) throw "A phone number must be provided";

    // check if user exists
    if (await checkIfUserExists(data.phone)) throw "This phone number doesn't exists in our database";

    // generate a new password of 6 digits
    const newPassword = await generatePassword();

    // update database with the new password
    await updatePassword(data.phone, newPassword);

    // send sms with the new password
    await sendNewPassword(data.phone, newPassword);

    // send success back to the client
    socket.emit("success_response", `A new password has been sent on ${data.phone} \nThis may take up to 15 minutes`);
  } catch (err) {
    socket.emit("error_response", err);
  }
};

export default resetEvent;
