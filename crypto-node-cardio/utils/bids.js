const formatBitfinexData = (bids) =>
  bids.map((bid) => ({
    price: bid[0],
    quantity: bid[2],
  }));

const formatBinanceData = (bids) =>
  bids.map((bid) => ({
    price: parseFloat(bid.price),
    quantity: parseFloat(bid.quantity),
  }));

const formatCoinbaseData = (bids) =>
  bids.map((bid) => ({
    price: parseFloat(bid[0]),
    quantity: parseFloat(bid[1]),
  }));

const getBestBid = ({ bids, exchange }, askSize) => {
  // 1. We use .filter() to get only the quantity that is bigger/equal to our askingSize.
  // 2. We use .sort() to find the best/cheapest execution price for the given amount.
  const [bestBid = {}] = bids
    .filter(({ quantity }) => askSize <= quantity)
    .sort(({ quantity: a }, { quantity: b }) => a - b);

  if (!bestBid || !bestBid.price) return;
  return { ...bestBid, exchange };
};

const getBestExchange = (exchanges) => {
  const filtered = exchanges.filter((bid) => bid && bid.price);
  if (filtered.length <= 1) return filtered;

  // Best exchange will be the one with the best/cheapest execution price for the given amount,
  // among all exchange platforms.
  const [bestExchange] = filtered.sort(({ price: a }, { price: b }) => a - b);
  return bestExchange;
};

module.exports.formatBitfinexData = formatBitfinexData;
module.exports.formatBinanceData = formatBinanceData;
module.exports.formatCoinbaseData = formatCoinbaseData;
module.exports.getBestBid = getBestBid;
module.exports.getBestExchange = getBestExchange;
