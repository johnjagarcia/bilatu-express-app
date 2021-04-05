export default class Customer {
  _id?: string;
  name: string;
  lastName: string;
  email: string;
  cellphone: string;
  dni?: string;
  birthDate?: Date;
  gender?: string;
  addresses?: string[];
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
