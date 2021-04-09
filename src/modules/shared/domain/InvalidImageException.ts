import DomainException from "./DomainException";
import { ErrorCodes } from "./ErrorCodes";

export default class InvalidImageException extends DomainException {
  errorCode(): string {
    return ErrorCodes.InvalidImage;
  }
}
