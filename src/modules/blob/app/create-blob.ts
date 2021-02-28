import { inject, injectable } from "inversify";
import { Stream } from "stream";
import { TYPES } from "../../../constants/types";
import BlobBuilder from "../domain/BlobBuilder";
import BlobRepository from "../domain/BlobRepository";

@injectable()
export default class CreateBlob {
  constructor(
    @inject(TYPES.BlobRepository) private repository: BlobRepository
  ) {}

  async execute(stream: () => Stream, type: string) {
    const data = await this.streamToBuffer(stream());

    const role = new BlobBuilder()
      .with("data", data)
      .with("type", type)
      .build();

    return await this.repository.saveAndReturnId(role);
  }

  streamToBuffer(stream: Stream): Promise<string> {
    const chunks: Uint8Array[] = [];
    return new Promise((resolve, reject) => {
      stream.on("data", (chunk) => chunks.push(chunk));
      stream.on("error", (err) => reject(err));
      stream.on("end", () => resolve(Buffer.concat(chunks).toString("base64")));
    });
  }
}
