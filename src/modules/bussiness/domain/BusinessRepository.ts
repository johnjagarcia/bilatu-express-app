import Business from "./Business";

export default interface BusinessRepository {
  save(businessCategory: Business): Promise<Business>;
  getList(userId: string): Promise<Business[]>;
  findByNit(nit: string): Promise<Business | null>;
  associateProductCategories(
    businessId: string,
    categories: string[]
  ): Promise<number>;
}
