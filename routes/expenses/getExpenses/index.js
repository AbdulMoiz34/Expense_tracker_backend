import Expense from "../../../models/Expense.js";

const getExpenses = async (req, res) => {
    try {
        const items = await Expense.find({ user: req.userId }).sort({ createdAt: -1 });
        // console.log(items);
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: err, message: "Failed to fetch expenses." });
    }
}

export default getExpenses;