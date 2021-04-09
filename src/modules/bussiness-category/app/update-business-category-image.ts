import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import CreateBlob from "../../blob/app/create-blob";
import { Stream } from "stream";
import InvalidImageException from "../../shared/domain/InvalidImageException";
import BusinessCategoryRepository from "../domain/BusinessCategoryRepository";

@injectable()
export default class UpdateBusinessCategoryImage {
  constructor(
    @inject(CreateBlob)
    private createBlob: CreateBlob,
    @inject(TYPES.BusinessCategoryRepository)
    private repository: BusinessCategoryRepository
  ) {}

  async execute(_id: string, imageData: () => Stream, imageType: string) {
    if (imageData && imageType) {
      const blobId = await this.createBlob.execute(imageData, imageType);
      return await this.repository.updateImage(_id, blobId);
    } else {
      throw new InvalidImageException("Business Category invalid image file");
    }
  }
}
