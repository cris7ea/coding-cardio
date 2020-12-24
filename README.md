# Introduction

In this repo I will showcase some use cases of the most popular Cryptocurrency APIs.

## Crypto React.js Cardio

For the folder "crypto-react-cardio" I implemented the following features:

1. I'm Fetching and displaying a list of currencies available on MoonPay [`GET /currencies`](https://api.moonpay.io/v3/currencies).
2. The layout is responsive and it shows one column on mobile devices, two columns on tablet devices, and three columns on desktops. (these include portrait and landscape mode)
3. I added 2 toggles:

- Toggle to control if currencies NOT supported in the US should be displayed
- Toggle to control if currencies NOT available in test mode should be displayed

4. I added 3 sort buttons:

- sorting by alphabetical order using the name of the currency
- sorting by alphabetical order using the symbol/code of the currency
- and applying a random shuffle to the list of currencies

#### Local Setup

1. Install node modules `npm i`
2. And run the app `npm start`

## Crypto Node.js Cardio

For the folder "crypto-node-cardio" I implemented the following features:

- I make a REST API endpoint using Node.js and Express.js, which will return the exchange platform that is currently trading the cheapest price for Bitcoin `BTCUSD`.
- For now, I'm also assuming that 1 USDT = 1 USD

Example API call (for 1 BTCUSD):

```
GET http://localhost:4000/exchange-routing?amount=1
```

Example API response (JSON):

```
{
  "btcAmount": 1,
  "bidAmount": 10000,
  "exchange": "coinbase"
}
```

**Note:** I am comparing all order books and compute the best execution price for the given amount of Bitcoin in query.

#### Local Setup

1. Install node modules `npm i`
2. And run the app `npm start`
3. Then visit http://localhost:4000/exchange-routing?amount=1

#### API Documentation for Order Books

- **Bitfinex:** https://docs.bitfinex.com/reference#rest-public-book
- **Binance:** https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#order-book
- **Coinbase Prime:** https://docs.prime.coinbase.com/#get-product-order-book
