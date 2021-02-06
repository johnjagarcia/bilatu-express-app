import { ObjectBuilder } from "ts-object-builder";
import Category from "./Category";

export default class CategoryBuilder extends ObjectBuilder<Category> {
  constructor() {
    super(Category);
  }
}
