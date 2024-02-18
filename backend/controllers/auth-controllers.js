import User from "../model/user.models.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (err) {
    console.log("error in login controller", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const signup = async (req, res, next) => {
  const { fullname, username, password, confirmpassword, gender } = req.body;

  try {
    if (password !== confirmpassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exits" });
    }
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const salt = await bcrypt.genSalt(14);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      // console.log("first");
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullname,
        userName: newUser.username,
        profilePic: newUser.profilePic,
      });
    }
  } catch (err) {
    console.log("error in SignUp controller", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const logout = async (req, res, next) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged Out Successfully" });
  } catch (err) {
    console.log("error in logout controller", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
