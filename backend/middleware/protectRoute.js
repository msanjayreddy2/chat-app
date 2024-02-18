import jwt from "jsonwebtoken";
import User from "../model/user.models.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    // console.log(req.cookies);
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided no verified" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    req.user = user;
    // console.log(res);
    next();
  } catch (error) {
    console.log("error in ProtectRoute middleware: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
