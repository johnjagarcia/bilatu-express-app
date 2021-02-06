import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import RoleBuilder from "../domain/RoleBuilder";
import RoleRepository from "../domain/RoleRepository";
import RoleWithSameCodeException from "../domain/RoleWithSameCodeException";

@injectable()
export default class CreateRole {
  constructor(
    @inject(TYPES.RoleRepository) private repository: RoleRepository
  ) {}

  async execute(code: string, name: string) {
    if (await this.repository.findByCode(code)) {
      throw new RoleWithSameCodeException("Role with same code already exists");
    }

    const role = new RoleBuilder()
      .with("code", code)
      .with("name", name)
      .build();

    return await this.repository.save(role);
  }
}
