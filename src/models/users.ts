import mongoose from "mongoose";

const UserScheme = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  identityNumber: { type: String, required: true },
  accountNumber: { type: Number, required: true },
  authenticate: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

const UserModel = mongoose.model("users", UserScheme);

export default UserModel;
