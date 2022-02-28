import User from "../model/User.js";
import express from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"; // Double check to see if "jwt" works.

const authRoute = express.Router();

authRoute.post("/signup", async (request, reply) => {
  // Check if user exists already
  const emailExist = await User.findOne({ Email: request.body.Email });

  if (emailExist) {
    return reply.status(400).json({ error: "Email Already in Use" });
  }

  // Hash Password
  const salt = await bcryptjs.genSalt(10);
  const hashPassword = await bcryptjs.hash(request.body.Password, salt);

  // Create User
  const user = new User({
    First: request.body.First,
    Last: request.body.Last,
    Email: request.body.Email,
    Password: hashPassword,
  });

  try {
    await user.save(); // saves user object in database
    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.TOKEN_SECRET
    );
    reply.json({ user: user._id, token });
  } catch (error) {
    reply.status(400).json(error);
  }
});

authRoute.post("/signin", async (request, reply) => {
  // Check if user with email exist
  const user = await User.findOne({ Email: request.body.Email });

  if (!user) {
    return reply.status(400).json({ error: "This user does not exist" });
  }

  // Check if password is true

  const validPassword = await bcryptjs.compare(
    request.body.Password,
    user.Password
  );

  if (!validPassword) {
    return reply.status(400).json({ error: "Invalid Password" });
  }

  // Create and Assign Token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  reply.header("auth-token", token).json({ token });
});

export default authRoute;
