class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(value) {
    if (typeof value === 'string' && value.length > 0) {
      this._code = value;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  set name(value) {
    if (typeof value === 'string' && value.length > 0) {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
export default Currency;
