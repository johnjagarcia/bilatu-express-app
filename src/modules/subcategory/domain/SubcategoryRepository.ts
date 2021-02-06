import Subcategory from "./Subcategory";

export default interface SubcategoryRepository {
  save(subcategory: Subcategory): Promise<Subcategory>;
  getList(): Promise<Subcategory[]>;
  findByName(name: string): Promise<Subcategory | null>;
}
