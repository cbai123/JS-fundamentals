const Candy = require('./candy')

describe('Candy class', () => {
  it('returns the name of the candy', () => {
    const candy = new Candy('Mars',4.99);
    expect(candy.getName()).toEqual('Mars');
  });

  it('returns the price of the candy', () => {
    const candy = new Candy('Mars',4.99);
    expect(candy.getPrice()).toBe(4.99);
  });
})