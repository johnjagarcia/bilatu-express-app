import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class State {
  @Field(() => ID)
  _id: string;

  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  active: boolean;
}
