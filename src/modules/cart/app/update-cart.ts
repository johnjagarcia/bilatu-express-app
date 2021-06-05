import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import CartItemRepository from "../../cart-item/domain/CartItemRepository";
import ProductNotFoundException from "../../product/domain/ProductNotFoundException";
import ProductRepository from "../../product/domain/ProductRepository";
import CartRepository from "../domain/CartRepository";

@injectable()
export default class UpdateCart {
  constructor(
    @inject(TYPES.CartItemRepository)
    private cartItemRepository: CartItemRepository,
    @inject(TYPES.ProductRepository)
    private productRepository: ProductRepository,
    @inject(TYPES.CartRepository) private repository: CartRepository
  ) {}

  async execute(
    customerId: string,
    headquarterId: string,
    productId: string,
    quantity: number
  ) {
    const product = await this.productRepository.getById(productId);
    if (!product)
      throw new ProductNotFoundException(
        "Product with provided ID was not found."
      );

    const existingItem = await this.repository.getExistingItem(
      customerId,
      headquarterId,
      productId
    );

    if (existingItem && existingItem._id) {
      await this.cartItemRepository.update(
        existingItem._id,
        quantity,
        product.price
      );
    } else {
      const createdItem = await this.cartItemRepository.save({
        productId,
        quantity,
        price: product.price,
        total: quantity * product.price,
      });

      return await this.repository.update(
        customerId,
        headquarterId,
        createdItem
      );
    }

    return await this.repository.getCarts(customerId);
  }
}
