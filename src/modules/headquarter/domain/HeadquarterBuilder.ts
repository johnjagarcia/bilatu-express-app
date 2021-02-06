import { ObjectBuilder } from "ts-object-builder";
import Headquarter from "./Headquarter";

export default class HeadquarterBuilder extends ObjectBuilder<Headquarter> {
  constructor() {
    super(Headquarter);
  }
}
