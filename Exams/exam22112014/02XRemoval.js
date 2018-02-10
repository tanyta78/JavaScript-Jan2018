function solve(matrixStr) {
    let matrix = [];
    let result = [];
    for (let line of matrixStr) {
        matrix.push(line.toLowerCase());
        result.push(Array.from(line));
    }

    for (let i = 0; i < matrix.length - 2; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j + 2] != undefined && matrix[i + 1][j + 1] != undefined && matrix[i + 2][j] != undefined && matrix[i + 2][j + 2] != undefined) {
                if (matrix[i][j] == matrix[i][j + 2] && matrix[i][j] == matrix[i + 1][j + 1] && matrix[i][j] == matrix[i + 2][j] && matrix[i][j] == matrix[i + 2][j + 2]) {
                    result[i][j] = result[i][j + 2] = result[i + 1][j + 1] = result[i + 2][j] = result[i + 2][j + 2] = "";
                }
            }
        }

    }


    //print result matrix
    for (let row = 0; row < result.length; row++) {
        console.log(result[row].join(''));

    }
};

solve([
    'abnbjs',
    'xoBab',
    'Abmbh',
    'aabab',
    'ababvvvv'

]);