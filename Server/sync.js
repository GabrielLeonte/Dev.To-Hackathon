import User from "./models/user";
import Code from "./models/inviteCodes";

const sync = async () => {
  await User.sync();
  await Code.sync();
};

export default sync;
