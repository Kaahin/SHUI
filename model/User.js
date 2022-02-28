import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    User: {
      type: String,
      required: true,
      unique: true,
      min: 2,
      max: 30,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 320,
    },
    Password: {
      type: String,
      required: true,
      min: 8,
      max: 256,
    },
    Admin: { type: Boolean, default: false },
  },
  //   remove if it's not needed:
  { autoIndex: true, timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
