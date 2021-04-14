import { Document, model, Schema } from "mongoose";
import { customAlphabet } from "nanoid";
import BusinessCategory from "./BusinessCategory";
import City from "./City";
import Subcategory from "./Subcategory";
import User from "./User";

interface BusinessDocument extends Document {
  code: string;
  name: string;
  type: string;
  address: string;
  categoryId: string;
  cityId: string;
  cellphone: string;
  whatsapp: string;
  email: string;
  personType: string;
  nit: string;
  userId: string;
  subcategories: string[];
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const nanoid = customAlphabet("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ", 6);

const businessSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    default: () => nanoid(),
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ["SERVICES", "PRODUCTS", "BOTH"],
    default: "PRODUCTS",
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: BusinessCategory,
    required: true,
  },
  address: {
    type: String,
    trim: true,
  },
  cityId: {
    type: Schema.Types.ObjectId,
    ref: City,
  },
  cellphone: {
    type: String,
    trim: true,
  },
  whatsapp: {
    type: String,
    index: {
      partialFilterExpression: { whatsapp: { $type: "string" } },
      trim: true,
    },
    set: (v: string | null) => (v === "" ? null : v),
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
  },
  personType: {
    type: String,
    enum: ["NATURAL", "LEGAL"],
    required: true,
  },
  nit: {
    type: String,
    lowercase: true,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  subcategories: [
    {
      type: Schema.Types.ObjectId,
      ref: Subcategory,
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

export default model<BusinessDocument>("Business", businessSchema);
