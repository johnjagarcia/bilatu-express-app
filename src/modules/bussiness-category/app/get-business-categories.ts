import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import BusinessCategoryRepository from "../domain/BusinessCategoryRepository";

@injectable()
export default class GetBusinessCategories {
  constructor(
    @inject(TYPES.BusinessCategoryRepository)
    private repository: BusinessCategoryRepository
  ) {}

  async execute() {
    return await this.repository.getList();
  }
}
