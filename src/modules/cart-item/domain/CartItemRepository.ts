import CartItem from "./CartItem";

export default interface CartItemRepository {
  save(cartItem: CartItem): Promise<CartItem>;
  update(
    _id: string,
    quantity: number,
    productPrice: number
  ): Promise<CartItem | null>;
  getById(_id: string): Promise<CartItem | null>;
  deleteById(_id: string): Promise<boolean>;
}
