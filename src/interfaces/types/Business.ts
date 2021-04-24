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

  @Field({ name: "city", nullable: true })
  cityId: City;

  @Field({ name: "category" })
  categoryId: BusinessCategory;

  @Field({ nullable: true })
  cellphone: string;

  @Field({ nullable: true })
  whatsapp: string;

  @Field()
  email: string;

  @Field()
  personType: string;

  @Field()
  nit: string;

  @Field({ name: "user" })
  userId: User;

  @Field((type) => [Subcategory])
  subcategories: Subcategory[];

  @Field()
  active: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
