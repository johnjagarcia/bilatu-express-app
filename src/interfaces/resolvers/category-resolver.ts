import { GraphQLUpload } from "graphql-upload";
import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import CreateCategory from "../../modules/category/app/create-category";
import GetCategories from "../../modules/category/app/get-categories";
import UpdateCategoryImage from "../../modules/category/app/update-category-image";
import Category from "../types/Category";
import { Upload } from "../types/Upload";

@injectable()
@Resolver((of) => Category)
export class CategoryResolver {
  @inject(CreateCategory)
  private createCategoryUseCase: CreateCategory;

  @inject(GetCategories)
  private getCategoriesUseCase: GetCategories;

  @inject(UpdateCategoryImage)
  private updateCategoryImageUseCase: UpdateCategoryImage;

  @Mutation(() => Category)
  async createCategory(@Arg("name") name: string) {
    return await this.createCategoryUseCase.execute(name);
  }

  @Query(() => [Category])
  async getCategories() {
    return await this.getCategoriesUseCase.execute();
  }

  @Mutation(() => Boolean)
  async updateCategoryImage(
    @Arg("id") id: string,
    @Arg("file", () => GraphQLUpload) { mimetype, createReadStream }: Upload
  ) {
    return await this.updateCategoryImageUseCase.execute(
      id,
      createReadStream,
      mimetype
    );
  }
}
