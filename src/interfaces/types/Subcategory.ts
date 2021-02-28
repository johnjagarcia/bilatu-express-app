import { Field, ID, ObjectType } from "type-graphql";
import Blob from "./Blob";
import Category from "./Category";

@ObjectType()
export default class Subcategory {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field({ name: "category" })
  categoryId: Category;

  @Field({ name: "image", nullable: true })
  blobId?: Blob;

  @Field()
  active: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
