import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import BusinessCategoryGroupRepository from "../domain/BusinessCategoryGroupRepository";
import CreateBlob from "../../blob/app/create-blob";
import { Stream } from "stream";
import InvalidImageException from "../../shared/domain/InvalidImageException";

@injectable()
export default class UpdateBusinessCategoryGroupImage {
  constructor(
    @inject(CreateBlob)
    private createBlob: CreateBlob,
    @inject(TYPES.SubcategoryRepository)
    private repository: BusinessCategoryGroupRepository
  ) {}

  async execute(_id: string, imageData: () => Stream, imageType: string) {
    if (imageData && imageType) {
      const blobId = await this.createBlob.execute(imageData, imageType);
      return await this.repository.updateImage(_id, blobId);
    } else {
      throw new InvalidImageException("Invalid image file");
    }
  }
}
