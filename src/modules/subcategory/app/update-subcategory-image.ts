import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import SubcategoryBuilder from "../domain/SubcategoryBuilder";
import SubcategoryRepository from "../domain/SubcategoryRepository";
import SubcategoryWithSameNameAndTypeException from "../domain/SubcategoryNameException";
import CreateBlob from "../../blob/app/create-blob";
import { Stream } from "stream";
import SubcategoryInvalidImageException from "../../shared/domain/InvalidImageException";

@injectable()
export default class UpdateSubcategoryImage {
  constructor(
    @inject(CreateBlob)
    private createBlob: CreateBlob,
    @inject(TYPES.SubcategoryRepository)
    private repository: SubcategoryRepository
  ) {}

  async execute(_id: string, imageData: () => Stream, imageType: string) {
    if (imageData && imageType) {
      const blobId = await this.createBlob.execute(imageData, imageType);
      return await this.repository.updateImage(_id, blobId);
    } else {
      throw new SubcategoryInvalidImageException(
        "Subcategory invalid image file"
      );
    }
  }
}
