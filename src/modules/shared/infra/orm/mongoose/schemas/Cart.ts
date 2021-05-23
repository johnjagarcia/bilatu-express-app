import { Document, model, Schema } from "mongoose";
import Customer from "./Customer";
import ProductItem from "./ProductItem";

interface CartDocument extends Document {
  customerId: string;
  productItems: string[];
  createdAt: Date;
  updatedAt: Date;
}

const cartSchema = new Schema({
  customerId: {
    type: Schema.Types.ObjectId,
    ref: Customer,
    unique: true,
    required: true,
  },
  productItems: [
    {
      type: Schema.Types.ObjectId,
      ref: ProductItem,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default model<CartDocument>("Cart", cartSchema);
