import { twiml as voiceModule } from "twilio";

const voice = async (req, res) => {
  const twiml = new voiceModule.VoiceResponse();

  twiml.say(
    "Hello Thanks for calling to Student Society We are here to help you pass Covid 19 Period"
  );

  const gather = twiml.gather({
    numDigits: 1,
    action: "/gather",
  });

  gather.say("");

  // Render the response as XML in reply to the webhook request
  res.type("text/xml");
  res.send(twiml.toString());
};

export default voice;
