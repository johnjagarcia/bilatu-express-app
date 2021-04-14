import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import UserBuilder from "../domain/UserBuilder";
import UserRepository from "../domain/UserRepository";
import UserWithSameEmailException from "../domain/UserWithSameEmailException";

@injectable()
export default class CreateUser {
  constructor(
    @inject(TYPES.UserRepository) private repository: UserRepository
  ) {}

  async execute(
    name: string,
    lastName: string,
    rolId: string,
    password: string,
    email: string,
    cellphone?: string,
    dni?: string,
    birthDate?: Date,
    gender?: string
  ) {
    if (email && (await this.repository.findByEmail(email))) {
      throw new UserWithSameEmailException(
        "User with same E-mail already exists"
      );
    }

    const user = new UserBuilder()
      .with("name", name)
      .with("lastName", lastName)
      .with("email", email?.toLowerCase())
      .with("dni", dni)
      .with("cellphone", cellphone)
      .with("password", password)
      .with("rolId", rolId)
      .with("birthDate", birthDate)
      .with("gender", gender)
      .build();

    return await this.repository.save(user);
  }
}
