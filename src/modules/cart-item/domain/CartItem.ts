export default class CartItem {
  _id?: string;
  productId: string;
  quantity: number;
  price: number;
  total: number;
  observations?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
