import ProductItem from "./ProductItem";

export default interface ProductItemRepository {
  save(productItem: ProductItem): Promise<ProductItem>;
  update(
    _id: string,
    quantity: number,
    productPrice: number
  ): Promise<ProductItem | null>;
  getById(_id: string): Promise<ProductItem | null>;
  deleteById(_id: string): Promise<boolean>;
}
