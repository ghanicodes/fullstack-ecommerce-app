const jwt = require("jsonwebtoken");
const { Admin } = require("../model/admin");

const adminMiddleware = async (req, res, next) => {
  const { AdminToken } = req.cookies;

  if (!AdminToken) {
    return res.status(401).json({ message: "Please First Admin Login" });
  }

  const decoded = jwt.verify(AdminToken, process.env.AdminSecret);

  const { id } = decoded;

  const admin = await Admin.findById(id);

  if (!admin) {
    return res.status(404).json({ message: "Admin not found" });
  }

  req.admin = admin;
  next();
};

module.exports = {
  adminMiddleware,
};
