import Income from "../../../models/Income.js";

const deleteIncome = async (req, res) => {
    const { id } = req.params;
    
    try {
        await Income.findOneAndDelete({ _id: id, user: req.userId });
        res.json({ succes: true });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete" });
    }
}

export default deleteIncome;