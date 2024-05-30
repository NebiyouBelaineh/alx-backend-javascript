import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
    this._placeHolder = undefined;
  }

  cloneCar() {
    const newEV = new Car(this._placeHolder, this._placeHolder, this._placeHolder);
    return newEV;
  }
}
export default EVCar;
