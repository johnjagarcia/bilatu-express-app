import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import BusinessBuilder from "../domain/BusinessBuilder";
import BusinessWithSameNitException from "../domain/BusinessNitException";
import BusinessRepository from "../domain/BusinessRepository";

@injectable()
export default class CreateBusiness {
  constructor(
    @inject(TYPES.BusinessRepository)
    private repository: BusinessRepository
  ) {}

  async execute(
    name: string,
    personType: string,
    nit: string,
    categoryId: string,
    type: string,
    email: string,
    userId: string,
    address?: string,
    cityId?: string,
    cellphone?: string,
    whatsapp?: string
  ) {
    if (nit && (await this.repository.findByNit(nit))) {
      throw new BusinessWithSameNitException(
        "Business with same NIT already exists"
      );
    }

    const business = new BusinessBuilder()
      .with("name", name)
      .with("categoryId", categoryId)
      .with("address", address?.toUpperCase())
      .with("cityId", cityId)
      .with("cellphone", cellphone)
      .with("userId", userId)
      .with("whatsapp", whatsapp)
      .with("email", email?.toLowerCase())
      .with("personType", personType)
      .with("nit", nit)
      .with("type", type)
      .build();

    return await this.repository.save(business);
  }
}
