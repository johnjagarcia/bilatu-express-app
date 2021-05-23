import { Document, model, Schema } from "mongoose";

interface ReasonDocument extends Document {
  _id: string;
  name: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const reasonSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
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

export default model<ReasonDocument>("Reason", reasonSchema);
