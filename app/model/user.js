
const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    frist_name: { type: String },
    last_name: { type: String },
    username: { type: String, lowercase: true },
    mobile: { type: String },
    email: { type: String, lowercase: true },
    password: { type: String },
    otp: {
      type: Object,
      default: {
        code: 0,
        expiresIn: 0,
      },
    },

    roles: { type: [String], default: "USER" },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
    },
  }
);
module.exports = {
  UserModel: mongoose.model("user", Schema),
};