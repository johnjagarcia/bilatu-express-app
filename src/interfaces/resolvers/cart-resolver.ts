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
interface CartPayload {
  count: number;
  customerId: string;
}

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

  @Mutation(() => Boolean)
  async updateCart(
    @PubSub(topic) publish: Publisher<CartPayload>,
    @Arg("customer_id") customerId: string,
    @Arg("product_id") productId: string,
    @Arg("quantity") quantity: number
  ) {
    const carts = await this.updateCartUseCase.execute(
      customerId,
      productId,
      quantity
    );

    await publish({ count: carts.length, customerId });

    return true;
  }

  @Query(() => [Cart])
  async getCart(@Arg("customerid") customerId: string) {
    return await this.getCartUseCase.execute(customerId);
  }

  @Query(() => Number)
  async cartItemsCount(
    @PubSub(topic) publish: Publisher<CartPayload>,
    @Arg("customerid") customerId: string
  ) {
    const result = await this.getCartItemsQuantityUseCase.execute(customerId);

    const count = await this.getCartItemsQuantityUseCase.execute(customerId);
    await publish({ count, customerId });

    return result;
  }

  @Mutation(() => Boolean)
  async deleteCart(
    @PubSub(topic) publish: Publisher<CartPayload>,
    @Arg("id") id: string
  ) {
    const result = await this.deleteCartUseCase.execute(id);

    const customerId = "6069e0c5325f750979ae2e25";

    const count = await this.getCartItemsQuantityUseCase.execute(customerId);
    await publish({ count, customerId });

    return result;
  }

  @Mutation(() => Boolean)
  async deleteCartItem(
    @PubSub(topic) publish: Publisher<CartPayload>,
    @Arg("customer_id") customerId: string,
    @Arg("cart_item_id") cartItemId: string
  ) {
    const result = await this.deleteCartItemUseCase.execute(
      customerId,
      cartItemId
    );

    const count = await this.getCartItemsQuantityUseCase.execute(customerId);
    await publish({ count, customerId });

    return result;
  }

  @Subscription({
    topics: topic,
    defaultValue: 0,
    filter: ({ payload, args }) => {
      console.log(`payload`, payload);
      console.log(`args`, args);
      return args.customerId === payload.customerId;
    },
  })
  newCartItemQuantity(
    @Root() { count }: CartPayload,
    @Arg("customerId") customerId: string
  ): number {
    return count;
  }
}
