import { inject, injectable } from "inversify";
import { Arg, Mutation, Resolver } from "type-graphql";
import CreateCustomer from "../../modules/customer/app/create-customer";
import Customer from "../types/Customer";

@injectable()
@Resolver((of) => Customer)
export class CustomerResolver {
  @inject(CreateCustomer)
  private createCustomerUseCase: CreateCustomer;

  @Mutation(() => Customer)
  async createCustomer(
    @Arg("name") name: string,
    @Arg("lastName") lastName: string,
    @Arg("email") email: string,
    @Arg("cellphone") cellphone: string,
    @Arg("dni", { nullable: true }) dni?: string,
    @Arg("birthdate", { nullable: true }) birthdate?: Date,
    @Arg("gender", { nullable: true }) gender?: string
  ) {
    return await this.createCustomerUseCase.execute(
      name,
      lastName,
      email,
      cellphone,
      dni,
      birthdate,
      gender
    );
  }
}
