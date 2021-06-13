import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import CartItemNotFoundException from "../../cart-item/domain/CartItemNotFoundException";
import CartItemRepository from "../../cart-item/domain/CartItemRepository";
import CartRepository from "../domain/CartRepository";

@injectable()
export default class DeleteCartItem {
  constructor(
    @inject(TYPES.CartItemRepository)
    private cartItemRepository: CartItemRepository,
    @inject(TYPES.CartRepository) private repository: CartRepository
  ) {}

  async execute(customerId: string, cartItemId: string) {
    const cartItem: any = await this.cartItemRepository.getById(cartItemId);

    if (!cartItem)
      throw new CartItemNotFoundException(
        "Cart Item with provided ID was not found."
      );

    const deleted = await this.cartItemRepository.deleteById(cartItemId);

    if (deleted) {
      const cart = await this.repository.getCartByHeadquarterId(
        customerId,
        cartItem.productId.headquarterId
      );

      if (cart && cart._id && cart.cartItems.length === 0) {
        await this.repository.deleteById(cart._id);
      }
    }

    return deleted;
  }
}
