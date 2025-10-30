import Expense from "../../../models/Expense.js";

const deleteExpense = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await Expense.findOneAndDelete({ _id: id, user: req.id });
        if (!deleted) {
            return res.status(404).json({ message: "Expense not found" });
        }
        return res.json({ success: true });
    } catch (err) {
        return res.status(500).json({ message: "Failed to delete" });
    }
};

export default deleteExpense;