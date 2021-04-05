import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import RoadTypeRepository from "../domain/RoadTypeRepository";

@injectable()
export default class GetRoadTypes {
  constructor(
    @inject(TYPES.RoadTypeRepository) private repository: RoadTypeRepository
  ) {}

  async execute() {
    return await this.repository.getList();
  }
}
