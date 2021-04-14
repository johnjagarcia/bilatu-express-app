import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import GetBusiness from "../../modules/bussiness/app/get-business";
import CreateBusiness from "../../modules/bussiness/app/create-business";
import Business from "../types/Business";
import AssociateCategoriesToBusiness from "../../modules/bussiness/app/associate-categories-to-business";

@injectable()
@Resolver((of) => Business)
export class BusinessResolver {
  @inject(CreateBusiness)
  private createBusinessUseCase: CreateBusiness;

  @inject(GetBusiness)
  private getBusinessUseCase: GetBusiness;

  @inject(AssociateCategoriesToBusiness)
  private associateCategoriesToBusinessUseCase: AssociateCategoriesToBusiness;

  @Mutation(() => Business)
  async createBusiness(
    @Arg("name") name: string,
    @Arg("person_type") personType: string,
    @Arg("nit") nit: string,
    @Arg("categoryid") categoryId: string,
    @Arg("type") type: string,
    @Arg("address") address: string,
    @Arg("email") email: string,
    @Arg("userid") userId: string,
    @Arg("cityid", { nullable: true }) cityId?: string,
    @Arg("cellphone", { nullable: true }) cellphone?: string,
    @Arg("whatsapp", { nullable: true }) whatsapp?: string
  ) {
    return await this.createBusinessUseCase.execute(
      name,
      personType,
      nit,
      categoryId,
      type,
      address,
      email,
      userId,
      cityId,
      cellphone,
      whatsapp
    );
  }

  @Query(() => [Business])
  async getBussiness(@Arg("userid") userId: string) {
    return await this.getBusinessUseCase.execute(userId);
  }

  @Mutation(() => Number)
  async associateCategoriesToBusiness(
    @Arg("businessid") businessId: string,
    @Arg("categories", () => [String]) categories: [string]
  ) {
    return await this.associateCategoriesToBusinessUseCase.execute(
      businessId,
      categories
    );
  }
}
