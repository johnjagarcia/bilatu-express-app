import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import ProductItemRepository from "../domain/ProductItemRepository";
import ProductNotFoundException from "../../product/domain/ProductNotFoundException";
import ProductRepository from "../../product/domain/ProductRepository";
import ProductItemNotFoundException from "../domain/ProductItemNotFoundException";

@injectable()
export default class UpdateProductItem {
  constructor(
    @inject(TYPES.ProductItemRepository)
    private productItemRepository: ProductItemRepository,
    @inject(TYPES.ProductRepository)
    private productRepository: ProductRepository
  ) {}

  async execute(productId: string, quantity: number, productItemId: string) {
    const product = await this.productRepository.getById(productId);

    if (!product)
      throw new ProductNotFoundException(
        "Product with provided ID was not found."
      );

    const updatedProductItem = await this.productItemRepository.update(
      productItemId,
      quantity,
      product.price
    );

    if (!updatedProductItem)
      throw new ProductItemNotFoundException(
        "ProductItem with provided ID was not found in Cart."
      );

    return updatedProductItem;
  }
}
