import Express from "express";
import socket from "socket.io";
import http from "http";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./twilioRoutes";
import connection from "./socketsUtilityEvents";
import databaseTablesSync from "./databaseTablesSync";

// load .env data
dotenv.config();

// create database tables if not exists
databaseTablesSync();

// create express object
const app = Express();

// setup http server to use with SocketIO
const server = http.Server(app);

// create socket io server
const io = socket(server);

// allow express to parse JSON data into callbacks
app.use(bodyParser.urlencoded({ extended: false }));

// import twilio API routes inside the express object
app.use(router);

// on connection event (utilityEvents)
io.on("connection", connection);

// listen the server on custom environment (.env file) port
server.listen(process.env.PORT, () => {
  console.log("The Server is up and running on port " + process.env.PORT);
});

export { io };
