const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
  it('returns fizz when multiple of 3', () => {
    expect(fizzbuzz(3)).toBe('fizz');
  });

  it('returns fizz when multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz');
  });

  it('returns buzz when multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz');
  });

  it('returns buzz when multiple of 5', () => {
    expect(fizzbuzz(10)).toBe('buzz');
  });

  it('returns fizzbuzz when multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
  });

  it('returns the number when multiple of neither', () => {
    expect(fizzbuzz(4)).toBe(4);
  });

  it('returns the number when multiple of neither', () => {
    expect(fizzbuzz(7)).toBe(7);
  });
});