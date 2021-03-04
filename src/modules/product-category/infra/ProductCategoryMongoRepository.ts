import { injectable } from "inversify";
import ProductCategory from "../domain/ProductCategory";
import ProductCategoryRepository from "../domain/ProductCategoryRepository";
import ProductCategoryDocument from "../../shared/infra/orm/mongoose/schemas/ProductCategory";
@injectable()
export default class ProductCategoryMongoRepository
  implements ProductCategoryRepository {
  async save(productCategory: ProductCategory): Promise<ProductCategory> {
    const productCategoryDocument = new ProductCategoryDocument(
      productCategory
    );
    const savedProductCategory = await productCategoryDocument.save();
    return savedProductCategory
      .populate("subcategoryId")
      .populate("blobId")
      .execPopulate();
  }

  async getList(): Promise<ProductCategory[]> {
    return await ProductCategoryDocument.find({ active: true })
      .sort("name")
      .populate("subcategoryId")
      .populate("blobId")
      .exec();
  }

  async findByName(name: string): Promise<ProductCategory | null> {
    return await ProductCategoryDocument.findOne({ name });
  }
}
