import Express from "express";

// import routes
import voice from "./http/voice";

// create a new router object
const router = Express.Router();

// app routes
router.get("/", (req, res) => res.send("Salut"));
router.post("/voice", voice);

export default router;
