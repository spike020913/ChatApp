import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protectedRoutes  = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized - No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (!decoded) {
            return res.status(401).json({ message: "Unauthorized - Invalid token" });
        }
        
        const user = await User.findById(decoded.userID).select("-password");
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        req.user = user;

        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: "Unauthorized" });
    }
}

export default protectedRoutes;