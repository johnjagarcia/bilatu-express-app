import { Document, model, Schema } from "mongoose";
import Blob from "./Blob";

interface CategoryDocument extends Document {
  name: string;
  blobId?: string;
  type: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
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

categorySchema.index({ name: 1, type: 1 }, { unique: true });

export default model<CategoryDocument>("Category", categorySchema);
