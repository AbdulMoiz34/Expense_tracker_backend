import Expense from "../../../models/Expense";

const deleteExpense = async (req, res) => {
    const { id } = req.params;

    try {
        await Expense.findOneAndDelete({ _id: id, user: req.id });
        res.json({ succes: true });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete" });
    }
}

export default deleteExpense;