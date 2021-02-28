import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import ProductCategoryBuilder from "../domain/ProductCategoryBuilder";
import ProductCategoryRepository from "../domain/ProductCategoryRepository";
import ProductCategoryWithSameNameException from "../domain/ProductCategoryNameException";
import CreateBlob from "../../blob/app/create-blob";
import { Stream } from "stream";

@injectable()
export default class CreateProductCategory {
  constructor(
    @inject(CreateBlob)
    private createBlob: CreateBlob,
    @inject(TYPES.ProductCategoryRepository)
    private repository: ProductCategoryRepository
  ) {}

  async execute(
    name: string,
    subcategoryId: string,
    imageData: () => Stream,
    imageType: string
  ) {
    if (await this.repository.findByName(name)) {
      throw new ProductCategoryWithSameNameException(
        "Product Category with same name already exists"
      );
    }

    let blobId;

    if (imageData && imageType) {
      blobId = await this.createBlob.execute(imageData, imageType);
    }

    const productCategory = new ProductCategoryBuilder()
      .with("name", name)
      .with("subcategoryId", subcategoryId)
      .with("blobId", blobId)
      .build();

    return await this.repository.save(productCategory);
  }
}
