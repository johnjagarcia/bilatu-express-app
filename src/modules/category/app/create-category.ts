import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import CategoryBuilder from "../domain/CategoryBuilder";
import CategoryRepository from "../domain/CategoryRepository";
import CategoryWithSameNameAndTypeException from "../domain/CategoryNameException";

@injectable()
export default class CreateCategory {
  constructor(
    @inject(TYPES.CategoryRepository)
    private repository: CategoryRepository
  ) {}

  async execute(name: string, type: string) {
    if (await this.repository.findByNameAndType(name, type)) {
      throw new CategoryWithSameNameAndTypeException(
        "Category with same name and type already exists"
      );
    }

    const category = new CategoryBuilder()
      .with("name", name)
      .with("type", type)
      .build();
    return await this.repository.save(category);
  }
}
