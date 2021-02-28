import Blob from "./Blob";

export default interface BlobRepository {
  saveAndReturnId(blob: Blob): Promise<string>;
  getBlob(_id: string): Promise<Blob | null>;
}
