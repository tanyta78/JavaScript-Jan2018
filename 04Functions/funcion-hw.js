//1.	Inside Volume
//Write a JS function that determines whether a point is inside the volume, defined by the box.
function insideOrOutside(input) {
    for (let i = 0; i < input.length; i += 3) {
        let x = input[i];
        let y = input[i + 1];
        let z = input[i + 2];

        if (inVolume(x, y, z)) {
            console.log('inside');

        } else {
            console.log('outside');

        }
    }
    function inVolume(x, y, z) {
        let xMin = 10, xMax = 50, yMin = 20, yMax = 80, zMin = 15, zMax = 50;

        if (x >= xMin && x <= xMax) {
            if (y >= yMin && y <= yMax) {
                if (z >= zMin && z <= zMax) {
                    return true;
                }

            }

        }
        return false;
    }
}

//2.	Road Radar
function inSpeedLimit([speed, area]) {
    let overlimit = 0;
    switch (area) {
        case "motorway":
            overlimit = speed - 130;
            break;
        case "interstate":
            overlimit = speed - 90;
            break;
        case "city":
            overlimit = speed - 50;
            break;
        case "residential":
            overlimit = speed - 20;
            break;
        default:
            break;
    }

    if (overlimit > 40) {
        console.log("reckless driving");

    } else if (overlimit > 20) {
        console.log("excessive speeding");
    } else if (overlimit > 0) {
        console.log("speeding");

    }
}

//3.	Template format
function xmlTemplate(input) {
    let temp = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';
    for (let i = 0; i < input.length; i += 2) {
        let question = input[i];
        let answer = input[i + 1];
        temp += `  <question>\n    ${question}\n   </question>\n  <answer>\n    ${answer}\n  </answer>\n`;
    }
    temp += `</quiz>\n`;
    console.log(temp);

}

//4.	Cooking by Numbers
function cookingByNumber(input) {
    let number = Number(input[0]);

    for (let index = 1; index < input.length; index++) {
        let cmd = input[index];

        switch (cmd) {
            case 'chop':
                number /= 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number += 1;
                console.log(number);
                break;
            case 'bake':
                number *= 3;
                console.log(number);
                break;
            case 'fillet':
                number -= 0.2 * number;
                console.log(number);
                break;
            default:
                break;
        }

    }
}

//5.	Modify Average
function modifyAvg(input) {
    let digits = input.toString();

    while (true) {
        let result = getAvg(digits);
        if (result > 5) {
            console.log(digits);
            break;
        }
        digits += '9';
    }

    function getAvg(arr) {
        var total = 0;
        for (const element of arr) {
            total += Number(element);
        }
        return total / arr.length;
    }

}

