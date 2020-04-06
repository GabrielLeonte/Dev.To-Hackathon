const login = (socket, data) => {
  socket.emit("login_response", "data");
};

export default login;
