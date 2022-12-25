const createHttpError = require("http-errors");
const Joi = require("joi");
const { MongoIdPatern } = require("../../../utils/constans");
const creatProductSchema = Joi.object({
  title: Joi.string().trim().max(30).min(3).required().error(createHttpError.BadRequest("pls enter title")),
  descripton: Joi.string().error(createHttpError.BadRequest("Pls Enter descripton")),
  filename: Joi.string().regex(/(\.png|\.jpg|\.webp|\.jpeg|\.gif|)$/).error(createHttpError.BadRequest("Pls Send Image")),
  price: Joi.number().error(createHttpError.BadRequest("The entered price is not correct")),
  category: Joi.string()
    .regex(MongoIdPatern)
    .error(createHttpError.BadRequest("Can not found Category")),
    fileUploadPath:Joi.allow(),
});
module.exports = {
    creatProductSchema,
};