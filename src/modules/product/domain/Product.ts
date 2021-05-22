export default class Product {
  _id?: string;
  title: string;
  headquarterId: string;
  productCategoryId: string;
  status: string;
  warranty: string;
  brand?: string;
  modelo?: string;
  description: string;
  creationYear?: string;
  tags?: string[];
  price: number;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
