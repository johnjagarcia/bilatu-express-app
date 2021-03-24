import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import ProductRepository from "../domain/ProductRepository";

@injectable()
export default class GetProducts {
  constructor(
    @inject(TYPES.ProductRepository)
    private repository: ProductRepository
  ) {}

  async execute(criteria?: string, subcategoryId?: string) {
    const data = await this.repository.getList(criteria, subcategoryId);

    const group = data.reduce((r, a) => {
      r[a.headquarterId.name] = r[a.headquarterId.name] || [];
      r[a.headquarterId.name].push(a);
      return r;
    }, {});

    let list: any[] = [];
    Object.entries(group).forEach(([key, value]) => {
      list.push({
        name: key,
        data: value,
      });
    });

    return list;
  }
}
