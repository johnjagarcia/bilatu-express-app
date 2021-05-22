import { Document, model, Schema } from "mongoose";
import Customer from "./Customer";
import Headquarter from "./Headquarter";

interface OrderDocument extends Document {
  customerId: string;
  headquarterId: string;
  totalPrice: number;
  status: string;
  reasonId: string;
  reasonObservation: string;
  fleet: number;
  deliveryDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema({
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
  warranty: {
    type: String,
    enum: ["SELLER", "FACTORY", "WITHOUT_WARRANTY", "NA"],
    default: "SELLER",
    required: true,
  },
  brand: {
    type: String,
    index: {
      partialFilterExpression: { brand: { $type: "string" } },
      trim: true,
    },
    set: (v: string | null) => (v === "" ? null : v),
  },
  modelo: {
    type: String,
    index: {
      unique: true,
      partialFilterExpression: { model: { $type: "string" } },
      trim: true,
      lowercase: true,
    },
    set: (v: string | null) => (v === "" ? null : v),
  },
  description: {
    type: String,
    required: true,
  },
  creationYear: {
    type: String,
    index: {
      unique: true,
      partialFilterExpression: { creationYear: { $type: "string" } },
      trim: true,
    },
    set: (v: string | null) => (v === "" ? null : v),
  },
  images: [
    {
      type: Schema.Types.ObjectId,
      ref: Blob,
    },
  ],
  tags: [
    {
      type: String,
    },
  ],
  price: {
    type: Number,
    required: true,
    default: 0,
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

export default model<OrderDocument>("Product", productSchema);
