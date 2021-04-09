import BusinessCategory from "./BusinessCategory";

export default interface BusinessCategoryRepository {
  save(businessCategory: BusinessCategory): Promise<BusinessCategory>;
  getList(): Promise<BusinessCategory[]>;
  findByName(name: string): Promise<BusinessCategory | null>;
  updateImage(_id: string, blobId: string): Promise<boolean>;
}
