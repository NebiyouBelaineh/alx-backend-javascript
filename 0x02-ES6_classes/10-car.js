class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const newCar = Object.create(Object.getPrototypeOf(this));

    newCar._brand = this._brand;
    newCar._color = this._color;
    newCar._motor = this._motor;

    return newCar;
  }
}
export default Car;
