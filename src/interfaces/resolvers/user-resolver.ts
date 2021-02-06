import { FileUpload, GraphQLUpload } from "graphql-upload";
import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import CreateUser from "../../modules/user/app/create-user";
import GetUser from "../../modules/user/app/get-user";
import User from "../types/User";

@injectable()
@Resolver((of) => User)
export class UserResolver {
  @inject(CreateUser)
  private createUserUseCase: CreateUser;

  @inject(GetUser)
  private getUserUseCase: GetUser;

  @Mutation(() => User)
  async createUser(
    @Arg("name") name: string,
    @Arg("lastName") lastName: string,
    @Arg("password") password: string,
    @Arg("rolId") rolId: string,
    @Arg("email", { nullable: true }) email?: string,
    @Arg("cellphone", { nullable: true }) cellphone?: string,
    @Arg("dni", { nullable: true }) dni?: string,
    @Arg("birthdate", { nullable: true }) birthdate?: Date,
    @Arg("gender", { nullable: true }) gender?: string,
    @Arg("file", () => GraphQLUpload, { nullable: true })
    file?: FileUpload
  ) {
    console.log("file", file);
    return await this.createUserUseCase.execute(
      name,
      lastName,
      rolId,
      password,
      email,
      cellphone,
      dni,
      birthdate,
      gender
    );
  }

  @Query(() => User)
  async getUser(@Arg("id") id: string) {
    return await this.getUserUseCase.execute(id);
  }
}
