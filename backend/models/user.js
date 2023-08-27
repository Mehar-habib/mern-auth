import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://h-o-m-e.org/wp-content/uploads/2022/04/Blank-Profile-Picture-3.jpg",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
