import { injectable } from "inversify";
import User from "../domain/User";
import UserRepository from "../domain/UserRepository";
import UserDocument from "../../shared/infra/orm/mongoose/schemas/User";

@injectable()
export default class UserMongoRepository implements UserRepository {
  async save(user: User): Promise<User> {
    const userDocument = new UserDocument(user);
    return await userDocument.save();
  }

  async getOne(_id: string): Promise<User | null> {
    return await UserDocument.findById(_id);
  }

  async findByEmail(email: string): Promise<User | null> {
    return await UserDocument.findOne({ email });
  }

  async findByDni(dni: string): Promise<User | null> {
    return await UserDocument.findOne({ dni });
  }
}
