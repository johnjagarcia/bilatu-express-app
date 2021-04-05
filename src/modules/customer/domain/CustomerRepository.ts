import Customer from "./Customer";

export default interface CustomerRepository {
  save(user: Customer): Promise<Customer>;
  findByEmail(email: string): Promise<Customer | null>;
}
