import { Field, ID, ObjectType } from "type-graphql";
import Blob from "./Blob";
import BusinessCategory from "./BusinessCategory";
import Category from "./Category";

@ObjectType()
export default class BusinessCategoryGroup {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field((type) => [BusinessCategory])
  businessCategories: BusinessCategory[];

  @Field({ name: "image", nullable: true })
  blobId?: Blob;

  @Field()
  active: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
