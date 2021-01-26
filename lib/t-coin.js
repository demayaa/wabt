const { formatCurrency } = require("@coingecko/cryptoformat");
exports.price = (id,sy,us,btc,idr,p1h,p24,p7d) => {
    return`*${id} | ${sy}*
Price: 
    USD ➻ ${us}
    BTC ➻ ${btc}
    IDR ➻ ${idr}
    
Change in Percentase:
    1 Hours  ➻  ${p1h.idr}
    24 Hours ➻ ${p24.idr}
    7 Days   ➻  ${p7d.idr}
`
}

exports.market = async (id, listM) => {
    let M = listM;
    var arr = []
    
    for(let i in M){
        arr.push({market: M[i].market.name, price: M[i].converted_last})
    }
    
    var market = 'market';
    var h = [... new Map(arr.map(item => [item[market], item])).values()].slice(0,10);
    
    
    var bc = [];
    var bv = [];
    h.forEach(i => {
        bc.push(`${i.market} ➻ ${formatCurrency(i.price.usd, "USD", "en")}`);
    })

    return `*Market (${id.toUpperCase()})*\n\n${bc.join('=>').replace(/=>/g,"\n")}`;
}

exports.convert = (total, dari, res) => {
    return `*Convert ${total} ${dari}*\n${formatCurrency(res, "IDR", "id")}`
}