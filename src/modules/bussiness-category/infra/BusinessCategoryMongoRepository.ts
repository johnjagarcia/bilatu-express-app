import { injectable } from "inversify";
import BusinessCategory from "../domain/BusinessCategory";
import BusinessCategoryRepository from "../domain/BusinessCategoryRepository";
import BusinessCategoryDocument from "../../shared/infra/orm/mongoose/schemas/BusinessCategory";
import BusinessCategoryBuilder from "../domain/BusinessCategoryBuilder";

@injectable()
export default class BusinessCategoryMongoRepository
  implements BusinessCategoryRepository {
  async save(businessCategory: BusinessCategory): Promise<BusinessCategory> {
    const businessCategoryDocument = new BusinessCategoryDocument(
      businessCategory
    );
    return await businessCategoryDocument.save();
  }

  async getList(): Promise<BusinessCategory[]> {
    return await BusinessCategoryDocument.find({ active: true })
      .populate("blobId")
      .exec();
  }

  async findByName(name: string): Promise<BusinessCategory | null> {
    return await BusinessCategoryDocument.findOne({ name });
  }

  async updateImage(_id: string, blobId: string): Promise<boolean> {
    const response = await BusinessCategoryDocument.updateOne(
      { _id },
      { blobId }
    );
    return response.nModified === 1;
  }
}
