import { injectable } from "inversify";
import Blob from "../domain/Blob";
import BlobRepository from "../domain/BlobRepository";
import BlobDocument from "../../shared/infra/orm/mongoose/schemas/Blob";

@injectable()
export default class BlobMongoRepository implements BlobRepository {
  async saveAndReturnId(blob: Blob): Promise<string> {
    const blobDocument = new BlobDocument(blob);
    const savedBlob = await blobDocument.save();
    return savedBlob._id;
  }

  async getBlob(_id: string): Promise<Blob | null> {
    return await BlobDocument.findById(_id);
  }
}
