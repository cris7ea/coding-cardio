const express = require("express");
const { validateAmount, errorMiddleware } = require("./middlewares");
const { getBestPrice } = require("./utils/crypto-clients");

const PORT = process.env.PORT || 4000;

const app = express();

// We neet to make sure the query passed in is an actual number
app.use([validateAmount]);

app.get("/exchange-routing", async (req, res) => {
  try {
    const askSize = parseFloat(req.query.amount);
    const bid = await getBestPrice(askSize);

    if (bid.price) {
      res.json({
        btcAmount: askSize,
        bidAmount: bid.price,
        exchange: bid.exchange,
      });
    } else {
      res.json({
        error:
          "Theere are no prices from upstream. Add a smaller price or come back later!",
      });
    }
  } catch (error) {
    // This error will be picked up by the errorMiddleware
    throw new Error(error);
  }
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
