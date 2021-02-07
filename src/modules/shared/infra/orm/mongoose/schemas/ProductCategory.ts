import { Document, model, Schema } from "mongoose";
import Subcategory from "./Subcategory";

interface ProductCategoryDocument extends Document {
  name: string;
  subcategoryId: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const productCategoryTypeSchema = new Schema({
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
  productCategoryTypeSchema
);
