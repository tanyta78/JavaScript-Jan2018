function solve(arrStr) {
    let decoding = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let lengthOfMatrix = Number(arrStr.shift());
    let decMatrix = Array(lengthOfMatrix).fill().map(() => Array(lengthOfMatrix).fill());
    for (let i = 1; i <= lengthOfMatrix; i++) {
        let row = arrStr.shift().split(' ').map(Number);
        decMatrix[i - 1] = row;
    }

    let textMatrix = [];
    for (let row of arrStr) {
        textMatrix.push(row.split(' ').map(Number));
    }

    let result = '';

    for (let row = 0; row < textMatrix.length; row++) {
        for (let col = 0; col < textMatrix[0].length; col++) {
            let current = textMatrix[row][col];
            let modifier = decMatrix[row % decMatrix.length][col % decMatrix[0].length];
            // result += String.fromCharCode(((current + modifier) % 27) + 64);
            result += decoding[(current + modifier) % 27];
        }
    }

    console.log(result);


}

solve(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']);