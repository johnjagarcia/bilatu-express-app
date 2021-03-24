import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Product from "../types/Product";
import CreateProduct from "../../modules/product/app/create-product";
import GetProducts from "../../modules/product/app/get-products";
import BusinessProductList from "../types/BusinessProductList";

@injectable()
@Resolver((of) => Product)
export class ProductResolver {
  @inject(CreateProduct)
  private createProductUseCase: CreateProduct;

  @inject(GetProducts)
  private getProductsUseCase: GetProducts;

  @Mutation(() => Product)
  async createProduct(
    @Arg("title") title: string,
    @Arg("headquarterId") headquarterId: string,
    @Arg("productCategoryId") productCategoryId: string,
    @Arg("status") status: string,
    @Arg("warranty") warranty: string,
    @Arg("description") description: string,
    @Arg("tags", () => [String]) tags: [string],
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
      brand,
      modelo,
      creationYear,
      tags
    );
  }

  @Query(() => [BusinessProductList])
  async getProducts(
    @Arg("criteria", { nullable: true }) criteria?: string,
    @Arg("subcategoryid", { nullable: true }) subcategoryId?: string
  ) {
    return await this.getProductsUseCase.execute(criteria, subcategoryId);
  }
}
