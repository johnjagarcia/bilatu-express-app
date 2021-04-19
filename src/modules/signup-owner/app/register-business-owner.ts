import { inject, injectable } from "inversify";
import { ROLES } from "../../../constants/roles";
import { TYPES } from "../../../constants/types";
import CreateBusiness from "../../bussiness/app/create-business";
import CreateHeadquarter from "../../headquarter/app/create-headquarter";
import RoleRepository from "../../role/domain/RoleRepository";
import CreateUser from "../../user/app/create-user";
import RoleNotFoundWithGivenCode from "../domain/RoleNotFoundWithGivenCode";

@injectable()
export default class RegisterBusinessOwner {
  @inject(TYPES.RoleRepository) private roleRepository: RoleRepository;

  @inject(CreateUser)
  private createUserUseCase: CreateUser;

  @inject(CreateBusiness)
  private createBusinessUseCase: CreateBusiness;

  @inject(CreateHeadquarter)
  private createHeadquarterUseCase: CreateHeadquarter;

  async execute(
    name: string,
    lastName: string,
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
    const ownerRole = await this.roleRepository.findByCode(ROLES.Owner);
    if (!ownerRole)
      throw new RoleNotFoundWithGivenCode(
        `No role found with ${ROLES.Owner} code`
      );

    const user = await this.createUserUseCase.execute(
      name,
      lastName,
      ownerRole._id,
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
