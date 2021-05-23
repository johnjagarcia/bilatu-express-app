import Product from "./Product";

export default interface ProductRepository {
  save(product: Product): Promise<Product>;
  getListByHeadquarter(headquarterId: string): Promise<Product[]>;
  getById(_id: string): Promise<Product | null>;
}
