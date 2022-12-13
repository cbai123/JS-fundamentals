class ShoppingBasket {
  constructor() {
    this.totalPrice = 0;
    this.items = [];
  }

  addItem(candy) {
    this.items.push(candy);
    this.totalPrice += candy.getPrice();
  }

  getTotalPrice() {
    return this.totalPrice;
  }
}

module.exports = ShoppingBasket;