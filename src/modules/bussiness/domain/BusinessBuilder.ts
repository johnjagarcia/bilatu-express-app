import { ObjectBuilder } from "ts-object-builder";
import Business from "./Business";

export default class BusinessBuilder extends ObjectBuilder<Business> {
  constructor() {
    super(Business);
  }
}
