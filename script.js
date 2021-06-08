// curl -H "X-CMC_PRO_API_KEY: 3ec3adfd-4aa8-41" -H "Accept: application/json" -d "start=1&limit=5000&convert=USD" -G https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest
// curl -H "X-CM" -H "Accept: application/json" -G https://pro-api.coinmarketcap.com/v1/cryptocurrency/map

btcPrice = document.getElementById('priceBTC');
high24BTC = document.getElementById('high24BTC');
low24BTC = document.getElementById('low24BTC');
price24BTC = document.getElementById('price24BTC');
percent24BTC = document.getElementById('percent24BTC');
imgsrcBTC = document.getElementById('imgsrcBTC');

imgsrcETH = document.getElementById('imgsrcETH');
priceETH = document.getElementById('priceETH');
high24ETH = document.getElementById('high24ETH');
low24ETH = document.getElementById('low24ETH');
price24ETH = document.getElementById('price24ETH');
percent24ETH = document.getElementById('percent24ETH')

imgsrcLTC = document.getElementById('imgsrcLTC');
priceLTC = document.getElementById('priceLTC');
high24LTC = document.getElementById('high24LTC');
low24LTC = document.getElementById('low24LTC');
price24LTC = document.getElementById('price24LTC');
percent24LTC = document.getElementById('percent24LTC')

imgsrcADA = document.getElementById('imgsrcADA');
priceADA = document.getElementById('priceADA');
high24ADA = document.getElementById('high24ADA');
low24ADA = document.getElementById('low24ADA');
price24ADA = document.getElementById('price24ADA');
percent24ADA = document.getElementById('percent24ADA')

async function btc(){
    let response = await fetch("https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=usd")
    let json = await response.json()
    console.log(json[0])

    btcPrice.textContent = json[0].current_price
    high24BTC.textContent = json[0].high_24h
    low24BTC.textContent = json[0].low_24h
    price24BTC.textContent = json[0].price_change_24h
    percent24BTC.textContent = json[0].price_change_percentage_24h
    imgsrcBTC.src = json[0].image
}

async function eth() {
    let response = await fetch("https://api.coingecko.com/api/v3/coins/markets?ids=ethereum&vs_currency=usd")
    let json = await response.json()
    console.log(json[0])

    priceETH.textContent = json[0].current_price
    high24ETH.textContent = json[0].high_24h
    low24ETH.textContent = json[0].low_24h
    price24ETH.textContent = json[0].price_change_24h
    percent24ETH.textContent = json[0].price_change_percentage_24h
    imgsrcETH.src = json[0].image
} 

async function ltc() {
    let response = await fetch("https://api.coingecko.com/api/v3/coins/markets?ids=litecoin&vs_currency=usd")
    let json = await response.json()
    console.log(json[0])

    priceLTC.textContent = json[0].current_price
    high24LTC.textContent = json[0].high_24h
    low24LTC.textContent = json[0].low_24h
    price24LTC.textContent = json[0].price_change_24h
    percent24LTC.textContent = json[0].price_change_percentage_24h
    imgsrcLTC.src = json[0].image
}

async function ada() {
    let response = await fetch("https://api.coingecko.com/api/v3/coins/markets?ids=cardano&vs_currency=usd")
    let json = await response.json()
    console.log(json[0])

    priceADA.textContent = json[0].current_price
    high24ADA.textContent = json[0].high_24h
    low24ADA.textContent = json[0].low_24h
    price24ADA.textContent = json[0].price_change_24h
    percent24ADA.textContent = json[0].price_change_percentage_24h
    imgsrcADA.src = json[0].image
}

btc()
eth()
ltc()
ada()