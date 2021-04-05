import { Document, model, Schema } from "mongoose";
import AddressTag from "./AddressTag";
import City from "./City";
import RoadType from "./RoadType";

interface AddressDocument extends Document {
  cityId: string;
  roadTypeId: string;
  mainRoad: string;
  secondaryRoad: string;
  number: string;
  references: string;
  latitude: string;
  longitude: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const addressSchema = new Schema({
  cityId: {
    type: Schema.Types.ObjectId,
    ref: City,
    required: true,
  },
  roadTypeId: {
    type: Schema.Types.ObjectId,
    ref: RoadType,
    required: true,
  },
  mainRoad: {
    type: String,
    required: true,
    trim: true,
  },
  secondaryRoad: {
    type: String,
    required: true,
    trim: true,
  },
  number: {
    type: String,
    required: true,
    trim: true,
  },
  references: {
    type: String,
    trim: true,
  },
  addressTags: [
    {
      type: Schema.Types.ObjectId,
      ref: AddressTag,
    },
  ],
  latitude: {
    type: String,
    required: true,
    trim: true,
  },
  longitude: {
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

export default model<AddressDocument>("Address", addressSchema);
