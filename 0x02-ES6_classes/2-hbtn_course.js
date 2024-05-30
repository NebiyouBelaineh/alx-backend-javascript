class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof name === 'string' && name.length > 0) {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set length(length) {
    if (['number', 'BigInt'].includes(typeof length) && length.length > 0) {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  set students(students) {
    if (HolbertonCourse.isArrayofStrings(students)) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array of Strings');
    }
  }

  static isArrayofStrings(attribute) {
    return Array.isArray(attribute) && attribute.every((element) => typeof element === 'string');
  }
}

export default HolbertonCourse;
