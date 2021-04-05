import RoadType from "./RoadType";

export default interface RoadTypeRepository {
  getList(): Promise<RoadType[]>;
}
