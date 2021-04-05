import { inject, injectable } from "inversify";
import { TYPES } from "../../../constants/types";
import CustomerBuilder from "../domain/CustomerBuilder";
import CustomerRepository from "../domain/CustomerRepository";
import CustomerWithSameEmailException from "../domain/CustomerWithSameEmailException";

@injectable()
export default class CreateCustomer {
  constructor(
    @inject(TYPES.CustomerRepository) private repository: CustomerRepository
  ) {}

  async execute(
    name: string,
    lastName: string,
    email: string,
    cellphone: string,
    dni?: string,
    birthdate?: Date,
    gender?: string
  ) {
    if (email && (await this.repository.findByEmail(email))) {
      throw new CustomerWithSameEmailException(
        "Customer with same E-mail already exists"
      );
    }

    const customer = new CustomerBuilder()
      .with("name", name)
      .with("lastName", lastName)
      .with("email", email)
      .with("cellphone", cellphone)
      .with("dni", dni)
      .with("birthDate", birthdate)
      .with("gender", gender)
      .build();

    return await this.repository.save(customer);
  }
}
