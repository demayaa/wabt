const TP = require('./t-coin.js')
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
const { formatCurrency } = require("@coingecko/cryptoformat");

class Info{
    constructor(coin_id){
        this.id = coin_id;
    }
    
    async getInfo(){
        let I,id,sy, p1h, p24, p7d, cp, idr, us;
        I = await CoinGeckoClient.coins.fetch(this.id, {});
        cp = I.data.market_data.current_price;
        id = I.data.id;
        sy = I.data.symbol;
        p1h = I.data.market_data.price_change_percentage_1h_in_currency;
        p24 = I.data.market_data.price_change_percentage_24h_in_currency;
        p7d = I.data.market_data.price_change_percentage_7d_in_currency;
        us = formatCurrency(cp.usd, "USD", "en");
        idr = formatCurrency(cp.idr, "IDR", "id");
        return TP.price(id,sy,us,cp.btc,idr,p1h,p24,p7d)
    }
    
    async getMarket(){
        let M = await CoinGeckoClient.coins.fetch(this.id, {})
        return TP.market(this.id, M.data.tickers)
        //console.log(M.data.tickers)
    }
    
    async convert(total, dari, res){
        return TP.convert(total, dari, res)
    }
}

module.exports = Info;
