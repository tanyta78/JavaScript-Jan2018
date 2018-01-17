//01Write a JS function that calculates the product of two numbers.
function multiplyNums(a,b){
      return a*b;
}
//02Write a JS function to calculate how many boxes will be needed to fit n bottles if each box fits k bottles.
function boxesAndBottles(bottles,capacity) {
   console.log(Math.ceil(bottles/capacity) );
}
//03Write a JS function to check whether a year is leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400.
function leapYear(year) {
    if((year%4===0&&year%100!==0)||
        year%400===0){
        return "yes"}
        else {
        return "no"
    }
}


//04Write a JS function that calculates circle area by given radius. Print the area as it is calculated and then print it rounded to two decimal places.
function circleArea(radius) {
    let area=Math.PI*radius*radius;
    console.log(area);
    console.log(area.toFixed(2));
}

//05 Write a JS function that calculates a triangle’s area by its 3 sides.
function triangleArea(a,b,c) {
    let s =(a + b + c)/2;
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    console.log(area);

}

//06Write a JS function to calculate a cone’s volume and surface area by given height and radius at the base.
function coneVolumeAndArea(radius,height) {
let volume =Math.PI*radius*radius*height/3;
let area = Math.PI*radius*(Math.sqrt(radius*radius+height*height)+radius);
console.log(`volume = ${volume.toFixed(4)}`);
console.log(`area = ${area.toFixed(4)}`);
}

//07Write a JS function to check if a number is odd or even or invalid (fractions are neither odd nor even).
function oddOrEven(number) {
    if(number%2===0){
        console.log("even");
    }else if (Math.abs(number%2)===1){
        console.log("odd");
    }else{
        console.log("invalid");
    }
}

//08Write a JS function to print "fruit", "vegetable" or "unknown" depending on the input string.
function fruitOrVegetable(input) {
    switch (input){
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'peach':
            console.log('fruit');
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'garlic':
        case 'parsley':
            console.log('vegetable');
            break;
        default:
            console.log('unknown');
            break;
    }
}

//09Write a JS function to print the numbers from 1 to n. Return a string holding HTML list with the odd lines in blue and even lines in green. See the example for more information.
function colorfulNumbers(n) {
   let result = "<ul>\n" ;
    for (let i = 1; i <= n; i++) {
      let color = i%2===0 ? 'blue':'green';
      result+=`    <li><span style='color:${color}'>${i}</span></li>\n`;
    }
    result+= "</ul>\n" ;
    return result;
}

//10Write a JS function to print a chessboard of size n X n.
function drawChessboard(n) {
    let result = '<div class="chessboard">\n';
    for (let row = 0; row < n; row++) {
        result+='  <div>\n';
        for (let col = 0; col < n; col++) {
           let color =(row+col)%2===0 ? 'black':'white';
            result+=`    <span class="${color}"></span>\n`;
        }
        result+='  </div>\n';
    }
    result+='</div>\n';
    return result;
}

//11BinaryLog Write a JS function that prints the binary logarithm (log2 x) for each number in the input.
function binaryLog(arr) {
    for (let num of arr) {
        console.log(Math.log2(num));
    }
}

//12 Write a JS function to check if a number is prime (only wholly divisible by itself and one).
function primeNumberChecker(n) {
    let isPrime = true;

    if (n <= 1) {
        // проверяваме дали числото е единица или отрицателно
        isPrime = false;
    }else if (n == 2) {
        // две е просто число
        isPrime= true;
    } else if (n % 2 == 0){
        //  проверяваме дали числото е четно
        isPrime = false;
    } else{
        //  обхождаме нечетните числа до корен квадратен от числото
        for (let i = 3; i <= Math.ceil(Math.sqrt(n)); i += 2)        {
            if (n % i == 0) isPrime = false;
        }
    }

    console.log(isPrime ? 'true':'false');
}

primeNumberChecker(81)

