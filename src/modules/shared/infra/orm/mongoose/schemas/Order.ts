import { Document, model, Schema } from "mongoose";
import Customer from "./Customer";
import Headquarter from "./Headquarter";
import ProductItem from "./ProductItem";
import Reason from "./Reason";

interface OrderDocument extends Document {
  customerId: string;
  headquarterId: string;
  productItems: string[];
  status: string;
  reasonId: string;
  reasonObservation: string;
  fleet: number;
  deliveryDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new Schema({
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
  productItems: [
    {
      type: Schema.Types.ObjectId,
      ref: ProductItem,
    },
  ],
  status: {
    type: String,
    enum: [
      "NEW",
      "CHECKING",
      "TO_CONFIRM",
      "CONFIRMED",
      "SCHEDULED",
      "ON_ROUTE",
      "DELIVERED",
      "CANCELLED_BY_COMMERCE",
      "CANCELLED_BY_CUSTOMER",
      "NOT_ANSWERED",
    ],
    default: "NEW",
    required: true,
  },
  reasonId: {
    type: Schema.Types.ObjectId,
    ref: Reason,
  },
  reasonObservation: {
    type: String,
  },
  fleet: {
    type: Number,
    default: 0,
  },
  deliveryDate: {
    type: Date,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
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

export default model<OrderDocument>("Order", orderSchema);
