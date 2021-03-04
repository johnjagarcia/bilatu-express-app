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
    return savedSubcategory
      .populate("categoryId")
      .populate("blobId")
      .execPopulate();
  }

  async getList(): Promise<Subcategory[]> {
    return await SubcategoryDocument.find({ active: true })
      .sort("name")
      .populate("categoryId")
      .populate("blobId")
      .exec();
  }

  async findByName(name: string): Promise<Subcategory | null> {
    return await SubcategoryDocument.findOne({ name, active: true });
  }

  async updateImage(_id: string, blobId: string): Promise<boolean> {
    const response = await SubcategoryDocument.updateOne({ _id }, { blobId });
    return response.nModified === 1;
  }
}
