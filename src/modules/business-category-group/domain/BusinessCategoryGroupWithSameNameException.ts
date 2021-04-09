import DomainException from "../../shared/domain/DomainException";
import { ErrorCodes } from "../../shared/domain/ErrorCodes";

export default class BusinessCategoryGroupWithSameNameException extends DomainException {
  errorCode(): string {
    return ErrorCodes.BusinessCategoryGroupWithSameName;
  }
}
