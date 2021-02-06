import { ObjectBuilder } from "ts-object-builder";
import User from "./User";

export default class UserBuilder extends ObjectBuilder<User> {
  constructor() {
    super(User);
  }
}
