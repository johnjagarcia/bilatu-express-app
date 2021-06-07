import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import CartRepository from "../domain/CartRepository";

@injectable()
export default class DeleteCart {
  constructor(
    @inject(TYPES.CartRepository) private repository: CartRepository
  ) {}

  async execute(cartId: string) {
    return await this.repository.deleteById(cartId);
  }
}
