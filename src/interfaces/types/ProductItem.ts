import { Field, ID, ObjectType } from "type-graphql";
import Product from "./Product";

@ObjectType()
export default class ProductItem {
  @Field(() => ID)
  _id: string;

  @Field({ name: "product" })
  productId: Product;

  @Field()
  quantity: number;

  @Field()
  price: number;

  @Field()
  total: number;

  @Field()
  observations: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
