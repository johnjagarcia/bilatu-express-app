import { injectable } from "inversify";
import HeadquarterRepository from "../domain/HeadquarterRepository";
import HeadquarterDocument from "../../shared/infra/orm/mongoose/schemas/Headquarter";
import Headquarter from "../domain/Headquarter";

@injectable()
export default class HeadquarterMongoRepository
  implements HeadquarterRepository {
  async save(headquarter: Headquarter): Promise<Headquarter> {
    const headquarterDocument = new HeadquarterDocument(headquarter);
    if (headquarter.main) {
      await HeadquarterDocument.updateMany(
        { businessId: headquarterDocument.businessId },
        { main: false }
      );
    }
    return headquarterDocument.save();
  }

  async getList(businessId: string): Promise<Headquarter[]> {
    return await HeadquarterDocument.find({ businessId })
      .populate("cityId")
      .populate("coverageCities")
      .exec();
  }
}
