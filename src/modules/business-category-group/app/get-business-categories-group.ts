import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import BusinessCategoryGroupRepository from "../domain/BusinessCategoryGroupRepository";

@injectable()
export default class GetBusinessCategoriesGroup {
  constructor(
    @inject(TYPES.BusinessCategoryGroupRepository)
    private repository: BusinessCategoryGroupRepository
  ) {}

  async execute() {
    return await this.repository.getList();
  }
}
