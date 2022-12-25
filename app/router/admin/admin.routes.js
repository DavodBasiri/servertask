const { AdminApiProductRouter } = require("./product.routes");
const router = require("express").Router();
/**
 * @swagger
 *  tags :
 *      -    name : Adimn-Panel
 *           description : All Method 
 */
router.use("/product",AdminApiProductRouter);

module.exports = {
    AdminRouts : router
}