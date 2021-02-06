import { ObjectBuilder } from "ts-object-builder";
import Role from "./Role";

export default class RoleBuilder extends ObjectBuilder<Role> {
  constructor() {
    super(Role);
  }
}
