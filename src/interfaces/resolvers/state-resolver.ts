import { inject, injectable } from "inversify";
import { Query, Resolver } from "type-graphql";
import GetStates from "../../modules/state/app/get-states";
import State from "../types/State";

@injectable()
@Resolver((of) => State)
export class StateResolver {
  @inject(GetStates)
  private getStatesUseCase: GetStates;

  @Query(() => [State])
  async getStates() {
    return await this.getStatesUseCase.execute();
  }
}
