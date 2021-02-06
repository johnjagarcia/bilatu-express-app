export default class User {
  _id?: string;
  code?: string;
  name: string;
  lastName: string;
  email?: string;
  cellphone?: string;
  dni?: string;
  password?: string;
  rolId: string;
  birthDate?: Date;
  gender?: string;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
