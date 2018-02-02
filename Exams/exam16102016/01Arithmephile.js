function solve(arrStr) {
    let biggest=-Infinity;
    let numbers = arrStr.map(Number);
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (num>=0 & num<10) {
            let multiplication = 1;
            for (let j = i+1; j < numbers.length; j++) {
                if (j>num+i) {
                    break;                    
                }
                multiplication *= numbers[j];
                
            }
            if (multiplication>biggest) {
                biggest=multiplication;
            }
        }
    }

    console.log(biggest);
    
}

solve([ '10', '20', '2', '30', '44', '3', '56', '20', '24' ]);