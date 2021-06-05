import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import GetCart from "../../modules/cart/app/get-cart";
import Cart from "../types/Cart";
import UpdateCart from "../../modules/cart/app/update-cart";

@injectable()
@Resolver((of) => Cart)
export class CartResolver {
  @inject(UpdateCart)
  private updateCartUseCase: UpdateCart;

  @inject(GetCart)
  private getCartUseCase: GetCart;

  @Mutation(() => [Cart])
  async updateCart(
    @Arg("customer_id") customerId: string,
    @Arg("headquarter_id") headquarterId: string,
    @Arg("product_id") productId: string,
    @Arg("quantity") quantity: number
  ) {
    return await this.updateCartUseCase.execute(
      customerId,
      headquarterId,
      productId,
      quantity
    );
  }

  @Query(() => [Cart])
  async getCart(@Arg("customerid") customerId: string) {
    return await this.getCartUseCase.execute(customerId);
  }
}
