let clients = 0;

// on connection event
const connection = (socket) => {
  socket.emit("test", "salut")
};

export { connection };
