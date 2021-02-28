import { Document, model, Schema } from "mongoose";
import Blob from "./Blob";
import Category from "./Category";

interface SubcategoryDocument extends Document {
  name: string;
  categoryId: string;
  blobId?: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const subcategoryTypeSchema = new Schema({
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

export default model<SubcategoryDocument>("Subcategory", subcategoryTypeSchema);
