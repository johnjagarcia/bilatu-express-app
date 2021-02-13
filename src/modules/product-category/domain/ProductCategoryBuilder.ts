import { ObjectBuilder } from "ts-object-builder";
import ProductCategory from "./ProductCategory";

export default class ProductCategoryBuilder extends ObjectBuilder<ProductCategory> {
  constructor() {
    super(ProductCategory);
  }
}
