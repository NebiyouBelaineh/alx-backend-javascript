class Building {
  constructor(sqft) {
    // Check if Building is not directly instantiated and if method is implemented in sub class
    if (new.target !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    } else {
      throw new TypeError('Number must a number');
    }
  }
}
export default Building;
