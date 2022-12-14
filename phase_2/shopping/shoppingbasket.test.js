const ShoppingBasket = require('./shoppingbasket');

describe('ShoppingBasket class', () => {
  it('gets total price of 0 before items added', () => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toEqual(0);
  });

  it('gets the total price after adding one item', () => {
    const basket = new ShoppingBasket();
    const candyDouble = { getName: () => 'Mars', getPrice: () => 4.99 };
    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toEqual(4.99);
  });

  it('gets the total price after adding multiple items', () => {
    const basket = new ShoppingBasket();
    const candyDouble_1 = {getName: () => 'Mars', getPrice: () => 4.99};
    const candyDouble_2 = {getName : () => 'Skittles', getPrice: () => 5.00}
    basket.addItem(candyDouble_1);
    basket.addItem(candyDouble_2);
    expect(basket.getTotalPrice()).toEqual(9.99);
  });
})