import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import CityBuilder from "../domain/CityBuilder";
import CityRepository from "../domain/CityRepository";
import CityWithSameCodeException from "../domain/CityWithSameCodeException";

@injectable()
export default class CreateCity {
  constructor(
    @inject(TYPES.CityRepository) private repository: CityRepository
  ) {}

  async execute(code: string, name: string, stateId: string) {
    if (await this.repository.findByCode(code)) {
      throw new CityWithSameCodeException("City with same code already exists");
    }

    const city = new CityBuilder()
      .with("code", code)
      .with("name", name)
      .with("stateId", stateId)
      .build();

    return await this.repository.save(city);
  }
}
