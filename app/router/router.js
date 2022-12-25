const {checkRole}=require('../http/middlewares/verifyAccessToken')
const { AdminRouts } = require("./admin/admin.routes");
const { UserAuthRoutes } = require("./user/auth.routes");
const router = require("express").Router();
router.use("/user", UserAuthRoutes);
router.use("/admin",  checkRole("ADMIN"), AdminRouts);
module.exports = {
  AllRoutes: router,
};
