import { inject, injectable } from "inversify";
import { Query, Resolver } from "type-graphql";
import GetRoadTypes from "../../modules/road-types/app/get-road-types";
import RoadType from "../types/RoadType";

@injectable()
@Resolver((of) => RoadType)
export class RoadTypeResolver {
  @inject(GetRoadTypes)
  private getRoadTypesUseCase: GetRoadTypes;

  @Query(() => [RoadType])
  async getRoadTypes() {
    return await this.getRoadTypesUseCase.execute();
  }
}
