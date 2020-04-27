import Express from "express";

// import routes
import voice from "./http/voice";
import record from "./http/record";

// create a new router object
const router = Express.Router();

// app routes
router.get("/", (req, res) => res.send("Salut"));
router.post("/voice", voice);
router.post("/record", record);

export default router;
