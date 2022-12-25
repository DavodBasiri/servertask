const bcrypt = require("bcrypt");
const { UserModel } = require("../../models/user");
const { hashString, tokenGenerator } = require("../../modules/function");
const { SignAccessToken } = require("../middlewares/functions");

module.exports = new (class AuthController {
  async register(req, res, next) {
    const { username, password, email, mobile, confirm_password, frist_name } =
      req.body;
    const hash_password = hashString(password);
    const user = await UserModel.create({
      username,
      password: hash_password,
      email,
      mobile,
      frist_name,
    });
    return res.status(200).json({
      status: 200,
      success: true,
      message: "User Create",
      user,
    });
  }
  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await UserModel.findOne({ username });
      if (!user)
        throw { status: 404, message: "user or password is not valid" };
      const compereResult = bcrypt.compareSync(password, user.password);
      if (!compereResult)
        throw { status: 404, message: "user or password is not valid" };
      const token = tokenGenerator({ username });
      const accessToken = await SignAccessToken(user._id);
      user.token = accessToken;
      user.save();
      return res.status(200).json({
        status: 200,
        success: true,
        message: "login complite",
        accessToken,
      });
    } catch (error) {
      next(error);
    }
  }
})();
