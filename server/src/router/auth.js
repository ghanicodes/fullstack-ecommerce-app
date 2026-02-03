const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../model/user");
const jwt = require("jsonwebtoken");
const { signupValidation, loginValidation } = require("../lib/utils");
const authRouter = express.Router();

// Signup Api
authRouter.post("/signup", async (req, res) => {
  try {
    // Step # 01
    signupValidation(req);

    const { name, email, password, age, gender, phone, address } = req.body;

    // Step # 02
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    // Step # 03
    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword);

    // Step # 04
    const newUser = new User({
      name,
      email,
      password: hashPassword,
      age,
      gender,
      phone,
      address,
    });

    await newUser.save();

    res.status(201).json({
      message: "User Successfully Signup",
      user: {
        _id: newUser._id,
        name,
        email,
        age,
        gender,
        phone,
        address,
      },
    });
  } catch (error) {
    console.log("Signup Error:", error);
    res.status(400).json({
      message: error.message || "Signup failed",
    });
  }
});

// Login APi
authRouter.post("/login", async (req, res) => {
  try {
    // Step # 01
    loginValidation(req);

    const { email, password } = req.body;

    // Step # 02
    const loginUser = await User.findOne({ email });

    if (!loginUser) {
      console.log("Please First Signup");
    }

    // Step # 03
    const isPasswordMatch = await bcrypt.compare(password, loginUser.password);
    if (!isPasswordMatch) {
      throw new Error("Password is incroccet");
    }

    // Step # 04
    const token = jwt.sign({ token: loginUser._id }, process.env.PrivateKey);

    res.cookie("token", token);

    res.send({
      message: "Login User Sccessfully",
      loginUser,
    });
  } catch (error) {
    console.log("Login Error ", error);
    res.status(400).send("Login Error ", error);
  }
});

// Logout Api
authRouter.post("/logout", (req, res) => {
  try {
    res.cookie("token", "");
    res.send("User Logout Successfully");
  } catch (error) {
    console.log(error);
    res.status(400).send("Login Error ", error);
  }
});

module.exports = {
  authRouter,
};
