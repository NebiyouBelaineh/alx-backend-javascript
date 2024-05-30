class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(value) {
    if (typeof value === 'number') {
      this._size = value;
    } else {
      throw new TypeError('Size must be a number');
    }
  }

  set location(value) {
    if (typeof value === 'string' && value.length > 0) {
      this._location = value;
    } else {
      throw new TypeError('Location must be a string');
    }
  }

  toString() {
    return `${this.location}`;
  }

  valueOf() {
    return `${this.size}`;
  }
}

export default HolbertonClass;
