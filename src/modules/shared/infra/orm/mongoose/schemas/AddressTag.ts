import { Document, model, Schema } from "mongoose";
import Blob from "./Blob";

interface AddressTagDocument extends Document {
  name: string;
  iconId?: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const addressTagSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  iconId: {
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

export default model<AddressTagDocument>("AddressTag", addressTagSchema);
