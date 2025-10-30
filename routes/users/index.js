import express from "express";
import createUser from "./register/index.js";
import login from "./login/index.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", login);

export default router;