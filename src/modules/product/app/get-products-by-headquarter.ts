import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import ProductRepository from "../domain/ProductRepository";

@injectable()
export default class GetProductsByHeadquarter {
  constructor(
    @inject(TYPES.ProductRepository)
    private repository: ProductRepository
  ) {}

  async execute(headquarterId: string) {
    return await this.repository.getListByHeadquarter(headquarterId);
  }
}
