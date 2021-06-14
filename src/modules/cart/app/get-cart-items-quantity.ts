import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import CartRepository from "../domain/CartRepository";

@injectable()
export default class GetCartItemsQuantity {
  constructor(
    @inject(TYPES.CartRepository) private repository: CartRepository
  ) {}

  async execute(customerId: string): Promise<number> {
    return await this.repository.getCartItemsQuantity(customerId);
  }
}
