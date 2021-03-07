import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import ServiceCategoryRepository from "../domain/ServiceCategoryRepository";

@injectable()
export default class GetServiceCategories {
  constructor(
    @inject(TYPES.ServiceCategoryRepository)
    private repository: ServiceCategoryRepository
  ) {}

  async execute() {
    return await this.repository.getList();
  }
}
