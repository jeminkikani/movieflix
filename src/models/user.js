import mongoose from "mongoose";

const userSchemas = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchemas);

export default User;
