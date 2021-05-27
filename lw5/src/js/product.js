export default class Product {
  constructor({ id = +new Date(), values }) {
    this.values = { ...values, total: values.count * values.priceForOne };
    this.id = id;
  }
  getTotal() {
    if (typeof this.total && this.priceForOne) {
      this.values.total = this.values.count * this.values.priceForOne;
      return this.values.total;
    }
    this.values.total = 0;
    return this.values.total;
  }
}
