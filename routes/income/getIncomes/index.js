import Income from "../../../models/Income.js";

const getIncomes = async (req, res) => {
    try {
        const items = await Income.find({ user: req.userId }).sort({ createdAt: -1 });
        // console.log(items);
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch income." });
    }
}

export default getIncomes;