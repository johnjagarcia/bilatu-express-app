import { injectable } from "inversify";
import ProductRepository from "../domain/ProductRepository";
import ProductDocument from "../../shared/infra/orm/mongoose/schemas/Product";
import ProductCategoryDocument from "../../shared/infra/orm/mongoose/schemas/ProductCategory";
import HeadquarterDocument from "../../shared/infra/orm/mongoose/schemas/Headquarter";

import Product from "../domain/Product";
import { Types } from "mongoose";

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

  async getListByHeadquarter(headquarterId: string): Promise<Product[]> {
    return await ProductDocument.find({
      headquarterId,
    })
      .populate("productCategoryId")
      .sort("title")
      .exec();
  }

  async getById(_id: string): Promise<Product | null> {
    return await ProductDocument.findById(_id);
  }
}
