export default class Business {
  _id: string;
  code: string;
  type: string;
  name: string;
  categoryId: string;
  address?: string;
  cityId?: string;
  cellphone?: string;
  whatsapp?: string;
  email: string;
  personType: string;
  nit: string;
  userId: string;
  subcategories?: string[];
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
