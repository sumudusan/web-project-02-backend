import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  description?: string;
  images?: string;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  images: String,
});

const Product = mongoose.model<IProduct>("products", productSchema);

export default Product;
