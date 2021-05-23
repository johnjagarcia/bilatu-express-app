import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import ProductItemRepository from "../domain/ProductItemRepository";

@injectable()
export default class DeleteProductItem {
  constructor(
    @inject(TYPES.ProductItemRepository)
    private productItemRepository: ProductItemRepository
  ) {}

  async execute(productItemId: string) {
    return await this.productItemRepository.deleteById(productItemId);
  }
}
