import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import CreateSubcategory from "../../modules/subcategory/app/create-subcategory";
import GetSubcategories from "../../modules/subcategory/app/get-subcategories";
import Subcategory from "../types/Subcategory";

@injectable()
@Resolver((of) => Subcategory)
export class SubcategoryResolver {
  @inject(CreateSubcategory)
  private createSubcategoryUseCase: CreateSubcategory;

  @inject(GetSubcategories)
  private getSubcategoriesUseCase: GetSubcategories;

  @Mutation(() => Subcategory)
  async createSubcategory(
    @Arg("name") name: string,
    @Arg("categoryid") categoryId: string
  ) {
    return await this.createSubcategoryUseCase.execute(name, categoryId);
  }

  @Query(() => [Subcategory])
  async getSubcategories() {
    return await this.getSubcategoriesUseCase.execute();
  }
}
