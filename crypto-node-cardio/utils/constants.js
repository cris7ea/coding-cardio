// - I'm considering BTCUSDT & BTC-USD to be the same.
const bitfinexUrl = "https://api-pub.bitfinex.com/v2/book/tBTCUSD/P0";
const binanceUrl = "https://api.binance.com/api/v3/depth?symbol=BTCUSDT";
const coinbaseProUrl =
  "https://api.pro.coinbase.com/products/BTC-USD/book?level=2";

module.exports.bitfinexUrl = bitfinexUrl;
module.exports.binanceUrl = binanceUrl;
module.exports.coinbaseProUrl = coinbaseProUrl;
