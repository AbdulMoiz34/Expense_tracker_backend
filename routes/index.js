import express from "express";
import users from "./users/index.js";
import income from "./income/index.js";
import expenses from "./expenses/index.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.use("/auth", users);
router.use("/income", auth, income);
router.use("/expenses", auth, expenses);

export default router;