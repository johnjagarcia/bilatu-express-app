import { ObjectBuilder } from "ts-object-builder";
import Customer from "./Customer";

export default class CustomerBuilder extends ObjectBuilder<Customer> {
  constructor() {
    super(Customer);
  }
}
