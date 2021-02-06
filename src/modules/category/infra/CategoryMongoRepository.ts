import { injectable } from "inversify";
import Category from "../domain/Category";
import CategoryRepository from "../domain/CategoryRepository";
import CategoryDocument from "../../shared/infra/orm/mongoose/schemas/Category";

@injectable()
export default class CategoryMongoRepository implements CategoryRepository {
  async save(category: Category): Promise<Category> {
    const categoryDocument = new CategoryDocument(category);
    return await categoryDocument.save();
  }

  async getList(): Promise<Category[]> {
    return await CategoryDocument.find();
  }

  async findByName(name: string): Promise<Category | null> {
    return await CategoryDocument.findOne({ name });
  }
}
