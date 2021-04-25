import { injectable } from "inversify";
import ProductRepository from "../domain/ProductRepository";
import ProductDocument from "../../shared/infra/orm/mongoose/schemas/Product";
import ProductCategoryDocument from "../../shared/infra/orm/mongoose/schemas/ProductCategory";

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

  async getList(criteria: string, subcategoryId: string): Promise<Product[]> {
    if (criteria) {
      console.log(`criteria`, criteria);
      return await ProductDocument.find({
        title: { $regex: ".*" + criteria + ".*", $options: "i" },
        /* $or: [{ title: { $regex: ".*" + criteria + ".*", $options: "i" } }], */
        active: true,
      })
        .populate("headquarterId")
        .populate("productCategoryId")
        .exec();
    }

    const productCategories = await ProductCategoryDocument.find({
      subcategoryId,
    }).exec();

    return await ProductDocument.find({
      productCategoryId: { $in: productCategories.map((pc) => pc._id) },
      active: true,
    })
      .populate("productCategoryId")
      .populate("headquarterId")
      .exec();
  }

  async getListByHeadquarter(headquarterId: string): Promise<Product[]> {
    return await ProductDocument.find({
      headquarterId,
    })
      .populate("productCategoryId")
      .sort("title")
      .exec();
  }
}
