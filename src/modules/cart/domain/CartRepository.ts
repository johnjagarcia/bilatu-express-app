import Cart from "./Cart";
import CartItem from "../../cart-item/domain/CartItem";

export default interface CartRepository {
  update(
    customerId: string,
    headquarterId: string,
    cartItem: CartItem
  ): Promise<Cart[]>;

  getCarts(customerId: string): Promise<Cart[]>;

  getExistingItem(
    customerId: string,
    headquarterId: string,
    productId: string
  ): Promise<CartItem | null>;

  deleteById(id: string): Promise<boolean>;

  getCartByHeadquarterId(
    customerId: string,
    headquarterId: string
  ): Promise<Cart | null>;

  getCartItemsQuantity(customerId: string): Promise<number>;
}
