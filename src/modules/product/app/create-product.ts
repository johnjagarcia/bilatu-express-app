import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import ProductBuilder from "../domain/ProductBuilder";
import ProductRepository from "../domain/ProductRepository";

@injectable()
export default class CreateProduct {
  constructor(
    @inject(TYPES.ProductRepository)
    private repository: ProductRepository
  ) {}

  async execute(
    title: string,
    headquarterId: string,
    productCategoryId: string,
    status: string,
    warranty: string,
    description: string,
    price: number,
    brand?: string,
    modelo?: string,
    creationYear?: string,
    tags?: string[]
  ) {
    const product = new ProductBuilder()
      .with("title", title)
      .with("headquarterId", headquarterId)
      .with("productCategoryId", productCategoryId)
      .with("status", status)
      .with("warranty", warranty)
      .with("description", description)
      .with("brand", brand)
      .with("modelo", modelo)
      .with("creationYear", creationYear)
      .with("tags", tags)
      .with("price", price)
      .build();

    return await this.repository.save(product);
  }
}
