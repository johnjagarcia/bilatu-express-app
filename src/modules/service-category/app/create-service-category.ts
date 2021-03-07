import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import ServiceCategoryBuilder from "../domain/ServiceCategoryBuilder";
import ServiceCategoryRepository from "../domain/ServiceCategoryRepository";
import ServiceCategoryWithSameNameException from "../domain/ServiceCategoryNameException";
import CreateBlob from "../../blob/app/create-blob";
import { Stream } from "stream";

@injectable()
export default class CreateServiceCategory {
  constructor(
    @inject(CreateBlob)
    private createBlob: CreateBlob,
    @inject(TYPES.ServiceCategoryRepository)
    private repository: ServiceCategoryRepository
  ) {}

  async execute(
    name: string,
    subcategoryId: string,
    imageData: () => Stream,
    imageType: string
  ) {
    if (await this.repository.findByName(name)) {
      throw new ServiceCategoryWithSameNameException(
        "Service Category with same name already exists"
      );
    }

    let blobId;

    if (imageData && imageType) {
      blobId = await this.createBlob.execute(imageData, imageType);
    }

    const serviceCategory = new ServiceCategoryBuilder()
      .with("name", name)
      .with("subcategoryId", subcategoryId)
      .with("blobId", blobId)
      .build();

    return await this.repository.save(serviceCategory);
  }
}
