import Category from "./Category";

export default interface CategoryRepository {
  save(category: Category): Promise<Category>;
  getList(): Promise<Category[]>;
  findByName(name: string): Promise<Category | null>;
  updateImage(_id: string, blobId: string): Promise<boolean>;
}
