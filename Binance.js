const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: '<key>',
  APISECRET: '<secret>'
});

/*Binance Futures API*******************************************************/
//Futures Prices
console.info( await binance.futuresPrices() );
//Futures Account Balances & Positions
console.info( await binance.futuresAccount() );
//Futures Balances
console.info( await binance.futuresBalance() );

//Futures Limit Buy
console.info( await binance.futuresBuy( 'BTCUSDT', 0.1, 8222 ) );
//Futures Limit Sell
console.info( await binance.futuresSell( 'BTCUSDT', 0.5, 11111 ) );

//Futures Market Buy
console.info( await binance.futuresMarketBuy( 'BNBUSDT', 5 ) );
//Futures Market Sell
console.info( await binance.futuresMarketSell( 'TRXUSDT', 1 ) );

//Futures Market Orders: Get the fill price using newOrderRespType
console.info( await binance.futuresMarketBuy( 'BNBUSDT', amount, { newOrderRespType: 'RESULT' 

//Get Futures Positions
console.info( await binance.futuresPositionRisk() );


/*Binance API (Spot Trading)******************************************/

//Getting latest price of all symbols
let ticker = await binance.prices();
console.info(`Price of BNB: ${ticker.BNBUSDT}`);

//Getting latest price of a symbol
binance.prices('BNBBTC', (error, ticker) => {
  console.info("Price of BNB: ", ticker.BNBBTC);
});

//Getting list of current balances
binance.balance((error, balances) => {
  if ( error ) return console.error(error);
  console.info("balances()", balances);
  console.info("ETH balance: ", balances.ETH.available);
});

//Placing a LIMIT order
let quantity = 1, price = 0.069;
binance.buy("ETHBTC", quantity, price);
binance.sell("ETHBTC", quantity, price);

//Placing a MARKET order
// These orders will be executed at current market price.
let quantity = 1;
binance.marketBuy("BNBBTC", quantity);
binance.marketSell("ETHBTC", quantity);

