import { Document, model, Schema } from "mongoose";

interface BlobDocument extends Document {
  data: string;
  type: string;
  createdAt: Date;
}

const BlobSchema = new Schema({
  data: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model<BlobDocument>("Blob", BlobSchema);
