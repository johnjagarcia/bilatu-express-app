import { Field, ID, ObjectType } from "type-graphql";
import Product from "./Product";

@ObjectType()
export default class BusinessProductList {
  @Field()
  name: string;

  @Field((type) => [Product])
  data: Product[];
}
