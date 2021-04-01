import { Document, model, Schema } from "mongoose";

interface StateDocument extends Document {
  code: string;
  name: string;
  active: boolean;
}

const stateSchema = new Schema({
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
});

export default model<StateDocument>("State", stateSchema);
