import { inject, injectable } from "inversify";
import {
  Arg,
  Mutation,
  Publisher,
  PubSub,
  Query,
  Resolver,
  Root,
  Subscription,
} from "type-graphql";
import GetCart from "../../modules/cart/app/get-cart";
import Cart from "../types/Cart";
import UpdateCart from "../../modules/cart/app/update-cart";
import DeleteCart from "../../modules/cart/app/delete-cart";
import DeleteCartItem from "../../modules/cart/app/delete-cart-item";
import GetCartItemsQuantity from "../../modules/cart/app/get-cart-items-quantity";

const topic = "CART_ITEMS_QUANTITY";
@injectable()
@Resolver((of) => Cart)
export class CartResolver {
  @inject(UpdateCart)
  private updateCartUseCase: UpdateCart;

  @inject(GetCart)
  private getCartUseCase: GetCart;

  @inject(DeleteCart)
  private deleteCartUseCase: DeleteCart;

  @inject(DeleteCartItem)
  private deleteCartItemUseCase: DeleteCartItem;

  @inject(GetCartItemsQuantity)
  private getCartItemsQuantityUseCase: GetCartItemsQuantity;

  @Mutation(() => [Cart])
  async updateCart(
    @Arg("customer_id") customerId: string,
    @Arg("product_id") productId: string,
    @Arg("quantity") quantity: number
  ) {
    return await this.updateCartUseCase.execute(
      customerId,
      productId,
      quantity
    );
  }

  @Query(() => [Cart])
  async getCart(@Arg("customerid") customerId: string) {
    return await this.getCartUseCase.execute(customerId);
  }

  @Query(() => Number)
  async cartItemsCount(@Arg("customerid") customerId: string) {
    return await this.getCartItemsQuantityUseCase.execute(customerId);
  }

  @Mutation(() => Boolean)
  async deleteCart(@Arg("id") id: string) {
    return await this.deleteCartUseCase.execute(id);
  }

  @Mutation(() => Boolean)
  async deleteCartItem(
    @PubSub(topic) publish: Publisher<number>,
    @Arg("customer_id") customerId: string,
    @Arg("cart_item_id") cartItemId: string
  ) {
    const result = await this.deleteCartItemUseCase.execute(
      customerId,
      cartItemId
    );

    const quantity = await this.getCartItemsQuantityUseCase.execute(customerId);
    await publish(quantity);

    return result;
  }
}
