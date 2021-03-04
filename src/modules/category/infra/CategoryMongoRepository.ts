import { injectable } from "inversify";
import Category from "../domain/Category";
import CategoryRepository from "../domain/CategoryRepository";
import CategoryDocument from "../../shared/infra/orm/mongoose/schemas/Category";

@injectable()
export default class CategoryMongoRepository implements CategoryRepository {
  async save(category: Category): Promise<Category> {
    const categoryDocument = new CategoryDocument(category);
    const savedCategory = await categoryDocument.save();
    return savedCategory.populate("blobId").execPopulate();
  }

  async getList(): Promise<Category[]> {
    return await CategoryDocument.find({ active: true })
      .populate("blobId")
      .exec();
  }

  async findByName(name: string): Promise<Category | null> {
    return await CategoryDocument.findOne({ name }).populate("blobId").exec();
  }

  async updateImage(_id: string, blobId: string): Promise<boolean> {
    const response = await CategoryDocument.updateOne({ _id }, { blobId });
    return response.nModified === 1;
  }
}
