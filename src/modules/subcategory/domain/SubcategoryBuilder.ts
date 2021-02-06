import { ObjectBuilder } from "ts-object-builder";
import Subcategory from "./Subcategory";

export default class SubategoryBuilder extends ObjectBuilder<Subcategory> {
  constructor() {
    super(Subcategory);
  }
}
