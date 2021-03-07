import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import SubcategoryRepository from "../domain/SubcategoryRepository";

@injectable()
export default class GetSubcategories {
  constructor(
    @inject(TYPES.SubcategoryRepository)
    private repository: SubcategoryRepository
  ) {}

  async execute(type: string) {
    return await this.repository.getList(type);
  }
}
