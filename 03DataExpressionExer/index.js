"use strict";
//1.Hello, JavaScript!
function helloWorld(name) {
    console.log(`Hello, ${name}, I am JavaScript!`);
}

//2.Area and Perimeter
function rectangleAreaAndPerimeter(sideA, sideB) {
    let area = sideA * sideB;
    let perimeter = 2 * (sideA + sideB);
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

//3.Distance over Time
function distanceOverTime(params) {
    let speed1 = params[0];
    let speed2 = params[1];
    let timeInSec = params[2];

    let distance1 = speed1 * timeInSec / 3600;
    let distance2 = speed2 * timeInSec / 3600;

    let result = Math.abs(distance1 - distance2) * 1000;
    console.log(result);

}

//4.Distance in 3D
function distanceIn3d(param) {
    let x1 = param[0];
    let y1 = param[1];
    let z1 = param[2];
    let x2 = param[3];
    let y2 = param[4];
    let z2 = param[5];

    let sideX = Math.abs(x1 - x2);
    let sideY = Math.abs(y1 - y2);
    let sideZ = Math.abs(z1 - z2);
    let distanceXY = Math.sqrt(sideX * sideX + sideY * sideY);
    let result = Math.sqrt(sideZ * sideZ + distanceXY * distanceXY);

    console.log(result);
}

//5.Grads to Degrees
function gradstodegrees(grad) {
    grad = grad % 400;
    let degree = grad * 0.9;
    let result = degree < 0 ? 360 + degree : degree;
    console.log(result);
}

//6.Compound Interest
function calculateInterest(param) {
    let principalSum = param[0];
    let interestRateInPersent = param[1];
    let compondingPeriodInMonths = param[2];
    let totalTimespanInYears = param[3];

    let compondingFrequence = 12 / compondingPeriodInMonths;
    let nominalInterestRate = interestRateInPersent / 100;

    let f = principalSum * Math.pow((1 + (nominalInterestRate / compondingFrequence)), compondingFrequence * totalTimespanInYears);
    console.log(f.toFixed(2));
}

//7.*Rounding
function rounding([number, rounding]) {
    if (rounding > 15) {
        rounding = 15;
    }
    console.log(number.toFixed(rounding));
}

function solve([number, presigion]) {
    [number, presigion] = [number, presigion].map(Number);
    if (presigion > 15) {
        presigion = 15;
    }
    let denom = Math.pow(10, presigion);
    number = Math.round(number * denom) / denom;
    console.log(number);

}

//8.Imperial Units
function inchesToImperialUnits(inches) {
    console.log(`${inches / 12 | 0}'-${inches % 12}"`);
}

//9.Now Playing
function playingInfo(params) {
    let trackName = params[0];
    let artist = params[1];
    let duration = params[2];
    console.log(`Now Playing: ${artist} - ${trackName} [${duration}]`)
}

//10.Compose Tag
function toTag(params) {
    let fileLocation = params[0];
    let text = params[1];
    console.log(`<img src="${fileLocation}" alt="${text}">`)
}

//11.Binary to Decimal
function binaryToDecimal(binaryNum) {
    let digit = parseInt(binaryNum, 2);
    console.log(digit);
}

//12.Assign Properties
function assignProp(args) {
    let obg = {
        [args[0]]: args[1],
        [args[2]]: args[3],
        [args[4]]: args[5]
    }
    console.log(obg);
}

//13.*Last Month
function solve([day, month, year]) {
    let date = new Date(year, month - 1, 0);
    console.log(date.getDate());
}

//14.Biggest of 3 Numbers
function biggestNum(params) {
    let max = Math.max(params[0], params[1], params[2]);
    console.log(max);
}

function biggestNumWithIf(params) {
    let max = params[0];
    if (max < params[1]) {
        max = params[1]
    } else if (max < params[2]) {
        max = params[2]
    }

    console.log(max);
}

//15.Point in Rectangle
function pointInRectangle(params) {
    let [x, y, xMin, xMax, yMin, yMax] = params;
    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        console.log("inside");
    } else {
        console.log("outside");
    }
}

//16.Odd Numbers 1 to N
function oddNumInRange(n) {
    for (let index = 1; index <= n; index += 2) {
        console.log(index);

    }
}

//17.Triangle of Dollars
function drawTriangleOfDollars(num) {
    for (let index = 0; index < num; index++) {
        //console.log('$'.repeat(index+1));  
        console.log(new Array(index + 1).join('$'));

    }
}

