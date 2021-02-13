import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import ProductCategoryBuilder from "../domain/ProductCategoryBuilder";
import ProductCategoryRepository from "../domain/ProductCategoryRepository";
import ProductCategoryWithSameNameException from "../domain/ProductCategoryNameException";

@injectable()
export default class CreateProductCategory {
  constructor(
    @inject(TYPES.ProductCategoryRepository)
    private repository: ProductCategoryRepository
  ) {}

  async execute(name: string, subcategoryId: string) {
    if (await this.repository.findByName(name)) {
      throw new ProductCategoryWithSameNameException(
        "Product Category with same name already exists"
      );
    }

    const productCategory = new ProductCategoryBuilder()
      .with("name", name)
      .with("subcategoryId", subcategoryId)
      .build();

    return await this.repository.save(productCategory);
  }
}
