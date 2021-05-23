import { Document, model, Schema } from "mongoose";
import Product from "./Product";

interface ProductItemDocument extends Document {
  productId: string;
  quantity: number;
  price: number;
  total: number;
  observations?: string;
  createdAt: Date;
  updatedAt: Date;
}

const productItemSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: Product,
    required: true,
  },
  quantity: {
    type: Number,
    min: 1,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
  total: {
    type: Number,
    min: 0,
    required: true,
  },
  observations: {
    type: String,
    set: (v: string | null) => (v === "" ? null : v),
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default model<ProductItemDocument>("ProductItem", productItemSchema);
