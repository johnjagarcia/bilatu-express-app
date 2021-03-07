import DomainException from "../../shared/domain/DomainException";
import { ErrorCodes } from "../../shared/domain/ErrorCodes";

export default class CategoryWithSameNameAndTypeException extends DomainException {
  errorCode(): string {
    return ErrorCodes.CategoryWithSameNameAndType;
  }
}
