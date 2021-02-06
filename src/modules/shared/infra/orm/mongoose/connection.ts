import mongoose from "mongoose";

export const connectDB = async () => {
  const uriPrefix = process.env.MONGO_DB_PREFIX;
  const database = process.env.MONGO_DB_NAME;
  const domain = process.env.MONGO_DB_DOMAIN;
  const user = process.env.MONGO_DB_USER;
  const password = process.env.MONGO_DB_PASSWORD;
  const uriSuffix = process.env.MONGO_DB_SUFFIX;

  const uri =
    `${uriPrefix}://${user}:${password}@${domain}/${database}?${uriSuffix}` ||
    "mongodb://localhost/bilatu";

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(">>> DB is connected");
  } catch (error) {
    console.log("An error occurred connecting to MongoDB", error);
  }
};
