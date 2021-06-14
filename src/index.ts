import "reflect-metadata";

import dotenv from "dotenv";
import express from "express";
import startGraphqlServer from "./config/apollo-server";
import { connectDB } from "./modules/shared/infra/orm/mongoose/connection";

dotenv.config();

const main = async () => {
  const app = express();

  await connectDB();
  await startGraphqlServer(app);
};

main();
