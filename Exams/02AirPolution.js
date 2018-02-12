function solve(matrixInfo, arrStr) {
    let polutedBlocs = [];
    let len = arrStr.length;
    let matrix=[];
    for (let row = 0; row < 5; row++) {
        let line=matrixInfo[row].split(' ').map(Number);
      matrix.push(line);
        
    }
    for (let i = 0; i < len; i++) {
        let info = arrStr[i].split(' ');
        let force = info[0];
        let val = Number(info[1]);
        switch (force) {
            case 'breeze':
                for (let col = 0; col < 5; col++) {
                    let el=matrix[val][col];
                    matrix[val][col] = el - 15;
                }
                break;
            case 'gale':
                for (let row = 0; row < 5; row++) {
                    matrix[row][val] = matrix[row][val]- 20;
                }
                break;
            case 'smog':
                for (let row = 0; row < 5; row++) {
                    for (let col = 0; col < 5; col++) {
                        matrix[row][col] +=  val;

                    }
                   
                }
                break;

        }

    }

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (matrix[row][col]>50) {
                let block=`[${row}-${col}]`;
                polutedBlocs.push(block);
            }
            
        }
        
    }

    if (polutedBlocs.length>0) {
        console.log(`Polluted areas: ${polutedBlocs.join(', ')}`);
        
    }else{
        console.log('No polluted areas');
        
    }
};

solve([
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
],
    ["breeze 1", "gale 2", "smog 25"]
);