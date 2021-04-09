import { ObjectBuilder } from "ts-object-builder";
import BusinessCategoryGroup from "./BusinessCategoryGroup";

export default class BusinessCategoryGroupBuilder extends ObjectBuilder<BusinessCategoryGroup> {
  constructor() {
    super(BusinessCategoryGroup);
  }
}
