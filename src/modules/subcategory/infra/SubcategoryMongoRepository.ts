import { injectable } from "inversify";
import Subcategory from "../domain/Subcategory";
import SubcategoryRepository from "../domain/SubcategoryRepository";
import SubcategoryDocument from "../../shared/infra/orm/mongoose/schemas/Subcategory";

@injectable()
export default class SubcategoryMongoRepository
  implements SubcategoryRepository {
  async save(subcategory: Subcategory): Promise<Subcategory> {
    const subcategoryDocument = new SubcategoryDocument(subcategory);
    const savedSubcategory = await subcategoryDocument.save();
    return savedSubcategory.populate("categoryId").execPopulate();
  }

  async getList(): Promise<Subcategory[]> {
    return await SubcategoryDocument.find()
      .sort("name")
      .populate("categoryId")
      .exec();
  }

  async findByName(name: string): Promise<Subcategory | null> {
    return await SubcategoryDocument.findOne({ name });
  }
}
