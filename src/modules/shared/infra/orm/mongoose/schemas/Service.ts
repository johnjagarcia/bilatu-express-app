import { Document, model, Schema } from "mongoose";
import Blob from "./Blob";
import Headquarter from "./Headquarter";
import ServiceCategory from "./ServiceCategory";

interface ServiceDocument extends Document {
  title: string;
  headquarterId: string;
  serviceCategoryId: string;
  description: string;
  images?: string[];
  tags: string[];
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const serviceSchema = new Schema({
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
    ref: ServiceCategory,
    required: true,
  },
  description: {
    type: String,
    required: true,
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

export default model<ServiceDocument>("Service", serviceSchema);
