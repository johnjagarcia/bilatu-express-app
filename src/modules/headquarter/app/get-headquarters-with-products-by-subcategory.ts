import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import HeadquarterRepository from "../domain/HeadquarterRepository";

@injectable()
export default class GetHeadquartersWithProductsBySubcategory {
  constructor(
    @inject(TYPES.HeadquarterRepository)
    private repository: HeadquarterRepository
  ) {}

  async execute(subcategoryId: string) {
    return await this.repository.getListWithProductsBySubcategory(
      subcategoryId
    );
  }
}
