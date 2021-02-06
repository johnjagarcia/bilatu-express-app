import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class City {
  @Field(() => ID)
  _id: string;

  @Field({ nullable: true })
  code: string;

  @Field()
  name: string;

  @Field()
  stateId: string;

  @Field()
  active: boolean;
}
