const events = (socket) => {
  socket.on("data", (data) => socket.emit("data", data));
};

export default events;
