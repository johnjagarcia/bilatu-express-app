import ProductCategory from "./ProductCategory";

export default interface ProductCategoryRepository {
  save(productCategory: ProductCategory): Promise<ProductCategory>;
  getList(): Promise<ProductCategory[]>;
  findByName(name: string): Promise<ProductCategory | null>;
}
