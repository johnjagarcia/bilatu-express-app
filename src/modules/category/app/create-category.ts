import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import CategoryBuilder from "../domain/CategoryBuilder";
import CategoryRepository from "../domain/CategoryRepository";
import CategoryWithSameNameException from "../domain/CategoryNameException";

@injectable()
export default class CreateCategory {
  constructor(
    @inject(TYPES.CategoryRepository)
    private repository: CategoryRepository
  ) {}

  async execute(name: string) {
    if (await this.repository.findByName(name)) {
      throw new CategoryWithSameNameException(
        "Category with same name already exists"
      );
    }

    const category = new CategoryBuilder().with("name", name).build();
    return await this.repository.save(category);
  }
}
