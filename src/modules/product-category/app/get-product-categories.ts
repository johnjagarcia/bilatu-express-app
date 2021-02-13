import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import ProductCategoryRepository from "../domain/ProductCategoryRepository";

@injectable()
export default class GetProductCategories {
  constructor(
    @inject(TYPES.ProductCategoryRepository)
    private repository: ProductCategoryRepository
  ) {}

  async execute() {
    return await this.repository.getList();
  }
}
