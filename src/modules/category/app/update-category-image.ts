import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import CreateBlob from "../../blob/app/create-blob";
import { Stream } from "stream";
import InvalidImageException from "../../shared/domain/InvalidImageException";
import CategoryRepository from "../domain/CategoryRepository";

@injectable()
export default class UpdateCategoryImage {
  constructor(
    @inject(CreateBlob)
    private createBlob: CreateBlob,
    @inject(TYPES.CategoryRepository)
    private repository: CategoryRepository
  ) {}

  async execute(_id: string, imageData: () => Stream, imageType: string) {
    if (imageData && imageType) {
      const blobId = await this.createBlob.execute(imageData, imageType);
      return await this.repository.updateImage(_id, blobId);
    } else {
      throw new InvalidImageException("Category invalid image file");
    }
  }
}
