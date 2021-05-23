import Cart from "./Cart";
import ProductItem from "../../product-item/domain/ProductItem";

export default interface CartRepository {
  update(customerId: string, productItem: ProductItem): Promise<Cart>;
  getOrCreate(customerId: string): Promise<Cart>;
  getExistingItem(
    customerId: string,
    productId: string
  ): Promise<ProductItem | null>;
}
