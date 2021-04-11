import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class Auth {
  @Field()
  token: string;
}
