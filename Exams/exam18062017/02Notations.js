function solve(input) {
    let numbers = [];
    let enoughOperands = true;
    for (let element of input) {
        let result = 0;

        if (!isNaN(element)) {
            numbers.push(element);
            continue;
        }

        let secondOperand = numbers.pop();
        let firstOperand = numbers.pop();

        if (firstOperand == undefined || secondOperand == undefined) {
            enoughOperands = false;

            break;
        }

        switch (element) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
        }

        numbers.push(result);
    }

    if (!enoughOperands) {
        console.log('Error: not enough operands!');
    } else {
       if (numbers.length==1) {
           console.log(numbers[0]);
       }else{
           console.log('Error: too many operands!');
           
       }
    }

}


solve([-1,1,'+',101,'*',18,'+',3,'/']);