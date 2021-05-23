import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import ProductItem from "../../product-item/domain/ProductItem";
import ProductItemRepository from "../../product-item/domain/ProductItemRepository";
import ProductNotFoundException from "../../product/domain/ProductNotFoundException";
import ProductRepository from "../../product/domain/ProductRepository";
import CartRepository from "../domain/CartRepository";

@injectable()
export default class UpdateCart {
  constructor(
    @inject(TYPES.ProductItemRepository)
    private productItemRepository: ProductItemRepository,
    @inject(TYPES.ProductRepository)
    private productRepository: ProductRepository,
    @inject(TYPES.CartRepository) private repository: CartRepository
  ) {}

  async execute(customerId: string, productId: string, quantity: number) {
    const product = await this.productRepository.getById(productId);
    if (!product)
      throw new ProductNotFoundException(
        "Product with provided ID was not found."
      );

    const existingItem = await this.repository.getExistingItem(
      customerId,
      productId
    );

    if (existingItem && existingItem._id) {
      await this.productItemRepository.update(
        existingItem._id,
        quantity,
        product.price
      );
    } else {
      const createdProductItem = await this.productItemRepository.save({
        productId,
        quantity,
        price: product.price,
        total: quantity * product.price,
      });

      return await this.repository.update(customerId, createdProductItem);
    }

    return await this.repository.getOrCreate(customerId);
  }
}
