import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Headquarter from "../types/Headquarter";
import CreateHeadquarter from "../../modules/headquarter/app/create-headquarter";
import GetHeadquarters from "../../modules/headquarter/app/get-headquarter";

@injectable()
@Resolver((of) => Headquarter)
export class HeadquarterResolver {
  @inject(CreateHeadquarter)
  private createHeadquarterUseCase: CreateHeadquarter;

  @inject(GetHeadquarters)
  private getHeadquartersUseCase: GetHeadquarters;

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
    @Arg("coverage_cities", () => [String]) coverageCities: [string],
    @Arg("whatsapp", { nullable: true }) whatsapp?: string,
    @Arg("email", { nullable: true }) email?: string
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
      coverageCities,
      latitude,
      longitude,
      whatsapp,
      email
    );
  }

  @Query(() => [Headquarter])
  async getHeadquarters(@Arg("businessid") businessId: string) {
    return await this.getHeadquartersUseCase.execute(businessId);
  }
}
