import Subcategory from "./Subcategory";

export default interface SubcategoryRepository {
  save(subcategory: Subcategory): Promise<Subcategory>;
  getList(type: string): Promise<Subcategory[]>;
  findByNameAndType(name: string, type: string): Promise<Subcategory | null>;
  updateImage(_id: string, blobId: string): Promise<boolean>;
}
