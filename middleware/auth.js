import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (e) {
        return res.status(401).json({ message: "Invalid token" });
    }
}

export default auth;



