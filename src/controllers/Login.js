import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

import bcrypt from "bcrypt";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      req
        .status(400)
        .json({ msg: "reqired field is not found please fill the details" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        msg: "the provided email is not existed! incorrect emaiID please register to get login",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Incorrect password" });
    }

    const token = jwt.sign({ _id: user._id, email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({ msg: "Login successful", user: user, token: token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
  }
};

export { loginUser };
