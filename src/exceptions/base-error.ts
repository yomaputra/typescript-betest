class BaseError extends Error {
  message: string;
  statusCode: number;
  errorCode: string;

  constructor(message: string, statusCode: number, errorCode = "") {
    super(message);

    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }
}

export default BaseError;
