import { inject, injectable } from "inversify";
import CreateBusiness from "../../bussiness/app/create-business";
import CreateHeadquarter from "../../headquarter/app/create-headquarter";
import CreateUser from "../../user/app/create-user";

@injectable()
export default class RegisterBusinessOwner {
  @inject(CreateUser)
  private createUserUseCase: CreateUser;

  @inject(CreateBusiness)
  private createBusinessUseCase: CreateBusiness;

  @inject(CreateHeadquarter)
  private createHeadquarterUseCase: CreateHeadquarter;

  async execute(
    name: string,
    lastName: string,
    rolId: string,
    password: string,
    email: string,
    businessName: string,
    personType: string,
    nit: string,
    businessCategoryId: string,
    businessType: string,
    businessEmail: string,
    headquarterName: string,
    headquarterEmail: string,
    headquarterCellphone: string,
    headquarterCityId: string,
    headquarterAddress: string,
    latitude: string,
    longitude: string,
    pickUpOnStore: boolean,
    homeDelivery: boolean,
    showLocation: boolean,
    headquarterWhatsapp?: string,
    userCellphone?: string
  ) {
    const user = await this.createUserUseCase.execute(
      name,
      lastName,
      rolId,
      password,
      email,
      userCellphone
    );

    const business = await this.createBusinessUseCase.execute(
      businessName,
      personType,
      nit,
      businessCategoryId,
      businessType,
      businessEmail,
      user._id
    );

    await this.createHeadquarterUseCase.execute(
      headquarterName,
      business._id,
      true,
      headquarterAddress,
      headquarterCityId,
      headquarterCellphone,
      pickUpOnStore,
      homeDelivery,
      showLocation,
      latitude,
      longitude,
      headquarterEmail,
      undefined,
      headquarterWhatsapp
    );

    return user;
  }
}
