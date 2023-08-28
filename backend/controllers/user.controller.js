import User from "../models/user.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";

const userController = {
  async test(req, res, next) {
    res.json({ message: "API is working!" });
  },

  async updateUser(req, res, next) {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(401, "You can update only your account!"));
    }
    try {
      if (req.body.password) {
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
      }

      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            profilePicture: req.body.profilePicture,
          },
        },
        { new: true }
      );
      const { password, ...rest } = updatedUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  },

  async deleteUser(req, res, next) {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(401, "you can delete only your account!"));
    }
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (error) {
      next(error);
    }
  },
};
export default userController;
