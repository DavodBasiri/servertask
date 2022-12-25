const mongoose = require("mongoose");
const { CommentsSchema } = require("./public.schema");

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  descripton: { type: String, required: true },
  images: { type: [String], required: true },
  category: { type: mongoose.Types.ObjectId, ref: "category", required: true },
  price: { type: Number, default: 0 },
  supplier: { type: mongoose.Types.ObjectId, ref: "user", required: true },
},
{
  timestamps: true}
  );
ProductSchema.index({ title: "text", short_text: "text", text: "text" });
module.exports = {
  ProductModel: mongoose.model("product", ProductSchema),
};