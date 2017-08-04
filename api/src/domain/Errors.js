// see this for tip to create custom error correctly: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
// http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript (read the entire thing, not just first answer)
function ValidationFailed(message) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message || 'Default Message';
  this.code = "400";
}
ValidationFailed.prototype = Object.create(Error.prototype);
ValidationFailed.prototype.constructor = ValidationFailed;
exports.ValidationFailed = ValidationFailed;

