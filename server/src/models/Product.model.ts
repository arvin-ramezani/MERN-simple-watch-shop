import { Schema, model } from "mongoose";
import IProduct from "../interfaces/IProduct";

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
  categories: { type: [String], required: true },
});

export default model<IProduct>("Product", productSchema);
