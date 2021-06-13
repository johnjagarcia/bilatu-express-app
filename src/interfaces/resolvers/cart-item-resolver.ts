import { inject, injectable } from "inversify";
import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import UpdateCartItem from "../../modules/cart-item/app/update-cart-item";
import CartItem from "../types/CartItem";

@injectable()
@Resolver((of) => CartItem)
export class CartItemResolver {
  @inject(UpdateCartItem)
  private updateCartItemUseCase: UpdateCartItem;

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
}
