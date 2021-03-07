import { Field, ID, ObjectType } from "type-graphql";
import Blob from "./Blob";
import Subcategory from "./Subcategory";

@ObjectType()
export default class ServiceCategory {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field({ name: "subcategory" })
  subcategoryId: Subcategory;

  @Field({ name: "image", nullable: true })
  blobId?: Blob;

  @Field()
  active: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
