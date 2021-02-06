import Role from "./Role";

export default interface RoleRepository {
  save(role: Role): Promise<Role>;
  getList(): Promise<Role[]>;
  findByCode(code: string): Promise<Role | null>;
}
