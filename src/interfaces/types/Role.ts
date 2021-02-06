import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class Role {
  @Field(() => ID)
  _id: string;

  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  active: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
