import User from "./User";

export default interface UserRepository {
  save(user: User): Promise<User>;
  getOne(_id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findByDni(email: string): Promise<User | null>;
  findByEmailAndPassword(email: string, password: string): Promise<User | null>;
}
