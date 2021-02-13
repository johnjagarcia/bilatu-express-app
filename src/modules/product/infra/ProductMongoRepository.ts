import { injectable } from "inversify";
import ProductRepository from "../domain/ProductRepository";
import ProductDocument from "../../shared/infra/orm/mongoose/schemas/Product";
import Product from "../domain/Product";

@injectable()
export default class ProductMongoRepository implements ProductRepository {
  async save(product: Product): Promise<Product> {
    const productDocument = new ProductDocument(product);
    const savedProduct = await productDocument.save();
    return savedProduct
      .populate("productCategoryId")
      .populate("headquarterId")
      .execPopulate();
  }

  async getList(headquarterId: string): Promise<Product[]> {
    return await ProductDocument.find({ headquarterId })
      .populate("headquarterId")
      .populate("productCategoryId")
      .exec();
  }
}
