import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import CartItemRepository from "../domain/CartItemRepository";
import ProductNotFoundException from "../../product/domain/ProductNotFoundException";
import ProductRepository from "../../product/domain/ProductRepository";
import CartItemNotFoundException from "../domain/CartItemNotFoundException";

@injectable()
export default class UpdateCartItem {
  constructor(
    @inject(TYPES.CartItemRepository)
    private cartItemRepository: CartItemRepository,
    @inject(TYPES.ProductRepository)
    private productRepository: ProductRepository
  ) {}

  async execute(productId: string, quantity: number, cartItemId: string) {
    const product = await this.productRepository.getById(productId);

    if (!product)
      throw new ProductNotFoundException(
        "Product with provided ID was not found."
      );

    const updatedItem = await this.cartItemRepository.update(
      cartItemId,
      quantity,
      product.price
    );

    if (!updatedItem)
      throw new CartItemNotFoundException(
        "Cart Item with provided ID was not found in Cart."
      );

    return updatedItem;
  }
}
