import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import RoleRepository from "../domain/RoleRepository";

@injectable()
export default class GetRoles {
  constructor(
    @inject(TYPES.RoleRepository) private repository: RoleRepository
  ) {}

  async execute() {
    return await this.repository.getList();
  }
}
