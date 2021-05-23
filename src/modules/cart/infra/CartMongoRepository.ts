import { injectable } from "inversify";
import Cart from "../domain/Cart";
import CartRepository from "../domain/CartRepository";
import CartDocument from "../../shared/infra/orm/mongoose/schemas/Cart";
import ProductItem from "../../product-item/domain/ProductItem";

@injectable()
export default class CartMongoRepository implements CartRepository {
  async update(customerId: string, productItem: ProductItem): Promise<Cart> {
    const cart = await this.getOrCreate(customerId);

    await CartDocument.updateOne(
      { _id: cart._id },
      { $push: { productItems: productItem._id }, updatedAt: new Date() }
    );

    return await this.getOrCreate(customerId);
  }

  async getOrCreate(customerId: string): Promise<Cart> {
    const cart = await CartDocument.findOne({ customerId })
      .populate({
        path: "productItems",
        populate: {
          path: "productId",
        },
      })
      .exec();

    if (!cart) {
      const savedCart = await new CartDocument({ customerId }).save();
      return savedCart
        .populate({
          path: "productItems",
          populate: {
            path: "productId",
          },
        })
        .execPopulate();
    }

    return cart;
  }

  async getExistingItem(
    customerId: string,
    productId: string
  ): Promise<ProductItem | null> {
    const cart: any = await this.getOrCreate(customerId);

    const item: ProductItem = cart.productItems.find((item: any) => {
      return item.productId._id.toString() === productId;
    });

    return item;
  }
}
