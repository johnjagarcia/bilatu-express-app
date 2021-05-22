import { Field, ID, ObjectType } from "type-graphql";
import Headquarter from "./Headquarter";
import ProductCategory from "./ProductCategory";

@ObjectType()
export default class Product {
  @Field(() => ID)
  _id: string;

  @Field()
  title: string;

  @Field((type) => Headquarter, { name: "headquarter" })
  headquarterId: Headquarter;

  @Field({ name: "category" })
  productCategoryId: ProductCategory;

  @Field()
  status: string;

  @Field()
  warranty: string;

  @Field({ nullable: true })
  brand: string;

  @Field({ nullable: true })
  modelo: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  creationYear: string;

  @Field((type) => [String], { nullable: true })
  tags: [string];

  @Field()
  price: number;

  @Field()
  active: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
