import { ObjectBuilder } from "ts-object-builder";
import City from "./City";

export default class CityBuilder extends ObjectBuilder<City> {
  constructor() {
    super(City);
  }
}
