import { Document, model, Schema } from "mongoose";
import Blob from "./Blob";
import Product from "./Product";
import Subcategory from "./Subcategory";

interface ProductCategoryDocument extends Document {
  name: string;
  subcategoryId: string;
  products: string[];
  blobId: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const productCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  subcategoryId: {
    type: Schema.Types.ObjectId,
    ref: Subcategory,
    required: true,
  },
  blobId: {
    type: Schema.Types.ObjectId,
    ref: Blob,
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

export default model<ProductCategoryDocument>(
  "ProductCategory",
  productCategorySchema
);
