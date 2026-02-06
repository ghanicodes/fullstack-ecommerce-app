const express = require("express");
const adminRouter = express.Router();
const { Admin } = require("../model/admin");
const { adminSignupValidation, adminLoginValidation } = require("../lib/utils");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { adminMiddleware } = require("../middleware/admin.auth");
const { User } = require("../model/user");

// Admin Signup Route
adminRouter.post("/adminsignup", async (req, res) => {
  try {
    // Step 01
    adminSignupValidation(req);

    // Step 02
    const { name, email, password, role, age, gender } = req.body;

    // Step 03
    const adminExist = await Admin.findOne({ email });
    if (adminExist) {
      return res.status(400).json({
        message: "Admin already registered",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      name,
      email,
      password: hashPassword,
      role,
      age,
      gender,
    });

    await newAdmin.save();
    console.log(newAdmin);

    res.status(200).send({
      message: "Admin Signup Successfull",
      newAdmin,
    });
  } catch (error) {
    console.log("Admin Signup Error : ", error.message);
    res.status(401).json({
      "Admin Signup Error ": error.message,
    });
  }
});

// Admin Login Route
adminRouter.post("/adminlogin", async (req, res) => {
  try {
    // Step 01
    adminLoginValidation(req);

    // Step 02
    const { email, password, role } = req.body;

    // Step 03
    const adminlogin = await Admin.findOne({ email, role });
    if (!adminlogin) {
      //   return res.status(400).json({ message: "Invalid credentials" });
      return res.status(400).json({ message: "admin Email error" });
    }

    // Step 03
    const isPasswordMatch = await bcrypt.compare(password, adminlogin.password);
    if (!isPasswordMatch) {
      //  return res.status(400).json({ message: "Invalid credentials" });
      return res.status(400).json({ message: "Admin password Error" });
    }

    if (adminlogin.role !== role) {
      return res
        .status(400)
        .json({ message: "Role mismatch. You cannot login here" });
    }

    // Step # 04
    const token = jwt.sign({ id: adminlogin._id }, process.env.AdminSecret);

    res.cookie("AdminToken", token);

    res.status(200).json({
      message: "Admin Login Successful",
      admin: {
        id: adminlogin._id,
        name: adminlogin.name,
        role: adminlogin.role,
      },
    });
  } catch (error) {
    console.log("Admin login Error : ", error.message);
    res.status(401).json({
      "Admin Login Error ": error.message,
    });
  }
});

// Admin Dashboard Route
adminRouter.get("/admindashboard", adminMiddleware, (req, res) => {
  try {
    const admin = req.body;

    res.send({
      message: "Admin Dashboard Successfully Work",
      admin,
    });
  } catch (error) {
    console.log("Admin Dashboard Error : ", error.message);
    res.status(401).json({
      "Admin Dashboard Error ": error.message,
    });
  }
});


//Show All Users Route
adminRouter.get("/allusers", adminMiddleware, async (req, res) => {
  try {
    
        const users = await User.find({}); 
        console.log(users);
     
    res.send({
      message: "All Users Successfully Fetch",
      users,
    });
  } catch (error) {
    console.log("Users Fetch Error ", error.message);
    res.status(401).json({
      "Users Fetch Error ": error.message,
    });
  }
});




module.exports = {
  adminRouter,
};
