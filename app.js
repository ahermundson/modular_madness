var randomDollar = require("./modules/randomDollar");
var http = require("http");


http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(randomDollar.accountBalance() + randomDollar.dollarAmount() + "\n");
  res.end();
}).listen(3000);
