import { inject, injectable } from "inversify";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import CreateCity from "../../modules/city/app/create-city";
import GetCities from "../../modules/city/app/get-cities";
import City from "../types/City";

@injectable()
@Resolver((of) => City)
export class CityResolver {
  @inject(CreateCity)
  private createCityUseCase: CreateCity;

  @inject(GetCities)
  private getCitiesUseCase: GetCities;

  @Mutation(() => City)
  async createCity(
    @Arg("code") code: string,
    @Arg("name") name: string,
    @Arg("stateid") stateId: string
  ) {
    return await this.createCityUseCase.execute(code, name, stateId);
  }

  @Query(() => [City])
  async getCities(@Arg("stateid") stateId: string) {
    return await this.getCitiesUseCase.execute(stateId);
  }
}
