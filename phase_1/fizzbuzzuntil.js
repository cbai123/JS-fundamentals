const fizzbuzz = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzz';
  } else if (n % 3 === 0) {
    return 'fizz';
  } else if (n % 5 === 0) {
    return 'buzz';
  } else {
    return n;
  }
};

const fizzBuzzUntil = (n) => {
  for (i = 1 ; i <= n ; i++) {
    console.log(`${fizzbuzz(i)}`);
  }
};

module.exports = fizzBuzzUntil;