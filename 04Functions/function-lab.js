//1.	Triangle of Stars
function drawTriangle(n) {
    for (let index = 0; index < n; index++) {
        console.log('*'.repeat(index + 1));
    }
    for (let index = n - 1; index > 0; index--) {
        console.log('*'.repeat(index));
    }
}

//2.	Square of Stars
function drawSquareOfStars(n) {
    if (n == null) {
        n = 5
    }

    let row = '* '.repeat(n);
    for (let index = 0; index < n; index++) {
        console.log(row);
    }

}

//3.	Palindrome
function checkIsPalindrome(input) {
    let reverse = input.split("").reverse().join("");
    return reverse == input;
}

//4.	Day of the Week
function dayOfTheWeek(day) {
    let daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let index = daysOfTheWeek.indexOf(day);
    console.log(index == -1 ? 'error' : index + 1);

}

//5.	Functional Calculator
function myCalculator(num1, num2, operator) {
    //let [num1, num2, operator] = [params[0],params[1],params[2]];
    let sum = function (num1, num2) { return num1 + num2; }
    let sub = function (num1, num2) { return num1 - num2; }
    let multiply = function (num1, num2) { return num1 * num2; }
    let divide = function (num1, num2) { return num1 / num2; }

    switch (operator) {
        case '+': console.log(sum(num1, num2));
            break;
        case '-': console.log(sub(num1, num2));
            break;
        case '*': console.log(multiply(num1, num2));
            break;
        case '/': console.log(divide(num1, num2));
            break;
        default:
            break;
    }
}

//6.	Aggregate Elements
function aggregate(params) {
    let sum = 0;
    params.forEach(element => {
        sum += element

    });
    console.log(sum);
    sum = 0;
    params.forEach(element => {
        sum += 1 / element

    });
    console.log(sum);
    let result = '';
    params.forEach(element => result += element)
    console.log(result);

}

//7.	*Words Uppercase
// function wordsToUppercase(params) {

//     let inputToUpper = params.toUpperCase();
//     let words = extractWords();
//     words = words.filter(w=> w!='').join(', ');
//     return words;

//     function extractWords() { return inputToUpper.split(/\W+/)

//     }
// }

function wordsToUppercase(params) {
    
        let words = params.toUpperCase()
            .split(/\W+/)
            .filter(w => w != '')
            .join(', ');
    return words;

}
console.log(wordsToUppercase('Hi, how are you?'));
