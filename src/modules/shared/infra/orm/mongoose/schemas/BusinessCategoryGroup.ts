import { Document, model, Schema } from "mongoose";
import Blob from "./Blob";
import BusinessCategory from "./BusinessCategory";

interface BusinessCategoryGroup extends Document {
  name: string;
  businessCategories: string[];
  blobId?: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const businessCategoryGroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  businessCategories: [
    {
      type: Schema.Types.ObjectId,
      ref: BusinessCategory,
    },
  ],
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

export default model<BusinessCategoryGroup>(
  "BusinessCategoryGroup",
  businessCategoryGroupSchema
);