//18.	Movie Prices
function getTicketPrice(params) {
    let [title, day] = params.map(function (x) {
        return x.toLowerCase()
    });

    if (title == 'the godfather') {
        switch (day) {
            case "monday":
                return 12;
                break;
            case "tuesday":
                return 10;
                break;
            case "wednesday":
                return 15;
                break;
            case "thursday":
                return 12.50;
                break;
            case "friday":
                return 15;
                break;
            case "saturday":
                return 25;
                break;
            case "sunday":
                return 30;
                break;
            default:
                return "error";
                break;
        }
    } else if (title == "schindler's list") {
        switch (day) {
            case "monday":
                return 8.50;
                break;
            case "tuesday":
                return 8.50;
                break;
            case "wednesday":
                return 8.50;
                break;
            case "thursday":
                return 8.50;
                break;
            case "friday":
                return 8.50;
                break;
            case "saturday":
                return 15;
                break;
            case "sunday":
                return 15;
                break;
            default:
                return "error";
                break;
        }
    } else if (title == "casablanca") {
        switch (day) {
            case "monday":
                return 8;
                break;
            case "tuesday":
                return 8;
                break;
            case "wednesday":
                return 8;
                break;
            case "thursday":
                return 8;
                break;
            case "friday":
                return 8;
                break;
            case "saturday":
                return 10;
                break;
            case "sunday":
                return 10;
                break;
            default:
                return "error";
                break;
        }
    } else if (title == "the wizard of oz") {
        switch (day) {
            case "monday":
                return 10;
                break;
            case "tuesday":
                return 10;
                break;
            case "wednesday":
                return 10;
                break;
            case "thursday":
                return 10;
                break;
            case "friday":
                return 10;
                break;
            case "saturday":
                return 15;
                break;
            case "sunday":
                return 15;
                break;
            default:
                return "error";
                break;
        }
    }

}

/*19.	Quadratic Equation
a*x*x + b*x + c = 0 */
function solveQuadraticEquation(a, b, c) {

    let d = b * b - 4 * a * c;

    if (d > 0) {
        let root1 = (-b + Math.sqrt(d)) / (2 * a);
        let root2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log(Math.min(root1, root2));
        console.log(Math.max(root1, root2));

    } else if (d < 0) {
        console.log("No");

    } else {
        let root = -b / (2 * a);
        console.log(root);
    }
}

//20.	Multiplication Table
function drawMultiplicationTable(n) {
    console.log('<table border="1">');
    let firstRow = "<tr><th>x</th>";
    for (let index = 1; index <= n; index++) {
        firstRow += `<th>${index}</th>`
    }
    firstRow += "</tr>";
    console.log(firstRow);

    for (let row = 1; row <= n; row++) {
        let currentRow = `<tr><th>${row}</th>`;
        for (let index = 1; index <= n; index++) {
            currentRow += `<td>${index * row}</td>`
        }
        currentRow += "</tr>";
        console.log(currentRow);

    }
    console.log('</table>');
}

//21.	Figure of 4 Squares
function drawFigureOfSquares(n) {
    let symbolRepeat = (2 * n - 4) / 2;
    let rowRepeat = n % 2 == 1 ? (n - 3) / 2 : (n - 4) / 2;
    let oddRow = '+' + '-'.repeat(symbolRepeat) + '+' + '-'.repeat(symbolRepeat) + '+';
    let evenRow = '|' + ' '.repeat(symbolRepeat) + '|' + ' '.repeat(symbolRepeat) + '|';

    console.log(oddRow);  
    if (n!=2) {
        for (let index = 0; index < rowRepeat; index++) {
            console.log(evenRow);       
         }
         console.log(oddRow);
         for (let index = 0; index < rowRepeat; index++) {
             console.log(evenRow);       
          }
         console.log(oddRow);       
    }
    


}

//22.	** Monthly Calendar
function drawCalendar([day, month, year]) {
    [day, month, year] = [day, month, year].map(Number)
 
    let today = day
    let firstDayInCurrMonth = new Date(year, month - 1, 1).getDay()
    let lastDayInCurrMonth = new Date(year, month, 0).getDay()
 
    let prevMonthLength = new Date(year, month - 1, 0).getDate()
    let currMonthLenght = new Date(year, month, 0).getDate()
 
    let prevMonth = getPrevMonth(firstDayInCurrMonth, prevMonthLength)
    let currMonth = getCurrMonth(currMonthLenght)
    let nextMonth = getNextMonth(6 - lastDayInCurrMonth)
 
    currMonth[today - 1] = `<td class="today">${today}</td>`
 
    let allFormatedDates = [].concat(prevMonth, currMonth, nextMonth)
    let calendarRows = allFormatedDates.length / 7
 
    let html = '<table>\n'
    html += '\t<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n'
    let row = ''
 
    for (let week = 0; week < calendarRows; week++) {
        row = '\t<tr>'
        for (let index = week * 7; index < week * 7 + 7; index++) {
            row += allFormatedDates[index]
        }
        row += '</tr>\n'
        html += row
    }
 
    html += '</table>'
 
    return html
 
    function getPrevMonth(datesCount, currDate) {
        currDate -= datesCount - 1
        return new Array(datesCount).fill(0).map(() => {return `<td class="prev-month">${currDate++}</td>`})
    }
   
    function getCurrMonth(monthLength) {
        let currDate = 1
        return new Array(monthLength).fill(0).map(() => {return `<td>${currDate++}</td>`})
    }
 
    function getNextMonth(datesCount) {
        let currDate = 1
        return new Array(datesCount).fill(0).map(() => {return `<td class="next-month">${currDate++}</td>`})
    }
}

console.log(drawCalendar([24, 12, 2012]))