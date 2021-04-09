import BusinessCategoryGroup from "./BusinessCategoryGroup";

export default interface BusinessCategoryGroupRepository {
  save(categoryGroup: BusinessCategoryGroup): Promise<BusinessCategoryGroup>;
  getList(): Promise<BusinessCategoryGroup[]>;
  findByName(name: string): Promise<BusinessCategoryGroup | null>;
  updateImage(_id: string, blobId: string): Promise<boolean>;
}
