import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/IUser";

const userSchema = new Schema<IUser>(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, minLength: 8 },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default model<IUser>("User", userSchema);
