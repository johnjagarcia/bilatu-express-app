import { GraphQLUpload } from "graphql-upload";
import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import CreateBusinessCategory from "../../modules/bussiness-category/app/create-business-category";
import GetBusinessCategories from "../../modules/bussiness-category/app/get-business-categories";
import UpdateBusinessCategoryImage from "../../modules/bussiness-category/app/update-business-category-image";
import BusinessCategory from "../types/BusinessCategory";
import { Upload } from "../types/Upload";

@injectable()
@Resolver((of) => BusinessCategory)
export class BusinessCategoryResolver {
  @inject(CreateBusinessCategory)
  private createBusinessCategoryUseCase: CreateBusinessCategory;

  @inject(GetBusinessCategories)
  private getBusinessCategoriesUseCase: GetBusinessCategories;

  @inject(UpdateBusinessCategoryImage)
  private updateBusinessCategoryImageUseCase: UpdateBusinessCategoryImage;

  @Mutation(() => BusinessCategory)
  async createBusinessCategory(@Arg("name") name: string) {
    return await this.createBusinessCategoryUseCase.execute(name);
  }

  @Query(() => [BusinessCategory])
  async getBusinessCategories() {
    return await this.getBusinessCategoriesUseCase.execute();
  }

  @Mutation(() => Boolean)
  async updateBusinessCategoryImage(
    @Arg("id") id: string,
    @Arg("file", () => GraphQLUpload) { mimetype, createReadStream }: Upload
  ) {
    return await this.updateBusinessCategoryImageUseCase.execute(
      id,
      createReadStream,
      mimetype
    );
  }
}
