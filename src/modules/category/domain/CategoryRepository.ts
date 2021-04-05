import Category from "./Category";

export default interface CategoryRepository {
  save(category: Category): Promise<Category>;
  getList(type: string, onlyPopular: boolean | undefined): Promise<Category[]>;
  findByNameAndType(name: string, type: string): Promise<Category | null>;
  updateImage(_id: string, blobId: string): Promise<boolean>;
}
