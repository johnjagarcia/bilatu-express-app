import { Document, model, Schema } from "mongoose";
import Customer from "./Customer";
import Headquarter from "./Headquarter";
import CartItem from "./CartItem";

interface CartDocument extends Document {
  customerId: string;
  headquarterId: string;
  cartItems: string[];
  createdAt: Date;
  updatedAt: Date;
}

const cartSchema = new Schema({
  customerId: {
    type: Schema.Types.ObjectId,
    ref: Customer,
    required: true,
  },
  headquarterId: {
    type: Schema.Types.ObjectId,
    ref: Headquarter,
    required: true,
  },
  cartItems: [
    {
      type: Schema.Types.ObjectId,
      ref: CartItem,
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

cartSchema.index({ customerId: 1, headquarterId: 1 }, { unique: true });

export default model<CartDocument>("Cart", cartSchema);
