import { ApolloError } from "apollo-server-express";
import { MiddlewareFn } from "type-graphql";
import DomainException from "../../modules/shared/domain/DomainException";

export const ErrorInterceptor: MiddlewareFn<any> = async (
  { context, info },
  next
) => {
  try {
    return await next();
  } catch (err) {
    if (err instanceof DomainException) {
      throw new ApolloError(err.message, err.errorCode());
    }

    throw err;
  }
};
