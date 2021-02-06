import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import UserNotFoundException from "../domain/UserNotFoundException";
import UserRepository from "../domain/UserRepository";

@injectable()
export default class GetUser {
  constructor(
    @inject(TYPES.UserRepository) private repository: UserRepository
  ) {}

  async execute(_id: string) {
    const user = await this.repository.getOne(_id);
    if (!user)
      throw new UserNotFoundException("User not found with provided ID");

    return user;
  }
}
