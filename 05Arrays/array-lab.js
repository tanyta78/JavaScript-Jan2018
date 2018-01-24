//1.	Sum First Last
function sumFirstAndLastElement(arr) {
    return Number(arr[0]) + Number(arr[arr.length - 1]);
}

//2.	Even Position Element
function getEvenElements(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i += 2) {
        result += arr[i] + ' ';

    }
    //other variant
    // return arr.filter((e,i) => i%2==0).join(' ');
    return result;
}

//3.	Negative / Positive Numbers
function getNegativePositiveArr(arr) {
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        let num = Number(arr[index]);
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    //other variant
    //arr.forEach(e=>(e < 0) ? result.unshift(e): result.push(e));
    return result;
}

//4.	First and Last K Numbers
function getFirstAndLastKNums(arr) {
    let k = arr[0];
    let firstElements = arr.slice(1, k + 1);
    let lastElements = arr.reverse().slice(0, k).reverse();
    console.log(firstElements);
    console.log(lastElements);
    //other version
    //console.log(arr.slice(1,k+1).join(' '));
    //console.log(arr.slice(-k).join(' '));

}

//5.	Last K Numbers Sequence
function generateSequence(n, k) {
    let sequence = [];
    sequence[0] = 1;
    for (let i = 1; i < n; i++) {
        let startIndex = i - k > 0 ? i - k : 0;
        let endIndex = i;
        let element = sequence.slice(startIndex, endIndex).reduce((a, b) => a + b, 0);
        sequence.push(element);
    }
    console.log(sequence);

}

//6.	Process Odd Numbers
function processNumbersAtOddPosition(arr) {
    let result = arr.filter((e, i) => i % 2 != 0)
        .map(e => e * 2)
        .reverse()
        .join(' ');
    console.log(result);

}

//7.	Smallest Two Numbers
function getTwoSmallestNumber(arr) {
    let result = arr.sort((a, b) => a - b).slice(0, 2);
    console.log(result);

}

//8.	Biggest Element
function getBiggestElementInMatrix(matrix) {
    return Math.max.apply(null, matrix.reduce((row1, row2) => row1.concat(row2)));
}

//9.	Diagonal Sums
function diagonalSum(matrix) {
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < matrix[0].length; i++) {
        let rowLength = matrix[i].length;
        leftSum += matrix[i][i];
        rightSum += matrix[i][rowLength - 1 - i];
    }
    console.log(leftSum + ' ' + rightSum);
}

//10.	Equal Neighbors
function countEqualNeighbour(matrix) {
    let counter = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length - 1; col++) {
            if (matrix[row][col] == matrix[row][col + 1]) {
                counter++;
            }
        }
    }

    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] == matrix[row + 1][col]) {
                counter++;
            }
        }
    }
    
    console.log(counter);
}

//console.log(getFirstAndLastKNums([1,-4,5,-7]));
countEqualNeighbour([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]

);
