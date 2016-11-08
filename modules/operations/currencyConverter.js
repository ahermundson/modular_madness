function currencyConvert(num) {
  return num.toLocaleString('en', {style: 'currency', currency: 'USD'});
}

module.exports = currencyConvert;
