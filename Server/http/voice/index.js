import { twiml as voiceModule } from "twilio";
import dotenv from "dotenv";

// load .env variables
dotenv.config();

const voice = async (req, res) => {
  const twiml = new voiceModule.VoiceResponse();

  // make sure that a welcome message is set
  if (process.env.CALL_MESSAGE.length > 0) twiml.say(process.env.CALL_MESSAGE);

  // record citizen message
  twiml.record({
    action: "/record",
    maxLength: process.env.MAXCALLLENGTH,
  });

  // Render the response as XML in reply to the webhook request
  res.type("text/xml");
  res.send(twiml.toString());
};

export default voice;
