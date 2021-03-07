import { injectable } from "inversify";
import ServiceCategory from "../domain/ServiceCategory";
import ServiceCategoryRepository from "../domain/ServiceCategoryRepository";
import ServiceCategoryDocument from "../../shared/infra/orm/mongoose/schemas/ServiceCategory";
@injectable()
export default class ServiceCategoryMongoRepository
  implements ServiceCategoryRepository {
  async save(serviceCategory: ServiceCategory): Promise<ServiceCategory> {
    const serviceCategoryDocument = new ServiceCategoryDocument(
      serviceCategory
    );
    const savedServiceCategory = await serviceCategoryDocument.save();
    return savedServiceCategory
      .populate("subcategoryId")
      .populate("blobId")
      .execPopulate();
  }

  async getList(): Promise<ServiceCategory[]> {
    return await ServiceCategoryDocument.find({ active: true })
      .sort("name")
      .populate("subcategoryId")
      .populate("blobId")
      .exec();
  }

  async findByName(name: string): Promise<ServiceCategory | null> {
    return await ServiceCategoryDocument.findOne({ name });
  }
}
