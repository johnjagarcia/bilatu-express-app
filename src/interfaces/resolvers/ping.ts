import { injectable } from "inversify";
import { Authorized, Query, Resolver } from "type-graphql";

@injectable()
@Resolver()
export class PingResolver {
  @Authorized()
  @Query(() => String)
  ping() {
    return "Pong!";
  }
}
