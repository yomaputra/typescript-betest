import BaseError from "./base-error";

class HttpError extends BaseError {
  constructor(message: string, statusCode: number, errorCode = "") {
    super(message, statusCode, errorCode);
  }
}

export default HttpError;
