import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import GetCart from "../../modules/cart/app/get-cart";
import Cart from "../types/Cart";
import UpdateCart from "../../modules/cart/app/update-cart";
import DeleteCart from "../../modules/cart/app/delete-cart";
import DeleteCartItem from "../../modules/cart/app/delete-cart-item";

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

  @Mutation(() => Boolean)
  async deleteCart(@Arg("id") id: string) {
    return await this.deleteCartUseCase.execute(id);
  }

  @Mutation(() => Boolean)
  async deleteCartItem(
    @Arg("customer_id") customerId: string,
    @Arg("cart_item_id") cartItemId: string
  ) {
    return await this.deleteCartItemUseCase.execute(customerId, cartItemId);
  }
}
