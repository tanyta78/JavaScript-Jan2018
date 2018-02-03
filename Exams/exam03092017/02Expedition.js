function solve(primaryMatrix, secondaryMatrix, overlayArr, startCoordinates) {
    let position = [startCoordinates[0], startCoordinates[1]];
    let steps = 1;
    let matrixRows = primaryMatrix.length;
    let matrixCols = primaryMatrix[0].length;
    let direction;

    for (let coordinates of overlayArr) {
       
        modifyMatrix(coordinates);
    }



    searchPath(position[0], position[1]);
    console.log(steps);

    printResult();


    function printResult() {
        let currentRow = position[0];
        let currentCol = position[1];
        if (currentRow == 0) {
            console.log("Top");
        }
        else if (currentRow == matrixRows - 1) {
            console.log("Bottom");
        }
        else if (currentCol == 0) {
            console.log("Left");
        }
        else if (currentCol == matrixCols - 1) {
            console.log("Right");
        }
        else if (currentRow < matrixRows / 2 && currentCol >= matrixCols / 2) {
            console.log("Dead end 1");
        }
        else if (currentRow < matrixRows / 2 && currentCol < matrixCols / 2) {
            console.log("Dead end 2");
        }
        else if (currentRow >= matrixRows / 2 && currentCol < matrixCols / 2) {
            console.log("Dead end 3");
        }
        else if (currentRow >= matrixRows / 2 && currentCol >= matrixCols / 2) {
            console.log("Dead end 4");
        }
    }

    function searchPath(x, y) {
        while (true) {
            if (x + 1 < matrixRows && direction != 'up' && primaryMatrix[x + 1][y] == 0) {
                x = x + 1;
                direction = 'down';

            } else if (x - 1 >= 0 && direction != 'down' && primaryMatrix[x - 1][y] == 0) {
                x = x - 1;
                direction = 'up';
            } else if (y + 1 < matrixCols && direction != 'left' && primaryMatrix[x][y + 1] == 0) {
                y = y + 1;
                direction = 'right';
            } else if (y - 1 >= 0 && direction != 'right' && primaryMatrix[x][y - 1] == 0) {
                y = y - 1;
                direction = 'left';
            } else {
                position[0] = x;
                position[1] = y;
                break;
            }
            steps++;
        }
    }

    function modifyMatrix(coordinates) {
        let x = Number(coordinates[0]);
        let y = Number(coordinates[1]);
        for (let row = 0; row < secondaryMatrix.length; row++) {
            if (row + x < primaryMatrix.length) {
                for (let col = 0; col < secondaryMatrix[0].length; col++) {
                    let secondaryCell = secondaryMatrix[row][col];
                    if (secondaryCell == 1 && primaryMatrix[row + x][col + y] != undefined) {
                        primaryMatrix[row + x][col + y] = primaryMatrix[row + x][col + y] == 0 ? 1 : 0;
                    }
                }
            }
        }
    }
}


solve(
[[1, 1],
[1, 1],
[0, 0],
[1, 1],
[1, 1],
[1, 1]],
[
    [0, 0],
    [0, 0]  
],
[],
[2,1]);