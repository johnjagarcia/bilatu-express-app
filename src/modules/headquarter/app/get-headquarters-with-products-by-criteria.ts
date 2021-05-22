import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import HeadquarterRepository from "../domain/HeadquarterRepository";

@injectable()
export default class GetHeadquartersWithProductsByCriteria {
  constructor(
    @inject(TYPES.HeadquarterRepository)
    private repository: HeadquarterRepository
  ) {}

  async execute(criteria: string) {
    const data = await this.repository.getListWithProductsByCriteria(criteria);
    return data;
  }
}
