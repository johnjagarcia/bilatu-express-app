import { Field, ID, ObjectType } from "type-graphql";
import City from "./City";
import RoadType from "./RoadType";

@ObjectType()
export default class Address {
  @Field(() => ID)
  _id: string;

  @Field({ name: "city" })
  cityId: City;

  @Field({ name: "roadType" })
  roadTypeId: RoadType;

  @Field()
  mainRoad: string;

  @Field()
  secondaryRoad: string;

  @Field()
  number: string;

  @Field({ nullable: true })
  references: string;

  @Field({ nullable: true })
  latitude: string;

  @Field({ nullable: true })
  longitude: string;

  @Field()
  active: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
