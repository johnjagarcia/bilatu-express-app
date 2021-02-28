import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import BlobRepository from "../domain/BlobRepository";

@injectable()
export default class GetBlob {
  constructor(
    @inject(TYPES.BlobRepository) private repository: BlobRepository
  ) {}

  async execute(_id: string) {
    return await this.repository.getBlob(_id);
  }
}
