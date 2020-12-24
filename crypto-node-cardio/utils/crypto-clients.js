const axios = require("axios");
const {
  getBestBid,
  getBestExchange,
  formatBinanceData,
  formatBitfinexData,
  formatCoinbaseData,
} = require("./bids");
const { bitfinexUrl, binanceUrl, coinbaseProUrl } = require("./constants");

const logError = (platform, error) => {
  console.error(`An error occurred for ${platform}:`);
  console.error(error);
};

const getBidPrices = async () => {
  // - Make 3 requests in parallel
  // - Also, I chose to add try-catch in the main Route to cover all async functions (server.js)
  const [bitfinexData, binanceData, coinbaseProData] = await Promise.all([
    axios.get(bitfinexUrl).catch((error) => logError("BitFinex", error)),
    axios.get(binanceUrl).catch((error) => logError("Binance", error)),
    axios.get(coinbaseProUrl).catch((error) => logError("CoinbasePro", error)),
  ]);

  return {
    bitfinex: {
      bids: formatBitfinexData(bitfinexData.data),
      exchange: "bitfinex",
    },
    binance: {
      bids: formatBinanceData(binanceData.data.bids),
      exchange: "binance",
    },
    coinbase: {
      bids: formatCoinbaseData(coinbaseProData.data.bids),
      exchange: "coinbase",
    },
  };
};

const getBestPrice = async (askSize) => {
  const bids = await getBidPrices();
  const bitfinex = getBestBid(bids.bitfinex, askSize);
  const binance = getBestBid(bids.binance, askSize);
  const coinbase = getBestBid(bids.coinbase, askSize);

  return getBestExchange([bitfinex, binance, coinbase]);
};

module.exports.getBestPrice = getBestPrice;
