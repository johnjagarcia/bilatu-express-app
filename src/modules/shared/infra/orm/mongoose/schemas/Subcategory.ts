import { Document, model, Schema } from "mongoose";
import Blob from "./Blob";
import Category from "./Category";

interface SubcategoryDocument extends Document {
  name: string;
  categoryId: string;
  blobId?: string;
  type: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const subcategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: Category,
    required: true,
  },
  blobId: {
    type: Schema.Types.ObjectId,
    ref: Blob,
  },
  type: {
    type: String,
    enum: ["SERVICE", "PRODUCT"],
    default: "PRODUCT",
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

subcategorySchema.index({ name: 1, type: 1 }, { unique: true });

export default model<SubcategoryDocument>("Subcategory", subcategorySchema);
