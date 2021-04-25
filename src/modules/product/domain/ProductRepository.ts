import Product from "./Product";

export default interface ProductRepository {
  save(product: Product): Promise<Product>;
  getList(criteria?: string, subcategoryId?: string): Promise<any[]>;
  getListByHeadquarter(headquarterId: string): Promise<Product[]>;
}
