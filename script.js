var btc = document.getElementById('bitcoin');
var eth = document.getElementById('ethereum');
var doge = document.getElementById('dogecoin');

$.ajax({
    url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd",
    method: "GET"
}).done(function(response){

    btc.innerHTML = "$" + response.bitcoin.usd;
    eth.innerHTML = "$" + response.ethereum.usd;
    doge.innerHTML = "$" + response.dogecoin.usd;

});