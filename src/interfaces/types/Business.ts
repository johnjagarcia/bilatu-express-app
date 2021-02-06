import { Field, ID, ObjectType } from "type-graphql";
import BusinessCategory from "./BusinessCategory";
import City from "./City";
import Subcategory from "./Subcategory";
import User from "./User";

@ObjectType()
export default class Business {
  @Field(() => ID)
  _id: string;

  @Field()
  code: string;

  @Field()
  type: string;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field({ name: "city" })
  cityId: City;

  @Field({ name: "category" })
  categoryId: BusinessCategory;

  @Field()
  cellphone: string;

  @Field({ nullable: true })
  whatsapp: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  nit: string;

  @Field({ name: "user" })
  userId: User;

  @Field((type) => [Subcategory])
  productCategories: Subcategory[];

  @Field()
  active: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
