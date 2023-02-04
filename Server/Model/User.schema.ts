import mongoose from "mongoose";
import { User } from "../Interface/interface";
import isEmail from "validator/lib/isEmail";

interface Idata extends User, mongoose.Document {}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "input your email"],
      trim: true,
      lowercase: true,
      validate: [isEmail, "Please Enter a a vaild email"],
    },
    name: {
      type: String,
      required: [true, "input Your Name"],
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "input Your Password"],
    },
  },
  { timestamps: true }
);

export default mongoose.model<Idata>("UserChargeSchema", userSchema);
