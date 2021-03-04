import { GraphQLUpload } from "graphql-upload";
import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import CreateSubcategory from "../../modules/subcategory/app/create-subcategory";
import GetSubcategories from "../../modules/subcategory/app/get-subcategories";
import UpdateSubcategoryImage from "../../modules/subcategory/app/update-subcategory-image";
import Subcategory from "../types/Subcategory";
import { Upload } from "../types/Upload";

@injectable()
@Resolver((of) => Subcategory)
export class SubcategoryResolver {
  @inject(CreateSubcategory)
  private createSubcategoryUseCase: CreateSubcategory;

  @inject(GetSubcategories)
  private getSubcategoriesUseCase: GetSubcategories;

  @inject(UpdateSubcategoryImage)
  private updateSubcategoryImageUseCase: UpdateSubcategoryImage;

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

  @Mutation(() => Boolean)
  async updateSubcategoryImage(
    @Arg("id") id: string,
    @Arg("file", () => GraphQLUpload) { mimetype, createReadStream }: Upload
  ) {
    return await this.updateSubcategoryImageUseCase.execute(
      id,
      createReadStream,
      mimetype
    );
  }
}
