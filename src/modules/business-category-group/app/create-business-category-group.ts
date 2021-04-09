import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import SubcategoryBuilder from "../domain/BusinessCategoryGroupBuilder";
import BusinessCategoryGroupRepository from "../domain/BusinessCategoryGroupRepository";
import BusinessCategoryGroupWithSameNameException from "../domain/BusinessCategoryGroupWithSameNameException";

@injectable()
export default class CreateBusinessCategoryGroup {
  constructor(
    @inject(TYPES.BusinessCategoryGroupRepository)
    private repository: BusinessCategoryGroupRepository
  ) {}

  async execute(name: string, businessCategories: string[]) {
    if (await this.repository.findByName(name)) {
      throw new BusinessCategoryGroupWithSameNameException(
        "Subcategory with same name and type already exists"
      );
    }

    const subcategory = new SubcategoryBuilder()
      .with("name", name)
      .with("businessCategories", businessCategories)
      .build();

    return await this.repository.save(subcategory);
  }
}
