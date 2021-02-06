import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import HeadquarterBuilder from "../domain/HeadquarterBuilder";
import HeadquarterRepository from "../domain/HeadquarterRepository";

@injectable()
export default class CreateHeadquarter {
  constructor(
    @inject(TYPES.HeadquarterRepository)
    private repository: HeadquarterRepository
  ) {}

  async execute(
    name: string,
    businessId: string,
    main: boolean,
    address: string,
    cityId: string,
    cellphone: string,
    pickUpOnStore: boolean,
    homeDelivery: boolean,
    showLocation: boolean,
    coverageCities: string[],
    latitude: string,
    longitude: string,
    whatsapp?: string,
    email?: string
  ) {
    const headquarter = new HeadquarterBuilder()
      .with("name", name)
      .with("businessId", businessId)
      .with("main", main)
      .with("address", address.toUpperCase())
      .with("latitude", latitude)
      .with("longitude", longitude)
      .with("cityId", cityId)
      .with("cellphone", cellphone)
      .with("whatsapp", whatsapp)
      .with("email", email?.toLowerCase())
      .with("pickUpOnStore", pickUpOnStore)
      .with("homeDelivery", homeDelivery)
      .with("showLocation", showLocation)
      .with("coverageCities", coverageCities)
      .build();

    return await this.repository.save(headquarter);
  }
}
