class ErrorResponse extends Error {
  constructor(message, status) {
    super(postMessage);
    this.statusCode = statusCode;
  }
}

module.exports = ErrorResponse;
