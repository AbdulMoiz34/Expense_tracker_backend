import express from "express";
import addExpense from "./addExpense/index.js";
import getExpenses from "./getExpenses/index.js";
import deleteExpense from "./deleteExpense/index.js";

const router = express.Router();

router.post("/", addExpense);
router.get("/", getExpenses);
router.delete("/:id", deleteExpense);

export default router;