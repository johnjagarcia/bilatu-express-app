import { Document, model, Schema } from "mongoose";
import Address from "./Address";

interface CustomerDocument extends Document {
  name: string;
  lastName: string;
  email: string;
  cellphone: string;
  dni?: string;
  birthDate?: Date;
  gender?: string;
  addresses: string[];
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    index: {
      unique: true,
      partialFilterExpression: { email: { $type: "string" } },
      trim: true,
      lowercase: true,
    },
    required: true,
  },
  cellphone: {
    type: String,
    lowercase: true,
    index: {
      unique: true,
      partialFilterExpression: { cellphone: { $type: "string" } },
      trim: true,
      lowercase: true,
    },
    set: (v: string | null) => (v === "" ? null : v),
  },
  dni: {
    type: String,
    trim: true,
    set: (v: string | null) => (v === "" ? null : v),
  },
  birthDate: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ["female", "male", "other"],
    set: (v: string | null) => (v === "" ? null : v),
  },
  addresses: [
    {
      type: Schema.Types.ObjectId,
      ref: Address,
    },
  ],
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

export default model<CustomerDocument>("Customer", customerSchema);
