import { Document, model, Schema } from "mongoose";
import Category from "./Category";

interface SubcategoryDocument extends Document {
  name: string;
  categoryId: string;
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
