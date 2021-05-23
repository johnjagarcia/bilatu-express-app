export default class ProductItem {
  _id?: string;
  productId: string;
  quantity: number;
  price: number;
  total: number;
  observations?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
