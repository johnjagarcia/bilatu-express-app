import { Document, model, Schema } from "mongoose";
import State from "./State";

interface CityDocument extends Document {
  code: string;
  name: string;
  stateId: string;
  active: boolean;
}

const citySchema = new Schema({
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
  stateId: {
    type: Schema.Types.ObjectId,
    ref: State,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

export default model<CityDocument>("City", citySchema);
