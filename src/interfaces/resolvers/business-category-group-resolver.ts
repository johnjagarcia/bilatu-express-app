import { GraphQLUpload } from "graphql-upload";
import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import CreateBusinessCategoryGroup from "../../modules/business-category-group/app/create-business-category-group";
import GetBusinessCategoriesGroup from "../../modules/business-category-group/app/get-business-categories-group";
import UpdateBusinessCategoryGroupImage from "../../modules/business-category-group/app/update-business-category-group-image";
import BusinessCategoryGroup from "../types/BusinessCategoryGroup";
import { Upload } from "../types/Upload";

@injectable()
@Resolver((of) => BusinessCategoryGroup)
export class BusinessCategoryGroupResolver {
  @inject(CreateBusinessCategoryGroup)
  private createBusinessCategoryGroupUseCase: CreateBusinessCategoryGroup;

  @inject(GetBusinessCategoriesGroup)
  private getBusinessCategoriesGroupUseCase: GetBusinessCategoriesGroup;

  @inject(UpdateBusinessCategoryGroupImage)
  private updateBusinessCategoryGroupImageUseCase: UpdateBusinessCategoryGroupImage;

  @Mutation(() => BusinessCategoryGroup)
  async createBusinessCategoryGroup(
    @Arg("name") name: string,
    @Arg("businessCategories", () => [String]) businessCategories: [string]
  ) {
    return await this.createBusinessCategoryGroupUseCase.execute(
      name,
      businessCategories
    );
  }

  @Query(() => [BusinessCategoryGroup])
  async getBusinessCategoriesGroup() {
    return await this.getBusinessCategoriesGroupUseCase.execute();
  }

  @Mutation(() => Boolean)
  async updateBusinessCategoryGroupImage(
    @Arg("id") id: string,
    @Arg("file", () => GraphQLUpload) { mimetype, createReadStream }: Upload
  ) {
    return await this.updateBusinessCategoryGroupImageUseCase.execute(
      id,
      createReadStream,
      mimetype
    );
  }
}
