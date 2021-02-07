import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import CreateProductCategory from "../../modules/product-category/app/create-product-category";
import GetProductCategories from "../../modules/product-category/app/get-product-categories";
import ProductCategory from "../types/ProductCategory";

@injectable()
@Resolver((of) => ProductCategory)
export class ProductCategoryResolver {
  @inject(CreateProductCategory)
  private createProductCategoryUseCase: CreateProductCategory;

  @inject(GetProductCategories)
  private getProductCategoriesUseCase: GetProductCategories;

  @Mutation(() => ProductCategory)
  async createProductCategory(
    @Arg("name") name: string,
    @Arg("subcategoryid") subcategoryId: string
  ) {
    return await this.createProductCategoryUseCase.execute(name, subcategoryId);
  }

  @Query(() => [ProductCategory])
  async getProductCategories() {
    return await this.getProductCategoriesUseCase.execute();
  }
}
