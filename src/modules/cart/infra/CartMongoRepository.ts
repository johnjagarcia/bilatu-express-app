import { injectable } from "inversify";
import Cart from "../domain/Cart";
import CartRepository from "../domain/CartRepository";
import CartDocument from "../../shared/infra/orm/mongoose/schemas/Cart";
import CartItem from "../../cart-item/domain/CartItem";

@injectable()
export default class CartMongoRepository implements CartRepository {
  async update(
    customerId: string,
    headquarterId: string,
    cartItem: CartItem
  ): Promise<Cart[]> {
    await CartDocument.updateOne(
      { customerId, headquarterId },
      {
        $push: { cartItems: cartItem._id },
        customerId,
        headquarterId,
        updatedAt: new Date(),
      },
      { upsert: true, setDefaultsOnInsert: true }
    );

    return await this.getCarts(customerId);
  }

  async getCarts(customerId: string): Promise<Cart[]> {
    const carts = await CartDocument.find({ customerId })
      .populate({
        path: "cartItems",
        populate: {
          path: "productId",
        },
      })
      .populate({
        path: "headquarterId",
      })
      .exec();

    return carts;
  }

  async getExistingItem(
    customerId: string,
    headquarterId: string,
    productId: string
  ): Promise<CartItem | null> {
    const cart: any = await CartDocument.findOne({
      customerId,
      headquarterId,
    })
      .populate({
        path: "cartItems",
        populate: {
          path: "productId",
        },
      })
      .exec();

    if (!cart) return null;

    const item: CartItem = cart.cartItems.find((item: any) => {
      return item.productId._id.toString() === productId;
    });

    return item;
  }

  async deleteById(_id: string): Promise<boolean> {
    const deletedItem = await CartDocument.deleteOne({ _id });
    return deletedItem.deletedCount >= 1;
  }

  async getCartByHeadquarterId(
    customerId: string,
    headquarterId: string
  ): Promise<Cart | null> {
    const carts = await CartDocument.findOne({ customerId, headquarterId })
      .populate({
        path: "cartItems",
      })
      .exec();

    return carts;
  }

  async getCartItemsQuantity(customerId: string): Promise<number> {
    const carts = await CartDocument.find({ customerId }).exec();
    return carts
      .map((cart) => cart.cartItems.length)
      .reduce((a, b) => a + b, 0);
  }
}
