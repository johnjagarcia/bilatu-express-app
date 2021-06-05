import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import DeleteCartItem from "../../modules/cart-item/app/delete-cart-item";
import UpdateCartItem from "../../modules/cart-item/app/update-cart-item";
import CartItem from "../types/CartItem";

@injectable()
@Resolver((of) => CartItem)
export class CartItemResolver {
  @inject(UpdateCartItem)
  private updateCartItemUseCase: UpdateCartItem;

  @inject(DeleteCartItem)
  private deleteItemUseCase: DeleteCartItem;

  @Mutation(() => CartItem)
  async updateCartItem(
    @Arg("cart_item_id") cartItemId: string,
    @Arg("product_id") productId: string,
    @Arg("quantity") quantity: number
  ) {
    return await this.updateCartItemUseCase.execute(
      productId,
      quantity,
      cartItemId
    );
  }

  @Mutation(() => Boolean)
  async deleteCartItem(@Arg("cart_item_id") cartItemId: string) {
    return await this.deleteItemUseCase.execute(cartItemId);
  }
}
