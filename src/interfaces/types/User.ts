import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class User {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  cellphone: string;

  @Field({ nullable: true })
  dni: string;

  @Field()
  password: string;

  @Field()
  rolId: string;

  @Field({ nullable: true })
  birthDate: Date;

  @Field({ nullable: true })
  gender: string;

  @Field()
  active: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
