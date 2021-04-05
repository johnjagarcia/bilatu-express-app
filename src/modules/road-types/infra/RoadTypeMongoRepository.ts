import { injectable } from "inversify";
import RoadType from "../domain/RoadType";
import RoadTypeRepository from "../domain/RoadTypeRepository";
import RoadTypeDocument from "../../shared/infra/orm/mongoose/schemas/RoadType";

@injectable()
export default class RoadTypeMongoRepository implements RoadTypeRepository {
  async getList(): Promise<RoadType[]> {
    return await RoadTypeDocument.find({ active: true });
  }
}
