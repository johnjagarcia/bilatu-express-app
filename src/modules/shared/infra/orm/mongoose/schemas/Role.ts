import { Document, model, Schema } from "mongoose";

interface RoleDocument extends Document {
  _id: string;
  code: string;
  name: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const roleSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
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

export default model<RoleDocument>("Role", roleSchema);
