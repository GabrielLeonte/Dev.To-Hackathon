import Express from "express";
import Socket from "socket.io";
import http from "http";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./router";
import { connection } from "./events";

// load .env data
dotenv.config();

// initiate express object
const app = Express();

// setup http server to use with SocketIO
const server = http.Server(app);

// create io events
const io = Socket(server);

// allow express to parse body data
app.use(bodyParser.urlencoded({ extended: false }));

// import routes inside the app
app.use(router);

// on connection event
io.on("connection", connection);

// listen the server on custom environment (.env file) port
server.listen(process.env.PORT, () => {
  console.log(
    "A credit of Help Server is up and running on port " + process.env.PORT
  );
});
