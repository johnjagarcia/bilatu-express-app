import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Headquarter from "../types/Headquarter";
import CreateHeadquarter from "../../modules/headquarter/app/create-headquarter";
import GetHeadquarters from "../../modules/headquarter/app/get-headquarter";
import GetHeadquartersWithProductsByCriteria from "../../modules/headquarter/app/get-headquarters-with-products-by-criteria";
import GetHeadquartersWithProductsBySubcategory from "../../modules/headquarter/app/get-headquarters-with-products-by-subcategory";

@injectable()
@Resolver((of) => Headquarter)
export class HeadquarterResolver {
  @inject(CreateHeadquarter)
  private createHeadquarterUseCase: CreateHeadquarter;

  @inject(GetHeadquarters)
  private getHeadquartersUseCase: GetHeadquarters;

  @inject(GetHeadquartersWithProductsByCriteria)
  private getProductsByCriteriaUseCase: GetHeadquartersWithProductsByCriteria;

  @inject(GetHeadquartersWithProductsBySubcategory)
  private getProductsBySubcategoryUseCase: GetHeadquartersWithProductsBySubcategory;

  @Mutation(() => Headquarter)
  async createHeadquarter(
    @Arg("name") name: string,
    @Arg("businessid") businessId: string,
    @Arg("main") main: boolean,
    @Arg("address") address: string,
    @Arg("latitude") latitude: string,
    @Arg("longitude") longitude: string,
    @Arg("cityid") cityId: string,
    @Arg("cellphone") cellphone: string,
    @Arg("pickup_on_store") pickupOnStore: boolean,
    @Arg("home_delivery") homeDelivery: boolean,
    @Arg("show_location") showLocation: boolean,
    @Arg("email") email: string,
    @Arg("coverage_cities", () => [String], { nullable: true })
    coverageCities?: [string],
    @Arg("whatsapp", { nullable: true }) whatsapp?: string
  ) {
    return await this.createHeadquarterUseCase.execute(
      name,
      businessId,
      main,
      address,
      cityId,
      cellphone,
      pickupOnStore,
      homeDelivery,
      showLocation,
      latitude,
      longitude,
      email,
      coverageCities,
      whatsapp
    );
  }

  @Query(() => [Headquarter])
  async getHeadquarters(@Arg("businessid") businessId: string) {
    return await this.getHeadquartersUseCase.execute(businessId);
  }

  @Query(() => [Headquarter])
  async getHeadquartersWithProductsByCriteria(
    @Arg("criteria") criteria: string
  ) {
    return await this.getProductsByCriteriaUseCase.execute(criteria);
  }

  @Query(() => [Headquarter])
  async getHeadquartersWithProductsBySubcategory(
    @Arg("subcategoryId") subcategoryId: string
  ) {
    return await this.getProductsBySubcategoryUseCase.execute(subcategoryId);
  }
}
