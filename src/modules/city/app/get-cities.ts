import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import CityRepository from "../domain/CityRepository";

@injectable()
export default class GetCities {
  constructor(
    @inject(TYPES.CityRepository) private repository: CityRepository
  ) {}

  async execute(stateId: string) {
    return await this.repository.getList(stateId);
  }
}
