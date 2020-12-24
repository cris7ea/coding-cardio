const { getBestPrice } = require("../utils/crypto-clients");

const cheapestExchange = async (_, { amount }) => {
  try {
    const bid = await getBestPrice(amount);

    if (!bid.price) {
      throw new Error(
        `Try adding a smaller amount than ${amount}, or come back later.`
      );
    }

    return {
      btcAmount: amount,
      bidAmount: bid.price,
      exchange: bid.exchange,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  cheapestExchange,
};
