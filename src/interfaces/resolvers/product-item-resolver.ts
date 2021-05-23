import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import DeleteProductItem from "../../modules/product-item/app/delete-product-item";
import UpdateProductItem from "../../modules/product-item/app/update-product-item";
import ProductItem from "../types/ProductItem";

@injectable()
@Resolver((of) => ProductItem)
export class ProductItemResolver {
  @inject(UpdateProductItem)
  private updateProductItemUseCase: UpdateProductItem;

  @inject(DeleteProductItem)
  private deleteItemUseCase: DeleteProductItem;

  @Mutation(() => ProductItem)
  async updateProductItem(
    @Arg("product_item_id") productItemId: string,
    @Arg("product_id") productId: string,
    @Arg("quantity") quantity: number
  ) {
    return await this.updateProductItemUseCase.execute(
      productId,
      quantity,
      productItemId
    );
  }

  @Mutation(() => Boolean)
  async deleteProductItem(@Arg("product_item_id") productItemId: string) {
    return await this.deleteItemUseCase.execute(productItemId);
  }
}
