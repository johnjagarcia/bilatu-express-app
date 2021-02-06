import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import SubcategoryBuilder from "../domain/SubcategoryBuilder";
import SubcategoryRepository from "../domain/SubcategoryRepository";
import SubcategoryWithSameNameException from "../domain/SubcategoryNameException";

@injectable()
export default class CreateSubcategory {
  constructor(
    @inject(TYPES.SubcategoryRepository)
    private repository: SubcategoryRepository
  ) {}

  async execute(name: string, categoryId: string) {
    if (await this.repository.findByName(name)) {
      throw new SubcategoryWithSameNameException(
        "Subcategory with same name already exists"
      );
    }

    const subcategory = new SubcategoryBuilder()
      .with("name", name)
      .with("categoryId", categoryId)
      .build();

    return await this.repository.save(subcategory);
  }
}
