import { inject, injectable } from "inversify";
import { Arg, Mutation, Resolver } from "type-graphql";
import RegisterBusinessOwner from "../../modules/signup-owner/app/register-business-owner";

import User from "../types/User";

@injectable()
@Resolver((of) => User)
export class SignupBusinessOwnerResolver {
  @inject(RegisterBusinessOwner)
  private registerBusinessOwnerUseCase: RegisterBusinessOwner;

  @Mutation(() => User)
  async registerBusinessOwner(
    @Arg("name") name: string,
    @Arg("lastName") lastName: string,
    @Arg("password") password: string,
    @Arg("email") email: string,
    @Arg("business_name") businessName: string,
    @Arg("person_type") personType: string,
    @Arg("nit") nit: string,
    @Arg("business_category_id") businessCategoryId: string,
    @Arg("business_type") businessType: string,
    @Arg("business_email") businessEmail: string,
    @Arg("headquarter_name") headquarterName: string,
    @Arg("headquarter_email") headquarterEmail: string,
    @Arg("headquarter_cellphone") headquarterCellphone: string,
    @Arg("headquarter_city_id") headquarterCityId: string,
    @Arg("headquarter_address") headquarterAddress: string,
    @Arg("latitude") latitude: string,
    @Arg("longitude") longitude: string,
    @Arg("pickup_on_store") pickUpOnStore: boolean,
    @Arg("home_delivery") homeDelivery: boolean,
    @Arg("show_location") showLocation: boolean,
    @Arg("headquarter_whatsapp", { nullable: true })
    @Arg("user_cellphone", { nullable: true })
    userCellphone?: string,
    headquarterWhatsapp?: string
  ) {
    return await this.registerBusinessOwnerUseCase.execute(
      name,
      lastName,
      password,
      email,
      businessName,
      personType,
      nit,
      businessCategoryId,
      businessType,
      businessEmail,
      headquarterName,
      headquarterEmail,
      headquarterCellphone,
      headquarterCityId,
      headquarterAddress,
      latitude,
      longitude,
      pickUpOnStore,
      homeDelivery,
      showLocation,
      headquarterWhatsapp,
      userCellphone
    );
  }
}
