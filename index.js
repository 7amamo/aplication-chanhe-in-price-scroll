fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=85a8abf3bf91475e93adff0f01176a29").then(function(result){
    let mydata = result.json()
    return mydata;
}).then(function(mydata){
    // console.log(mydata.rates["EGP"]) 
    // console.log(mydata.rates["SAR"]) 

    let amount = document.querySelector(".amount");
    let egpPrice = document.querySelector(".egp span");
    let sarPrice = document.querySelector(".sar span");

    egpPrice.innerHTML =  Math.round(amount.innerHTML * mydata.rates["EGP"])
    sarPrice.innerHTML =  Math.round(amount.innerHTML * mydata.rates["SAR"])


})