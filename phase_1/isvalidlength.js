const isValidLength = (phone_number) => {
  const validLength = 11;
  if (phone_number.length === validLength) {
    return true;
  } else {
    return false;
  }
};
module.exports = isValidLength;