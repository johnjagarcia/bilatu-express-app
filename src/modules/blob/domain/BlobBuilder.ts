import { ObjectBuilder } from "ts-object-builder";
import Blob from "./Blob";

export default class BlobBuilder extends ObjectBuilder<Blob> {
  constructor() {
    super(Blob);
  }
}
