import "reflect-metadata";

import dotenv from "dotenv";
import express from "express";
import startGraphqlServer from "./config/apollo-server";
import { connectDB } from "./modules/shared/infra/orm/mongoose/connection";
import { graphqlUploadExpress } from "graphql-upload";

dotenv.config();

const main = async () => {
  const app = express();

  await connectDB();
  await startGraphqlServer(app);

  const port = process.env.APP_PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
};

main();
