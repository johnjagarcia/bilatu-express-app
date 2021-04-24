import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import * as jwt from "jsonwebtoken";
import InvalidCredentialsException from "../domain/InvalidCredentialsException";
import UserRepository from "../../user/domain/UserRepository";
import { JWT_SECRET } from "../../../constants/auth";

@injectable()
export default class AuthenticateUser {
  constructor(
    @inject(TYPES.UserRepository) private repository: UserRepository
  ) {}

  async execute(email: string, password: string) {
    const user: any = await this.repository.findByEmailAndPassword(
      email,
      password
    );
    if (!user) {
      throw new InvalidCredentialsException("E-mail or password doesn't match");
    }

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        role: user.rolId.code,
        userName: `${user.name}`,
      },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return { token };
  }
}
