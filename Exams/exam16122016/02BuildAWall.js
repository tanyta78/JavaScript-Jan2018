function solve(arrStr) {
    let start = arrStr.map(Number);
    let result = [];
    while (true) {
        if (start.every(e => e == 30)) break;
        let concrete = 0;

        for (let i = 0; i < start.length; i++) {
            if (start[i] == 30) {
                continue;
            }
            start[i] += 1;
            concrete += 195;
        }
       
        result.push(concrete);
    }
    console.log(result.join(', '));
    console.log(`${result.reduce((a, b) => a + b, 0)*1900} pesos`);

}


solve(['21', '25', '28']);