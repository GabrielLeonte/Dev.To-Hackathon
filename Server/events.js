import login from "./events/login";
import token_valability from "./events/token_valability";

const connection = (socket) => {
  socket.on("login", login.bind(null, socket));
  socket.on("token_valability", token_valability.bind(null, socket));
};

export default connection;
