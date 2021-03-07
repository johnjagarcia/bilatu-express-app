import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import CategoryRepository from "../domain/CategoryRepository";

@injectable()
export default class GetCategories {
  constructor(
    @inject(TYPES.CategoryRepository)
    private repository: CategoryRepository
  ) {}

  async execute(type: string) {
    return await this.repository.getList(type);
  }
}
