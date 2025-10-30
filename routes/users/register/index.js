import User from "../../../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import 'dotenv/config';

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

const createUser = async (req, res) => {
    const { fullName, email, password, imageUrl } = req.body;

    if (!fullName || !email || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "Email already exist." });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ fullName, email, imageUrl, password: hashPassword });

        res.status(201).json({
            id: user._id,
            user,
            token: generateToken(user._id)
        });
    } catch (err) {

        console.log(err);
        res.status(500).json({ message: "Failed. Try again" });
    }
}

export default createUser;