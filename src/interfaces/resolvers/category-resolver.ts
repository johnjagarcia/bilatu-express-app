import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import CreateCategory from "../../modules/category/app/create-category";
import GetCategories from "../../modules/category/app/get-categories";
import Category from "../types/Category";

@injectable()
@Resolver((of) => Category)
export class CategoryResolver {
  @inject(CreateCategory)
  private createCategoryUseCase: CreateCategory;

  @inject(GetCategories)
  private getCategoriesUseCase: GetCategories;

  @Mutation(() => Category)
  async createCategory(@Arg("name") name: string) {
    return await this.createCategoryUseCase.execute(name);
  }

  @Query(() => [Category])
  async getCategories() {
    return await this.getCategoriesUseCase.execute();
  }
}
