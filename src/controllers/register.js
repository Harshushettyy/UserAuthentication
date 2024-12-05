import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const alreadyExist = await User.findOne({ email });

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({
          message: "Required field is missing please fill the details ",
        });
    }
    if (alreadyExist) {
      return res.status(409).json({
        message:
          "provided user is already exits in the same Email ID. Kindly please login",
      });
    }
    const hashed = await bcrypt.hash(password, 10);

    const createdUser = await User.create({ name, email, password: hashed });

    const token = jwt.sign(
      { _id: createdUser._id, name, email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.status(201).json({
      message: "Account registerd succefully",
      user: createdUser,
      token: token,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export { registerUser };
