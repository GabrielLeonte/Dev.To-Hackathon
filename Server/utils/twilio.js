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
  } catch (err) {
    throw JSON.stringify(err);
  }
};

const sendSolveSMS = async (type, data) => {
  try {
    const phone_numbers_array = JSON.parse(process.env[type]);

    await client.messages.create({
      body: `Client Contact Infos\n - Name: ${data.Contact_Name} \n - Phone: ${data.Caller_Number}\n\nAddress\n - City: ${data.City}\n - State: ${data.State}\n - Zip: ${data.Zip}\n\n\nClient Request Description \n${data.Description}`,
      from: "+18554101733",
      to: phone_numbers_array[Math.floor(Math.random() * phone_numbers_array.length)],
    });
  } catch (err) {
    throw JSON.stringify(err);
  }
};

export { sendNewPassword, sendSolveSMS };
