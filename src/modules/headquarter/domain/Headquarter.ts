export default class Headquarter {
  _id?: string;
  code: string;
  name: string;
  businessId: string;
  main: boolean;
  address: string;
  latitude: string;
  longitude: string;
  cityId: string;
  cellphone: string;
  whatsapp?: string;
  email?: string;
  coverageCities: string[];
  pickUpOnStore: boolean;
  homeDelivery: boolean;
  showLocation: boolean;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
