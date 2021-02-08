import Product from "./Product";

export default interface ProductRepository {
  save(product: Product): Promise<Product>;
  getList(headquarterId: string): Promise<Product[]>;
}
