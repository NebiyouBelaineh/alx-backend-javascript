class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(value) {
    if (typeof value === 'string' && value.length > 0) {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set code(value) {
    if (typeof value === 'string' && value.length > 0) {
      this._code = value;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  toString() {
    return `[${typeof this} ${this.code}]`;
  }
}
export default Airport;
