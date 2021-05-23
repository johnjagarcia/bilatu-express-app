import { injectable } from "inversify";
import ProductItemRepository from "../domain/ProductItemRepository";
import ProductItemDocument from "../../shared/infra/orm/mongoose/schemas/ProductItem";

import ProductItem from "../domain/ProductItem";

@injectable()
export default class ProductItemMongoRepository
  implements ProductItemRepository
{
  async save(productItem: ProductItem): Promise<ProductItem> {
    const productDocument = new ProductItemDocument(productItem);
    return await productDocument.save();
  }

  async update(
    _id: string,
    quantity: number,
    productPrice: number
  ): Promise<ProductItem | null> {
    await ProductItemDocument.updateOne(
      { _id },
      {
        quantity,
        total: productPrice * quantity,
        updatedAt: new Date(),
      }
    ).exec();

    return this.getById(_id);
  }

  async getById(_id: string): Promise<ProductItem | null> {
    return await ProductItemDocument.findById(_id);
  }

  async deleteById(_id: string): Promise<boolean> {
    const deletedItem = await ProductItemDocument.deleteOne({ _id });
    return deletedItem.deletedCount >= 1;
  }
}
