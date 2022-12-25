const { ProductController } = require('../../http/ controllers/product.controller');
const { uploadFile } = require('../../utils/multer');

const router = require("express").Router();
router.post('/add',uploadFile.array('images',10) ,ProductController.createProduct);
router.patch('/update/:id',uploadFile.array('images',10) ,ProductController.updateProductByID);
router.get('/searchs',ProductController.getProductBySearch);
router.delete("/delete/:id",ProductController.deleteProductByID);
router.get('/',ProductController.getListOfProducts);
router.get('/:id',ProductController.getOneProductByID);
module.exports={
    AdminApiProductRouter: router
}