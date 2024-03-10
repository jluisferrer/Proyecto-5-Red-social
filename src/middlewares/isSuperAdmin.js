import jwt from "jsonwebtoken";
import User from "../models/User.js";


export const isSuperAdmin = async (req, res, next) => {

    const token = req.tokenData.roleName
    // console.log(token);
    // // if token works, it decodes encrypted data within token (tokendata: userId and roleName)
    // const decoded = jwt.verify(token, process.env.JWT_SECRET)
    // console.log(decoded);
    try {
        // const user = await User.findById(decoded.userId);

        if (token !== "super_admin") {
            return res.status(401).json({ message: 'Unauthorized. No superadmin priviledges' });
        }

        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "You don't have permissions"
        })
    }
}