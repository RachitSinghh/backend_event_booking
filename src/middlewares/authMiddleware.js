const jwt = require("jsonwebtoken");
const User = require("../models/User.models.js");

exports.protect = async (req, res, next) => {
  // Decoded token, find user, attach to req.user
  let generateToken;
  // check fortoken in Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      if (!req.user) return res.status(401).json({ message: "User not found" });

      next();
    } catch (err) {
      return res.status(401).json({ message: "Unauthorized: invalid token" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: token missing" });
  }
};

exports.adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access only" });
  }

  next();
};
