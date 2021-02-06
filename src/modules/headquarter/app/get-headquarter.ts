import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import HeadquarterRepository from "../domain/HeadquarterRepository";

@injectable()
export default class GetHeadquarters {
  constructor(
    @inject(TYPES.HeadquarterRepository)
    private repository: HeadquarterRepository
  ) {}

  async execute(businessId: string) {
    return this.repository.getList(businessId);
  }
}
