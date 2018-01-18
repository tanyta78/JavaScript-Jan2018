//1.	Hello, JavaScript!
function helloWorld(name) {
    console.log(`Hello, ${name}, I am JavaScript!`)
}

//2.	Area and Perimeter
function rectangleAreaAndPerimeter(sideA, sideB) {
    let area = sideA * sideB;
    let perimeter = 2 * (sideA + sideB);
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

//3.	Distance over Time
function distanceOverTime(params) {
    let speed1 = params[0];
    let speed2 = params[1];
    let timeInSec = params[2];

    let distance1 = speed1 * timeInSec / 3600;
    let distance2 = speed2 * timeInSec / 3600;

    let result = Math.abs(distance1 - distance2) * 1000;
    console.log(result);

}

//4.	Distance in 3D
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

//5.	Grads to Degrees
function gradstodegrees(grad) {
    grad = grad % 400;
    let degree = grad * 0.9;
    let result = degree < 0 ? 360 + degree : degree;
    console.log(result);
}

//6.	Compound Interest
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

//7.	*Rounding
function rounding([number, rounding]) {
    if (rounding > 15) {
        rounding = 15;
    }
    console.log(number.toFixed(rounding));
}

function solve([number,presigion]){
    [number,presigion]=[number,presigion].map(Number);
     if (presigion>15) {presigion=15;
       }
  let denom=Math.pow(10,presigion);
     number=Math.round(number*denom)/denom;
      console.log(number);
     
  }

  //8.	Imperial Units
  function inchesToImperialUnits(inches){
      console.log(`${inches/12|0}'-${inches%12}"`);
  }

  //9.	Now Playing
  function playingInfo(params) {
      let trackName = params[0];
      let artist = params[1];
      let duration = params[2];
      console.log(`Now Playing: ${artist} - ${trackName} [${duration}]`)
  }

  //10.	Compose Tag
  function toTag(params) {
      let fileLocation = params[0];
      let text = params[1];
      console.log(`<img src="${fileLocation}" alt="${text}">`)
  }

  //11.	Binary to Decimal
  function binaryToDecimal(binaryNum) {
      
  }
  toTag(['smiley.gif', 'Smiley Face']);