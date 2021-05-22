import { Field, ID, ObjectType } from "type-graphql";
import Business from "./Business";
import City from "./City";
import Product from "./Product";

@ObjectType()
export default class Headquarter {
  @Field(() => ID)
  _id: string;

  @Field()
  code: string;

  @Field()
  name: string;

  @Field({ name: "business" })
  businessId: Business;

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

  @Field((type) => [Product], { nullable: true })
  products: Product[];
}
