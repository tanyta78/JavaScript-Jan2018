function solve(arrStr) {
    let goldsForDays=arrStr.map(Number);
    let sumInLv=0;
    let dayOfFirstPurchasedBitcoin=[];
    let bitcoinsBougth=0;
    let len=arrStr.length;
    for (let i = 0; i < len; i++) {
        let minedGold=goldsForDays[i];
        if (i%3==2) {
            minedGold*=70/100;
        }
        sumInLv+=minedGold*67.51;
        if (sumInLv>=11949.16) {
           let bitcoins=Math.floor(sumInLv/11949.16);
           bitcoinsBougth+=bitcoins;
            dayOfFirstPurchasedBitcoin.push(i+1);
            sumInLv-=bitcoins*11949.16;
        }
    }

    console.log(`Bitcoins bought: ${bitcoinsBougth}`);
    if (dayOfFirstPurchasedBitcoin.length>0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchasedBitcoin[0]}`);
        
    }
    console.log(`Money left: ${sumInLv.toFixed(2)} lv.`);
    

};

solve([
    3124.15, 504.212, 2511.124
]);