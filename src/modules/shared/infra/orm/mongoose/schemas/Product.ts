import { Document, model, Schema } from "mongoose";
import Blob from "./Blob";
import Headquarter from "./Headquarter";
import ProductCategory from "./ProductCategory";

interface ProductDocument extends Document {
  title: string;
  headquarterId: string;
  productCategoryId: string;
  status: string;
  warranty: string;
  brand: string;
  modelo: string;
  description: string;
  creationYear: string;
  images?: string[];
  tags: string[];
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  headquarterId: {
    type: Schema.Types.ObjectId,
    ref: Headquarter,
    required: true,
  },
  productCategoryId: {
    type: Schema.Types.ObjectId,
    ref: ProductCategory,
    required: true,
  },
  status: {
    type: String,
    enum: [
      "NEW",
      "LIKE_NEW",
      "EXCELLENT",
      "GOOD",
      "ACCEPTABLE",
      "RESTORED",
      "FOR_RENTING",
      "NA",
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
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.parse(
      new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" })
    ),
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default model<ProductDocument>("Product", productSchema);
