import DomainException from "../../shared/domain/DomainException";
import { ErrorCodes } from "../../shared/domain/ErrorCodes";

export default class ServiceCategoryWithSameNameException extends DomainException {
  errorCode(): string {
    return ErrorCodes.ServiceCategoryWithSameName;
  }
}
