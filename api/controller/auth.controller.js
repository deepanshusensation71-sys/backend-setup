import { Auth } from "../model/auth.schema.js";

export const signup = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
      return res.status(400).json({
        message: "All fields required",
      });
    }
    const isUserExist = await Auth.findOne({ email });

    if (isUserExist) {
      return res.status(400).json({
        message: "Email is already exist",
      });
    }

    const user = await Auth.create({
      userName,
      email,
      password,
    });

    return res.status(201).json({
      message: "user created successfully",
      data: {
        _id: user._id,
        userName: user.userName,
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
