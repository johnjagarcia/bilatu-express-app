import { ObjectBuilder } from "ts-object-builder";
import ServiceCategory from "./ServiceCategory";

export default class ServiceCategoryBuilder extends ObjectBuilder<ServiceCategory> {
  constructor() {
    super(ServiceCategory);
  }
}
