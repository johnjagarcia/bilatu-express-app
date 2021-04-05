import { Document, model, Schema } from "mongoose";

interface RoadTypeDocument extends Document {
  name: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const roadTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
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

export default model<RoadTypeDocument>("RoadType", roadTypeSchema);
