import { injectable } from "inversify";
import City from "../domain/City";
import CityRepository from "../domain/CityRepository";
import CityDocument from "../../shared/infra/orm/mongoose/schemas/City";

@injectable()
export default class CityMongoRepository implements CityRepository {
  async save(city: City): Promise<City> {
    const cityDocument = new CityDocument(city);
    return await cityDocument.save();
  }

  async getList(stateId: string): Promise<City[]> {
    return await CityDocument.find({ stateId, active: true });
  }

  async findByCode(code: string): Promise<City | null> {
    return await CityDocument.findOne({ code });
  }
}
