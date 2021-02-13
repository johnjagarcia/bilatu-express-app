import { ObjectBuilder } from "ts-object-builder";
import Product from "./Product";

export default class ProductBuilder extends ObjectBuilder<Product> {
  constructor() {
    super(Product);
  }
}
