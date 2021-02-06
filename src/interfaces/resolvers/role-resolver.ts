import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import CreateRole from "../../modules/role/app/create-role";
import GetRoles from "../../modules/role/app/get-roles";
import Role from "../types/Role";

@injectable()
@Resolver((of) => Role)
export class RoleResolver {
  @inject(CreateRole)
  private createRoleUseCase: CreateRole;

  @inject(GetRoles)
  private getRolesUseCase: GetRoles;

  @Mutation(() => Role)
  async createRole(@Arg("code") code: string, @Arg("name") name: string) {
    return await this.createRoleUseCase.execute(code, name);
  }

  @Query(() => [Role])
  async getRoles() {
    return await this.getRolesUseCase.execute();
  }
}
