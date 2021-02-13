import { Field, ID, ObjectType } from "type-graphql";
import Subcategory from "./Subcategory";

@ObjectType()
export default class ProductCategory {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field({ name: "subcategory" })
  subcategoryId: Subcategory;

  @Field()
  active: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
