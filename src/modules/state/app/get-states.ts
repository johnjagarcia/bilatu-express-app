import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import StateRepository from "../domain/StateRepository";

@injectable()
export default class GetStates {
  constructor(
    @inject(TYPES.StateRepository) private repository: StateRepository
  ) {}

  async execute() {
    return await this.repository.getList();
  }
}
