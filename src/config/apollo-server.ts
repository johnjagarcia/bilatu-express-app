import { ApolloServer } from "apollo-server-express";
import { Application } from "express";
import { buildSchema } from "type-graphql";
import myContainer from "./inversify.config";
import { PingResolver } from "../interfaces/resolvers/ping";
import { RoleResolver } from "../interfaces/resolvers/role-resolver";
import { ErrorInterceptor } from "../interfaces/middlewares/ErrorInterceptor";
import { UserResolver } from "../interfaces/resolvers/user-resolver";
import { BusinessCategoryResolver } from "../interfaces/resolvers/business-category-resolver";
import { StateResolver } from "../interfaces/resolvers/state-resolver";
import { CityResolver } from "../interfaces/resolvers/city-resolver";
import { BusinessResolver } from "../interfaces/resolvers/business-resolver";
import { SubcategoryResolver } from "../interfaces/resolvers/subcategory-resolver";
import { CategoryResolver } from "../interfaces/resolvers/category-resolver";
import { HeadquarterResolver } from "../interfaces/resolvers/headquarter-resolver";
import { ProductCategoryResolver } from "../interfaces/resolvers/product-category-resolver";
import { ProductResolver } from "../interfaces/resolvers/product-resolver";
import { graphqlUploadExpress } from "graphql-upload";

const startGraphqlServer = async (app: Application) => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        PingResolver,
        RoleResolver,
        UserResolver,
        BusinessCategoryResolver,
        StateResolver,
        CityResolver,
        BusinessResolver,
        SubcategoryResolver,
        CategoryResolver,
        HeadquarterResolver,
        ProductCategoryResolver,
        ProductResolver,
      ],
      container: myContainer,
      globalMiddlewares: [ErrorInterceptor],
    }),
    uploads: false,
    introspection: true,
    playground: true,
  });
  app.use(graphqlUploadExpress({ maxFieldSize: 10000, maxFiles: 10 }));

  server.applyMiddleware({ app, path: "/graphql" });
};

export default startGraphqlServer;
