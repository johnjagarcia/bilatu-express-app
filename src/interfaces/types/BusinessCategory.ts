import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class BusinessCategory {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  active: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
