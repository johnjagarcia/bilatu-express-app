import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Product from "../types/Product";
import CreateProduct from "../../modules/product/app/create-product";
import GetProductsByHeadquarter from "../../modules/product/app/get-products-by-headquarter";

@injectable()
@Resolver((of) => Product)
export class ProductResolver {
  @inject(CreateProduct)
  private createProductUseCase: CreateProduct;

  @inject(GetProductsByHeadquarter)
  private getProductsByHeadquarterUseCase: GetProductsByHeadquarter;

  @Mutation(() => Product)
  async createProduct(
    @Arg("title") title: string,
    @Arg("headquarterId") headquarterId: string,
    @Arg("productCategoryId") productCategoryId: string,
    @Arg("status") status: string,
    @Arg("warranty") warranty: string,
    @Arg("description") description: string,
    @Arg("tags", () => [String]) tags: [string],
    @Arg("price") price: number,
    @Arg("brand", { nullable: true }) brand?: string,
    @Arg("modelo", { nullable: true }) modelo?: string,
    @Arg("creationYear", { nullable: true }) creationYear?: string
  ) {
    return await this.createProductUseCase.execute(
      title,
      headquarterId,
      productCategoryId,
      status,
      warranty,
      description,
      price,
      brand,
      modelo,
      creationYear,
      tags
    );
  }

  @Query(() => [Product])
  async getProductsByHeadquarter(@Arg("headquarterid") headquarterId: string) {
    return await this.getProductsByHeadquarterUseCase.execute(headquarterId);
  }
}
