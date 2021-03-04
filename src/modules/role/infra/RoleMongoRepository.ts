import { injectable } from "inversify";
import Role from "../domain/Role";
import RoleRepository from "../domain/RoleRepository";
import RoleDocument from "../../shared/infra/orm/mongoose/schemas/Role";
import RoleBuilder from "../domain/RoleBuilder";

@injectable()
export default class RoleMongoRepository implements RoleRepository {
  async save(role: Role): Promise<Role> {
    const roleDocument = new RoleDocument(role);
    return await roleDocument.save();
  }

  async getList(): Promise<Role[]> {
    return await RoleDocument.find({ active: true });
  }

  async findByCode(code: string): Promise<Role | null> {
    return await RoleDocument.findOne({ code });
  }
}
