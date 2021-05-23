import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import BusinessCategoryBuilder from "../domain/BusinessCategoryBuilder";
import BusinessCategoryRepository from "../domain/BusinessCategoryRepository";
import BusinessCategoryWithSameNameException from "../domain/BusinessCategoryNameException";

@injectable()
export default class CreateBusinessCategory {
  constructor(
    @inject(TYPES.BusinessCategoryRepository)
    private repository: BusinessCategoryRepository
  ) {}

  async execute(name: string) {
    if (await this.repository.findByName(name)) {
      throw new BusinessCategoryWithSameNameException(
        "Business category with same name already exists"
      );
    }

    const businessCategory = new BusinessCategoryBuilder()
      .with("name", name)
      .build();

    return await this.repository.save(businessCategory);
  }
}
