import { inject, injectable } from "inversify";
import { Arg, Authorized, Mutation, Resolver } from "type-graphql";
import AuthenticateUser from "../../modules/auth/app/AuthenticateUser";
import Auth from "../types/Auth";

@injectable()
@Resolver((of) => Auth)
export class AuthResolver {
  @inject(AuthenticateUser)
  private authenticateUserUseCase: AuthenticateUser;

  @Mutation(() => Auth)
  async authenticateUser(
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    return await this.authenticateUserUseCase.execute(email, password);
  }
}
