import { Document, model, Schema } from "mongoose";
import Blob from "./Blob";

interface BusinessCategoryDocument extends Document {
  name: string;
  blobId?: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const businessCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
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

export default model<BusinessCategoryDocument>(
  "BusinessCategory",
  businessCategorySchema
);
