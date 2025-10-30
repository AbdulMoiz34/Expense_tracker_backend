import Expense from "../../../models/Expense.js";

const addExpense = async (req, res) => {
    const { category, amount, date } = req.body;

    if (!category || !amount || !date) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        const doc = await Expense.create({ user: req.userId, category, amount, date });
        res.status(201).json(doc);
    } catch (e) {
        res.status(400).json({ message: "Failed to create income" });
    }
}

export default addExpense;