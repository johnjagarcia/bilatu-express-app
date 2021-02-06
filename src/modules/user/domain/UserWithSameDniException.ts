import DomainException from "../../shared/domain/DomainException";
import { ErrorCodes } from "../../shared/domain/ErrorCodes";

export default class UserWithSameDniException extends DomainException {
  errorCode(): string {
    return ErrorCodes.UserWithSameDni;
  }
}
