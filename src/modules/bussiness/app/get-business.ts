import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import BusinessRepository from "../domain/BusinessRepository";

@injectable()
export default class GetBusiness {
  constructor(
    @inject(TYPES.BusinessRepository)
    private repository: BusinessRepository
  ) {}

  async execute(userId: string) {
    return this.repository.getList(userId);
  }
}
