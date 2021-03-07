import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import SubcategoryBuilder from "../domain/SubcategoryBuilder";
import SubcategoryRepository from "../domain/SubcategoryRepository";
import SubcategoryWithSameNameAndTypeException from "../domain/SubcategoryNameException";

@injectable()
export default class CreateSubcategory {
  constructor(
    @inject(TYPES.SubcategoryRepository)
    private repository: SubcategoryRepository
  ) {}

  async execute(name: string, type: string, categoryId: string) {
    if (await this.repository.findByNameAndType(name, type)) {
      throw new SubcategoryWithSameNameAndTypeException(
        "Subcategory with same name and type already exists"
      );
    }

    const subcategory = new SubcategoryBuilder()
      .with("name", name)
      .with("type", type)
      .with("categoryId", categoryId)
      .build();

    return await this.repository.save(subcategory);
  }
}
