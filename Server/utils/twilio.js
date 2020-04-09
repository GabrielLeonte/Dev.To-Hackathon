import dotenv from "dotenv";

// load .env data
dotenv.config();

// log into twilio account
const client = require("twilio")(process.env.accountSid, process.env.authToken);

const sendNewPassword = async (phone, password) => {
  try {
    await client.messages.create({
      body: `Hello, here is your login data on out platform\n\nPhone: ${phone}\nNew Password: ${password} \n\nHave a nice day! \n - Support Team`,
      from: "+18554101733",
      to: `${process.env.COUNTRY_PREFIX}${phone}`,
    });

    return true;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default sendNewPassword;
