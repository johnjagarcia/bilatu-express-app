import { Field, ID, ObjectType } from "type-graphql";
import City from "./City";

@ObjectType()
export default class Headquarter {
  @Field(() => ID)
  _id: string;

  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  main: boolean;

  @Field()
  address: string;

  @Field()
  latitude: string;

  @Field()
  longitude: string;

  @Field({ name: "city" })
  cityId: City;

  @Field()
  cellphone: string;

  @Field({ nullable: true })
  whatsapp: string;

  @Field({ nullable: true })
  email: string;

  @Field()
  pickUpOnStore: boolean;

  @Field()
  homeDelivery: boolean;

  @Field((type) => [City])
  coverageCities: City[];

  @Field()
  showLocation: boolean;

  @Field()
  active: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
