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
import { RoadTypeResolver } from "../interfaces/resolvers/road-type-resolver";
import { CustomerResolver } from "../interfaces/resolvers/customer-resolver";
import { BusinessCategoryGroupResolver } from "../interfaces/resolvers/business-category-group-resolver";
import { CartResolver } from "../interfaces/resolvers/cart-resolver";

import { AuthResolver } from "../interfaces/resolvers/auth-resolver";
import { authChecker } from "../interfaces/middlewares/AuthChecker";

import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants/auth";
import { SignupBusinessOwnerResolver } from "../interfaces/resolvers/signup-business-owner";
import { CartItemResolver } from "../interfaces/resolvers/cart-item-resolver";

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
        RoadTypeResolver,
        CustomerResolver,
        BusinessCategoryGroupResolver,
        AuthResolver,
        SignupBusinessOwnerResolver,
        CartResolver,
        CartItemResolver,
      ],
      container: myContainer,
      globalMiddlewares: [ErrorInterceptor],
      authChecker: authChecker,
    }),
    uploads: false,
    introspection: true,
    playground: true,
    context: ({ req }) => {
      const token = req.headers.authorization || "";

      let user = undefined;
      try {
        user = jwt.verify(token, JWT_SECRET) as any;
      } catch (error) {}
      // Add the user to the context
      return { user };
    },
  });
  app.use(graphqlUploadExpress({ maxFieldSize: 10000, maxFiles: 10 }));

  server.applyMiddleware({ app, path: "/graphql" });
};

export default startGraphqlServer;
