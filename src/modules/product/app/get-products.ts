import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import ProductRepository from "../domain/ProductRepository";

@injectable()
export default class GetProducts {
  constructor(
    @inject(TYPES.ProductRepository)
    private repository: ProductRepository
  ) {}

  async execute(headquarterID: string) {
    return this.repository.getList(headquarterID);
  }
}
