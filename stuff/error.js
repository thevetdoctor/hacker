class ErrorClone extends Error {
  status;

  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}

module.exports = ErrorClone;
