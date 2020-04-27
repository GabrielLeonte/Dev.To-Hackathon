import EventEmitter from "events";
import { io } from "./index";

class UpdateEvent extends EventEmitter {}

const newOpenCase = new UpdateEvent();
const removeOpenCase = new UpdateEvent();

newOpenCase.on("event", (data) => io.emit("newOpenCase", data));
removeOpenCase.on("event", (data) => io.emit("removeOpenCase", data));

export { newOpenCase, removeOpenCase };
