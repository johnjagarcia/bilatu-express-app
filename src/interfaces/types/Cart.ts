import { Field, ID, ObjectType } from "type-graphql";
import ProductItem from "./ProductItem";

@ObjectType()
export default class Cart {
  @Field(() => ID)
  _id: string;

  @Field(() => [ProductItem])
  productItems: ProductItem[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
