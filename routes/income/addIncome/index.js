import Income from "../../../models/Income.js";

const addIncome = async (req, res) => {
    const { source, amount, date } = req.body;

    if (!source || !amount || !date) {
        return res.status(400).json({ message: "All fields are required." });
    }
    try {
        const doc = await Income.create({ user: req.userId, source, amount, date });
        res.status(201).json(doc);
    } catch (e) {
        res.status(400).json({ message: "Failed to create income" });
    }
}

export default addIncome;