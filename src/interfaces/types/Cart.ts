import { Field, ID, ObjectType } from "type-graphql";
import CartItem from "./CartItem";
import Headquarter from "./Headquarter";

@ObjectType()
export default class Cart {
  @Field(() => ID)
  _id: string;

  @Field({ name: "headquarter" })
  headquarterId: Headquarter;

  @Field(() => [CartItem])
  cartItems: CartItem[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
