import DomainException from "./DomainException";
import { ErrorCodes } from "./ErrorCodes";

export default class SubcategoryInvalidImageException extends DomainException {
  errorCode(): string {
    return ErrorCodes.InvalidImage;
  }
}
