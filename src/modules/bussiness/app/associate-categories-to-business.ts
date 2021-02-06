import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import BusinessRepository from "../domain/BusinessRepository";

@injectable()
export default class AssociateCategoriesToBusiness {
  constructor(
    @inject(TYPES.BusinessRepository)
    private repository: BusinessRepository
  ) {}

  async execute(businessId: string, categories: string[]) {
    return await this.repository.associateProductCategories(
      businessId,
      categories
    );
  }
}
