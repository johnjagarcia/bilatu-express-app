import { injectable } from "inversify";
import Customer from "../domain/Customer";
import CustomerRepository from "../domain/CustomerRepository";
import CustomerDocument from "../../shared/infra/orm/mongoose/schemas/Customer";

@injectable()
export default class CustomerMongoRepository implements CustomerRepository {
  async findByEmail(email: string): Promise<Customer | null> {
    return await CustomerDocument.findOne({ email });
  }

  async save(customer: Customer): Promise<Customer> {
    const customerDocument = new CustomerDocument(customer);
    return await customerDocument.save();
  }
}
