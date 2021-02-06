import { ObjectBuilder } from "ts-object-builder";
import BusinessCategory from "./BusinessCategory";

export default class BusinessCategoryBuilder extends ObjectBuilder<BusinessCategory> {
  constructor() {
    super(BusinessCategory);
  }
}
