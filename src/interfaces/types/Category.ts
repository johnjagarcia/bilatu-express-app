import { Field, ID, ObjectType } from "type-graphql";
import Blob from "./Blob";

@ObjectType()
export default class Category {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field({ name: "image", nullable: true })
  blobId?: Blob;

  @Field()
  type: string;

  @Field()
  active: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
