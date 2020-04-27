
// import socket.io events
import login from "./events/utilityEvents/login";
import token_valability from "./events/utilityEvents/token_valability";
import signup from "./events/utilityEvents/signup";
import reset from "./events/utilityEvents/reset";
import getCases from "./events/utilityEvents/getCases";
import getMyCases from "./events/utilityEvents/getMyCases";
import takeCase from "./events/utilityEvents/takeCase";
import releaseCase from "./events/utilityEvents/releaseCase";

const connection = (socket) => {
  socket.on("login", login.bind(null, socket));
  socket.on("token_valability", token_valability.bind(null, socket));
  socket.on("signup", signup.bind(null, socket));
  socket.on("reset", reset.bind(null, socket));
  socket.on("getCases", getCases.bind(null, socket));
  socket.on("getMyCases", getMyCases.bind(null, socket));
  socket.on("takeCase", takeCase.bind(null, socket));
  socket.on("releaseCase", releaseCase.bind(null, socket));
};

export default connection;
