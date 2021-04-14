import { Document, model, Schema } from "mongoose";
import { customAlphabet } from "nanoid";
import Business from "./Business";
import City from "./City";

interface HeadquarterDocument extends Document {
  code: string;
  businessId: string;
  main: boolean;
  name: string;
  address: string;
  latitude: string;
  longitude: string;
  cityId: string;
  cellphone: string;
  whatsapp: string;
  email: string;
  pickUpOnStore: boolean;
  homeDelivery: boolean;
  coverageCities: string[];
  showLocation: boolean;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const nanoid = customAlphabet("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ", 6);

const headquarterSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    default: () => nanoid(),
  },
  businessId: {
    type: Schema.Types.ObjectId,
    ref: Business,
    required: true,
  },
  main: {
    type: Boolean,
    required: true,
    default: false,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
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
  cityId: {
    type: Schema.Types.ObjectId,
    ref: City,
    required: true,
  },
  cellphone: {
    type: String,
    required: true,
    trim: true,
  },
  whatsapp: {
    type: String,
    index: {
      partialFilterExpression: { whatsapp: { $type: "string" } },
      trim: true,
    },
    set: (v: string | null) => (v === "" ? null : v),
  },
  email: {
    type: String,
    lowercase: true,
    index: {
      unique: true,
      partialFilterExpression: { email: { $type: "string" } },
      trim: true,
      lowercase: true,
    },
    required: true,
  },
  coverageCities: [
    {
      type: Schema.Types.ObjectId,
      ref: City,
    },
  ],
  pickUpOnStore: {
    type: Boolean,
    required: true,
    default: false,
  },
  homeDelivery: {
    type: Boolean,
    required: true,
    default: false,
  },
  showLocation: {
    type: Boolean,
    required: true,
    default: true,
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

export default model<HeadquarterDocument>("Headquarter", headquarterSchema);
