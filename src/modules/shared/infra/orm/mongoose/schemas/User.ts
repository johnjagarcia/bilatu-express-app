import { Document, model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import Role from "./Role";

interface UserDocument extends Document {
  name: string;
  lastName: string;
  email: string;
  cellphone: string;
  dni: string;
  password: string;
  birthDate: Date;
  gender: string;
  rolId: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
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
  cellphone: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    index: {
      unique: true,
      partialFilterExpression: { dni: { $type: "string" } },
      trim: true,
    },
    set: (v: string | null) => (v === "" ? null : v),
  },
  rolId: {
    type: Schema.Types.ObjectId,
    ref: Role,
    required: true,
  },
  birthDate: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ["female", "male", "other"],
    set: (v: string | null) => (v === "" ? null : v),
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

const SALT_WORK_FACTOR = 10;

userSchema.pre("save", function (next) {
  const user: any = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

export default model<UserDocument>("User", userSchema);
