class ShoppingBasket {
  constructor() {
    this.totalprice = 0;
    // this.list = [];
  }

  addItem(candy) {
    this.totalprice += candy.getPrice();
    // this.list.push(candy);
  }

  getTotalPrice() {
    return this.totalprice;
    // let total = 0;
    // this.list.forEach(candy => total += candy.getPrice());
    // return total;
  } 
}

module.exports = ShoppingBasket;