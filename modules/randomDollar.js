var randomNumber = require('./operations/randomNumber');
var currencyConvert = require('./operations/currencyConverter');

var MIN = 100;
var MAX = 1000000;
function makeDollarAmount() {
  return currencyConvert(randomNumber(MIN, MAX));
}

function accountBalance() {
  return "Account balance:\n";
}



module.exports.dollarAmount = makeDollarAmount;
module.exports.accountBalance = accountBalance;