//6.	Validity Checker
function validityChecker([x1, y1, x2, y2]) {

    resultLogger(x1, y1, 0, 0);
    resultLogger(x2, y2, 0, 0);
    resultLogger(x1, y1, x2, y2);


    function resultLogger(x1, y1, x2, y2) {
        let result = 'invalid';
        if (Number.isInteger(distance(x1, y1, x2, y2))) {
            result = 'valid';
        }
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${result}`);
    }

    function distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }

}

//7.	Treasure Locator
function tresureLocator(params) {
    for (let index = 0; index < params.length; index += 2) {
        let x = params[index];
        let y = params[index + 1];

        if (isInside(1, 3, 1, 3, x, y)) {
            console.log('Tuvalu');
        } else if (isInside(8, 9, 0, 1, x, y)) {
            console.log('Tokelau');
        } else if (isInside(5, 7, 3, 6, x, y)) {
            console.log('Samoa');
        } else if (isInside(0, 2, 6, 8, x, y)) {
            console.log('Tonga');
        } else if (isInside(4, 9, 7, 8, x, y)) {
            console.log('Cook');
        } else {
            console.log('On the bottom of the ocean');
        }
    }


    function isInside(xMin, xMax, yMin, yMax, x, y) {
        return (x >= xMin && x <= xMax) && (y >= yMin && y <= yMax);
    }
}

//8.	Trip Length
function tripLenght([x1, y1, x2, y2, x3, y3]) {

    let distance12 = distance(x1, y1, x2, y2);
    let distance23 = distance(x2, y2, x3, y3);
    let distance13 = distance(x1, y1, x3, y3);
    let maxDistance = Math.max(distance12, distance13, distance23);

    if (distance13 == maxDistance) {
        let a = distance12 + distance23;
        console.log('1->2->3: ' + a);
    } else if (distance12 == maxDistance) {
        let c = distance23 + distance13;
        console.log('1->3->2: ' + c);
    }
    else if (distance23 == maxDistance) {
        let b = distance13 + distance12;
        console.log('2->1->3: ' + b);
    }


    function distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }
}

//9.	*Radio Crystals
function radioCristal(input) {
    var target = Number(input[0]);

    function processOperation(cristal, operation) {
        switch (operation) {
            case 'cut':
                cristal = cristal / 4;
                cutCount++;
                break;
            case 'lap':
                cristal *= 0.8;
                lapCount++;
                break;
            case 'grind':
                cristal -= 20;
                grindCount++;
                break;
            case 'etch':
                cristal -= 2;
                etchCount++;
                break;
            case 'xRay':
                cristal += 1;
                xrayCount++;
               return cristal;
        }

        return transportAndWashing(cristal);
    }

    function transportAndWashing(cristal) {
        return Math.floor(cristal);
    }

    for (let i = 1; i < input.length; i++) {
        let currentCristal = input[i];
        var cutCount = 0,
            lapCount = 0,
            grindCount = 0,
            etchCount = 0,
            xrayCount = 0,
            used = false;

       console.log(`Processing chunk ${currentCristal} microns`);
        while (currentCristal != target) {
            while (currentCristal / 4 >= target - 1) {
                currentCristal = processOperation(currentCristal, "cut");
            }
            while (currentCristal / 1.25 >= target - 1) {
                currentCristal = processOperation(currentCristal, "lap");
            }
            while (currentCristal - 20 >= target - 1) {
                currentCristal = processOperation(currentCristal, "grind");
            }
            while (currentCristal - 2 >= target - 1) {
                currentCristal = processOperation(currentCristal, "etch");
            }
            if (currentCristal + 1 == target && used == false) {
                used = true;
                currentCristal = processOperation(currentCristal, "xRay");
            }
        }

        if (cutCount > 0) {
            console.log(`Cut x${cutCount}`)
            console.log("Transporting and washing");
        }

        if (lapCount > 0) {
            console.log(`Lap x${lapCount}`)
            console.log("Transporting and washing");
        }

        if (grindCount > 0) {
            console.log(`Grind x${grindCount}`)
            console.log("Transporting and washing");
        }

        if (etchCount > 0) {
            console.log(`Etch x${etchCount}`)
            console.log("Transporting and washing");
        }

        if (used) {
            console.log(`X-ray x1`)
        }

        console.log(`Finished crystal ${target} microns`);
    }
}


//10.	**DNA Helix
function printDNAHelix(num) {
    var sequence='ATCGTTAGGG';
    var round = 0;
    for (let i = 0; i < num; i++) {
        let row = i%4;
        switch (row) {
            case 0:
                console.log('**'+sequence[(i+round)%10]+sequence[(i+1+round)%10]+'**');
                break;
            case 1:
                console.log('*'+sequence[(i+1+round)%10]+'--'+sequence[(i+2+round)%10]+'*');
                break;
            case 2:
                console.log(sequence[(i+2+round)%10]+'----'+sequence[(i+3+round)%10]);
                break;
            case 3:
                console.log('*'+sequence[(i+3+round)%10]+'--'+sequence[(i+4+round)%10]+'*');
                round+=4;
                break;
            default:
                break;
        }
       
       
    }
}
printDNAHelix(10);