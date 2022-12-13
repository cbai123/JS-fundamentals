const searchCandies = require('./searchcandies');

describe('search function for array of objects', () => {
  it('returns the correct candies', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  });

  it('returns the correct candies by price', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
  });

  it('returns the correct candies with a different search', () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
  });

  it('returns the correct candies by price with a different search', () => {
    expect(searchCandies('S',4)).toEqual(['Skitties', 'Skittles']);
  });

  it('returns the correct candies when search is lowercase', () => {
    expect(searchCandies('ma',2)).toEqual(['Mars']);
  });
});