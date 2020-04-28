import { twiml as voiceModule } from "twilio";

const voice = async (req, res) => {
  const twiml = new voiceModule.VoiceResponse();

  // twiml.say("Hello please record your message"); // ...... and more about you

  twiml.record({
    action: "/record",
    maxLength: "180000",
  });

  // Render the response as XML in reply to the webhook request
  res.type("text/xml");
  res.send(twiml.toString());
};

export default voice;
