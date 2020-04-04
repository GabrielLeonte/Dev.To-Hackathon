import Express from "express";

// create a new router object
const router = Express.Router();

// app routes
router.get("/", (req, res) => res.send("Salut"));

export default router;
