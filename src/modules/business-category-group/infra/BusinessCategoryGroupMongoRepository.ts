import { injectable } from "inversify";
import BusinessCategoryGroup from "../domain/BusinessCategoryGroup";
import BusinessCategoryGroupRepository from "../domain/BusinessCategoryGroupRepository";
import BusinessCategoryGroupDocument from "../../shared/infra/orm/mongoose/schemas/BusinessCategoryGroup";

@injectable()
export default class BusinessCategoryGroupMongoRepository
  implements BusinessCategoryGroupRepository {
  async save(
    businessCategoryGroup: BusinessCategoryGroup
  ): Promise<BusinessCategoryGroup> {
    const businessCategoryGroupDocument = new BusinessCategoryGroupDocument(
      businessCategoryGroup
    );
    const savedSubcategory = await businessCategoryGroupDocument.save();
    return savedSubcategory
      .populate("businessCategories")
      .populate("blobId")
      .execPopulate();
  }

  async getList(): Promise<BusinessCategoryGroup[]> {
    return await BusinessCategoryGroupDocument.find({
      active: true,
    })
      .sort("name")
      .populate("businessCategories")
      .populate("blobId")
      .exec();
  }

  async findByName(name: string): Promise<BusinessCategoryGroup | null> {
    return await BusinessCategoryGroupDocument.findOne({ name });
  }

  async updateImage(_id: string, blobId: string): Promise<boolean> {
    const response = await BusinessCategoryGroupDocument.updateOne(
      { _id },
      { blobId }
    );
    return response.nModified === 1;
  }
}
