import ServiceCategory from "./ServiceCategory";

export default interface ServiceCategoryRepository {
  save(serviceCategory: ServiceCategory): Promise<ServiceCategory>;
  getList(): Promise<ServiceCategory[]>;
  findByName(name: string): Promise<ServiceCategory | null>;
}
