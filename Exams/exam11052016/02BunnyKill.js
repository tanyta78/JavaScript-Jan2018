function solve(arrStr) {
    let matrixRows = 0;
    let matrixCols = 0;
    let matrix = [];
    let bombs = [];
    let damage=0;
    let kills=0;
    for (let row of arrStr) {
        if (row.indexOf(',') >= 0) {
            bombs.push(row.split(' ').map(e => e.split(',').map(Number)));
        } else {
            matrix.push(row.split(' ').map(Number));
        }
    }

    matrixRows = matrix.length;
    matrixCols = matrix[0].length;

    for (let bomb of bombs[0]) {
        manipulateMatrix(bomb);
    }

    for (let row = 0; row < matrixRows; row++) {
       for (let col = 0; col < matrixCols; col++) {
           let element = matrix[row][col];
           if (element>0) {
               damage+=element;
               kills++;
           }
           
       }
        
    }
    console.log(damage);
    console.log(kills);
    

    function manipulateMatrix(bomb) {
        let xBomb = bomb[0];
        let yBomb = bomb[1];
        let bunny = matrix[xBomb][yBomb];

        if ((yBomb + 1) < matrixCols) {
            let oldValue = matrix[xBomb][yBomb + 1]
            matrix[xBomb][yBomb + 1] = oldValue > bunny ? oldValue - bunny : 0;
        }
        if ((yBomb - 1) >= 0) {
            let oldValue = matrix[xBomb][yBomb - 1]
            matrix[xBomb][yBomb - 1] = oldValue > bunny ? oldValue - bunny : 0;
        }
        if ((xBomb + 1) < matrixRows) {
            let oldValue = matrix[xBomb + 1][yBomb]
            matrix[xBomb + 1][yBomb] = oldValue > bunny ? oldValue - bunny : 0;
        }
        if ((xBomb - 1) >= 0) {
            let oldValue = matrix[xBomb - 1][yBomb]
            matrix[xBomb - 1][yBomb] = oldValue > bunny ? oldValue - bunny : 0;
        }
        if ((yBomb + 1) < matrixCols && (xBomb - 1) >= 0) {
            let oldValue = matrix[xBomb - 1][yBomb + 1]
            matrix[xBomb - 1][yBomb + 1] = oldValue > bunny ? oldValue - bunny : 0;
        }
        if ((yBomb + 1) < matrixCols && (xBomb + 1) < matrixRows) {
            let oldValue = matrix[xBomb+1][yBomb + 1]
            matrix[xBomb+1][yBomb + 1] = oldValue > bunny ? oldValue - bunny : 0;
        }

        if ((yBomb - 1) >=0 && (xBomb - 1) >= 0) {
            let oldValue = matrix[xBomb - 1][yBomb - 1]
            matrix[xBomb - 1][yBomb - 1] = oldValue > bunny ? oldValue - bunny : 0;
        }
        if ((yBomb - 1) >=0 && (xBomb + 1) < matrixRows) {
            let oldValue = matrix[xBomb+1][yBomb - 1]
            matrix[xBomb+1][yBomb - 1] = oldValue > bunny ? oldValue - bunny : 0;
        }
    }






}

solve([
'5 10 15 20',
'10 10 10 10',
'10 15 10 10',
'10 10 10 10',
'2,2 0,1'
]);