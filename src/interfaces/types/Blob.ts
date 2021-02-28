import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class Blob {
  @Field(() => ID)
  _id: string;

  @Field()
  data: string;

  @Field()
  type: string;

  @Field()
  active: boolean;

  @Field()
  createdAt: Date;
}
