//1.	Print an Array with a given Delimiter
function printArrayWithDelimeter(arr) {
    let delimiter = arr[arr.length - 1];
    arr.pop();
    let result = arr.join(delimiter);
    console.log(result);

}

//2.	Print every N-th Element from an Array 
function printEveryNElementFromArray(arr) {
    let step = Number(arr[arr.length - 1]);
    arr.pop();
    let result = [];
    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i]);
    }

    console.log(result.join('\n'));

}

//3.    Add and Remove Elements from Array
function manipulateArray(input) {
    let num = 1;
    let result = [];

    for (let cmd of input) {
        if (cmd == 'add') {
            result.push(num++);
        } else if (cmd == 'remove') {
            result.pop();
            num++;
        }
    }
    result = result.join('\n');

    if (result.length == 0) {
        console.log('Empty');
    } else {
        console.log(result);
    }

}

//4.	Rotate Array
function rotateArray(input) {
    let rotations = input[input.length - 1];
    input.pop();

    for (let i = 0; i < rotations; i++) {
        let element = input.pop();
        input.unshift(element);
    }

    console.log(input.join(' '));

}

function arrayRotate(input) {
    let count = input[input.length - 1];
    input.pop();
    count = count % input.length;
    let elements = input.splice(-count, count);
    let result = elements.concat(input);
    console.log(result.join(' '));
}

//5.	Extract an Non-decreasing Subsequence from an Array
function extractSubsequence(arr) {
    let result = [];
    let biggest = arr.shift();
    result.push(biggest);
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element >= biggest) {
            biggest = element;
            result.push(element);
        }

    }
    console.log(result.join('\n'));

}

function extractSubseq(arr) {
    let result = arr.filter((a, b) => (arr[b - 1] - a) < 0);
    result.unshift(arr[0]);
    console.log(result.join('\n'));
}

//6.	Sort an Array by 2 Criteria
//Write a JS function that orders a given array of strings, by length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
function sortArrayByCriteria(arr) {

    function compareByLength(a, b) {
        let lengthA = a.length;
        let lengthB = b.length;

        if (lengthA > lengthB) {
            return 1;
        } else if (lengthA < lengthB) {
            return -1;
        } else {
            return compareByAlphabetOrder(a, b);
        }
    }

    function compareByAlphabetOrder(a, b) {
        let aToLower = a.toLowerCase();
        let bToLower = b.toLowerCase();
        if (aToLower > bToLower) {
            return 1;
        }
        if (aToLower < bToLower) {
            return -1;
        }
        return 0;
    }
    let ordered = arr.sort(function (a, b) { return compareByLength(a, b); });
    return console.log(ordered.join('\n'));

}

//7.	Magic Matrices
//Write a JS function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal
function IsMatrixMagical(arr) {
    let isMagic = true;
    //first way
    let sum1 = arr[0].reduce((a, b) => a + b, 0);
    //second way
    let sum2 = 0;
    arr[1].forEach((a) => sum2 += a);
    //third way
    let sum3 = 0;
    let i = arr[2].length;
    while (i--) sum3 += arr[2][i];

    if (sum1 != sum2 || sum2 != sum3 || sum1 != sum3) {
        return console.log('false');
    }
    //sum for colums
    for (let col = 0; col < arr.length; col++) {
        let sumCol = 0;
        let i = arr.length;
        while (i--) sumCol += arr[i][col];
        if (sumCol != sum1) {
            return console.log('false');
        }
    }
    console.log('true');
}

//var2
function magicMatrices(input) {
    let matrix = input.map(row => row.split(" ").map(Number));
    let sum = matrix[0].reduce((a, b) => a + b);
    let isMagic = true;

    for (let i = 1; i < matrix.length; i++) {
        if (sum != matrix[i].reduce((a, b) => a + b)) {
            isMagic = false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let sumCol = 0;
        for (let row = 0; row < matrix.length; row++) {
            sumCol += matrix[row][col];
        }

        if (sumCol != sum) {
            isMagic = false;
        }
    }

    console.log(isMagic);
}

//8.	*Spiral Matrix
//Write a JS function that generates a Spirally-filled matrix with numbers, with given dimensions.
//The input comes as 2 numbers that represent the dimension of the matrix. 

function genSpiralMatrix(rows, cols) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }

    let startRow = 0, startCol = 0, endRow = rows - 1, endCol = cols - 1;
    let number = 1;

    while (startRow <= endRow || startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = number++;

        }

        for (let i = startRow + 1; i <= endRow; i++) {
            matrix[i][endCol] = number++;
        }

        for (let i = endCol - 1; i >= startCol; i--) {
            matrix[endRow][i] = number++;
        }

        for (let i = endRow - 1; i > startRow; i--) {
            matrix[i][startCol] = number++;
        }


        startRow++;
        startCol++;
        endRow--;
        endCol--;
    }

    console.log(
        matrix.map(row => row.join(' '))
            .join('\n'));

}


//9.	*Diagonal Attack
//Write a JS function that reads a given matrix of numbers, and checks if both main diagonals have equal sum. If they do, set every element that is NOT part of the main diagonals to that sum, alternatively just print the matrix unchanged.
function manipulateMatrix(input) {
    let matrix = input.map(row => row.split(" ").map(Number));

    // checkMainDiagonalSum(matrix) 
    let sum = 0;
    let sum2 = 0;
    let i = matrix.length;
    let j = 0;
    while (i--) {
        sum += matrix[i][i];
        sum2 += matrix[j++][i];
    }
    if (sum == sum2) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (row == col || row + col + 1 == matrix.length) {
                    continue;
                }
                matrix[row][col] = sum;
            }
        }
    }

    //print matrix
    console.log(matrix.map(row => row.join(' ')).join('\n'));

}

//10.	**Orbit
//You will be given an empty rectangular space of cells. Then you will be given the position of a star. You need to build the orbits around it.
//You will be given a coordinate of a cell, which will always be inside the matrix, on which you will put the value – 1. Then you must set the values of the cells directly surrounding that cell, including the diagonals, to 2. After which you must set the values of the next surrounding cells to 3 and so on. Check the pictures for more info.The input comes as an array of 4 numbers [width, height, x, y] which represents the dimensions of the matrix and the coordinates of the star.The output is the filled matrix, with the cells separated by a space, each row on a new line.
function genOrbitMatrix([rows, cols, starRow, starCol]) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }

    console.log(matrix.map(row => row.join(" ")).join("\n"));
}

genOrbitMatrix([4, 4, 0, 0]);