import User from "./models/user";
import Code from "./models/inviteCodes";
import Recordings from "./models/recordings";

const sync = async () => {
  await User.sync();
  await Code.sync();
  await Recordings.sync();
};

export default sync;
