function solve(input) {
    let startingYield = Number(input[0]);
    let extractedAmount = 0;
    let days=0;
    while(startingYield>=100){
        extractedAmount+=startingYield-26;
        days++;
        startingYield-=10;
    }
    if (days>0) {
        extractedAmount-=26;
    }

    console.log(days);
    console.log(extractedAmount);
    

}


solve(['200']);