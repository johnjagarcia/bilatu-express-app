import { Field, ID, ObjectType } from "type-graphql";
import Address from "./Address";

@ObjectType()
export default class Customer {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  cellphone: string;

  @Field({ nullable: true })
  dni: string;

  @Field({ nullable: true })
  birthDate: Date;

  @Field({ nullable: true })
  gender: string;

  @Field((type) => [Address], { nullable: true })
  addresses: Address[];

  @Field()
  active: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
