import City from "./City";

export default interface CityRepository {
  save(city: City): Promise<City>;
  getList(stateId: string): Promise<City[]>;
  findByCode(code: string): Promise<City | null>;
}
