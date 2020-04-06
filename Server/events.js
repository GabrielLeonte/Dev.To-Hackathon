import login from "./events/login";

const connection = (socket) => {
  socket.on("login", login.bind(null, socket));
};

export default connection;
