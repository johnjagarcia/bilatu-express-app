import { injectable } from "inversify";
import Business from "../domain/Business";
import BusinessRepository from "../domain/BusinessRepository";
import BusinessDocument from "../../shared/infra/orm/mongoose/schemas/Business";

@injectable()
export default class BusinessMongoRepository implements BusinessRepository {
  async save(business: Business): Promise<Business> {
    const businessDocument = new BusinessDocument(business);
    return businessDocument.save();
  }

  async getList(userId: string): Promise<Business[]> {
    return await BusinessDocument.find({ userId })
      .populate("cityId")
      .populate("userId")
      .populate("categoryId")
      .populate("subcategories")
      .exec();
  }

  async findByNit(nit: string): Promise<Business | null> {
    return await BusinessDocument.findOne({ nit });
  }

  async associateProductCategories(
    businessId: string,
    categories: string[]
  ): Promise<number> {
    const result = await BusinessDocument.updateOne(
      { _id: businessId },
      { subcategories: categories }
    );

    return result.nModified;
  }
}
