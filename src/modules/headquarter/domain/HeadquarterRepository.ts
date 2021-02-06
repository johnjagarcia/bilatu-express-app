import Headquarter from "./Headquarter";

export default interface HeadquarterRepository {
  save(headquarter: Headquarter): Promise<Headquarter>;
  getList(businessId: string): Promise<Headquarter[]>;
}
