import express from "express";
import addIncome from "./addIncome/index.js";
import getIncomes from "./getIncomes/index.js";
import deleteIncome from "./deleteIncome/index.js";

const router = express.Router();

router.post("/", addIncome);
router.get("/", getIncomes);
router.delete("/:id", deleteIncome);

export default router;