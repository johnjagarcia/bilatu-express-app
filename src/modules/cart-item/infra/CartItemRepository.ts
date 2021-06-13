import { injectable } from "inversify";
import CartItemRepository from "../domain/CartItemRepository";
import CartItemDocument from "../../shared/infra/orm/mongoose/schemas/CartItem";

import CartItem from "../domain/CartItem";

@injectable()
export default class CartItemMongoRepository implements CartItemRepository {
  async save(cartItem: CartItem): Promise<CartItem> {
    const productDocument = new CartItemDocument(cartItem);
    return await productDocument.save();
  }

  async update(
    _id: string,
    quantity: number,
    productPrice: number
  ): Promise<CartItem | null> {
    await CartItemDocument.updateOne(
      { _id },
      {
        quantity,
        total: productPrice * quantity,
        updatedAt: new Date(),
      }
    ).exec();

    return this.getById(_id);
  }

  async getById(_id: string): Promise<CartItem | null> {
    return await CartItemDocument.findById(_id)
      .populate({
        path: "productId",
      })
      .exec();
  }

  async deleteById(_id: string): Promise<boolean> {
    const deletedItem = await CartItemDocument.deleteOne({ _id });
    return deletedItem.deletedCount >= 1;
  }
}
