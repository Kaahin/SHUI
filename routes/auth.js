import User from "../model/User";
import express from "express";
import bcryptjs from "bcryptjs";
import * as jwt from "jsonwebtoken"; // Double check to see if "jwt" works.

const authRoute = express().router();

authRoute.post("/register", async (request, reply) => {
  // Check if user exists already
  const emailExist = await User.findOne({ Email: request.body.Email });

  if (emailExist) {
    return request.status(400).json({ error: "Email Already in Use" });
  }

  // Hash Password
  const salt = await bcryptjs.genSalt(10);
  const hashPassword = await bcryptjs.hash(request.body.Password, salt);

  // Create User
  const user = new User({
    First: request.body.First,
    Last: request.body.Last,
    Email: request.body.Email,
    Password: request.body.Password,
  });

  try {
    const savedUser = await user.save(); // saved user object in DB
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

export default authRoute;
