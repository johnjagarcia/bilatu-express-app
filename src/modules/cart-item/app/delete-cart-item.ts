import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import CartItemRepository from "../domain/CartItemRepository";

@injectable()
export default class DeleteCartItem {
  constructor(
    @inject(TYPES.CartItemRepository)
    private cartItemRepository: CartItemRepository
  ) {}

  async execute(cartItemId: string) {
    return await this.cartItemRepository.deleteById(cartItemId);
  }
}
