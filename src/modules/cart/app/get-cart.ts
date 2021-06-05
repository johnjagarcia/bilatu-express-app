import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import CartRepository from "../domain/CartRepository";

@injectable()
export default class GetCart {
  constructor(
    @inject(TYPES.CartRepository) private repository: CartRepository
  ) {}

  async execute(customerId: string) {
    return await this.repository.getCarts(customerId);
  }
}
