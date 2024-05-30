import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(value) {
    if (typeof value === 'number' && value > 0) {
      this._amount = value;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError('Currency must be a currency');
    }
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
