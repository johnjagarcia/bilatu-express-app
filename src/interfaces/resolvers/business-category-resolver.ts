import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import CreateBusinessCategory from "../../modules/bussiness-category/app/create-business-category";
import GetBusinessCategories from "../../modules/bussiness-category/app/get-business-categories";
import BusinessCategory from "../types/BusinessCategory";

@injectable()
@Resolver((of) => BusinessCategory)
export class BusinessCategoryResolver {
  @inject(CreateBusinessCategory)
  private createBusinessCategoryUseCase: CreateBusinessCategory;

  @inject(GetBusinessCategories)
  private getBusinessCategoriesUseCase: GetBusinessCategories;

  @Mutation(() => BusinessCategory)
  async createBusinessCategory(@Arg("name") name: string) {
    return await this.createBusinessCategoryUseCase.execute(name);
  }

  @Query(() => [BusinessCategory])
  async getBusinessCategories() {
    return await this.getBusinessCategoriesUseCase.execute();
  }
}
