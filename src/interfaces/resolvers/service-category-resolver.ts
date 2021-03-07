import { GraphQLUpload } from "graphql-upload";
import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import CreateServiceCategory from "../../modules/service-category/app/create-service-category";
import GetServiceCategories from "../../modules/service-category/app/get-service-categories";
import ServiceCategory from "../types/ServiceCategory";
import { Upload } from "../types/Upload";

@injectable()
@Resolver((of) => ServiceCategory)
export class ProductCategoryResolver {
  @inject(CreateServiceCategory)
  private createServiceCategoryUseCase: CreateServiceCategory;

  @inject(GetServiceCategories)
  private getServiceCategoriesUseCase: GetServiceCategories;

  @Mutation(() => ServiceCategory)
  async createServiceCategory(
    @Arg("name") name: string,
    @Arg("subcategoryid") subcategoryId: string,
    @Arg("file", () => GraphQLUpload, { nullable: true })
    { mimetype, createReadStream }: Upload
  ) {
    return await this.createServiceCategoryUseCase.execute(
      name,
      subcategoryId,
      createReadStream,
      mimetype
    );
  }

  @Query(() => [ServiceCategory])
  async getServiceCategories() {
    return await this.getServiceCategoriesUseCase.execute();
  }
}
