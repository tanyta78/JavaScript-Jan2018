//1.	Print Letters
//Write a JS function that prints all the symbols of a string, each on a new line.
function printLetters(str) {
    for (let i in str) {
        console.log(`str[${i}] -> ${str[i]}`);

    }
}

//2.	Concatenate Reversed
//Write a JS function that reverses a series of strings and prints them concatenated from last to first.
function concatReversedStringArr(arr) {
    let arrAsString = arr.join('');
    let reversed = Array.from(arrAsString)
        .reverse()
        .join('');
    console.log(reversed);

}

//3.	Count Occurrences
//Write a JS function that counts how many times a string occurs in a given text. Overlapping strings are allowed.
function countOccurrences(target, text) {
    let count = 0;
    let index = text.indexOf(target);
    while (index > -1) {
        count++;
        index = text.indexOf(target, index + 1);

    }
    console.log(count);

}

//4.	Extract Text
//You will be given a text as a string. Write a JS function that extracts and prints only the text that’s surrounded by parentheses.
function extractTextInParantheses(text) {
    let result = [];
    let startIndex = text.indexOf('(');
    while (startIndex > -1) {

        let endIndex = text.indexOf(')', startIndex);
        if (endIndex == -1) {
            break;
        }
        let substr = text.substring(startIndex + 1, endIndex);
        startIndex = text.indexOf('(', endIndex);
        result.push(substr);
    }

    console.log(result.join(', '));

}

//5.	Aggregate Table
//You will be given a list of towns and incomes for each town, formatted in a table, separated by pipes (|). Write a JS function that extracts the names of all towns and produces a sum of the incomes. Note that splitting may result in empty string elements and the number of spaces may be different in every table.
//The input comes as array of string elements. Each element is one row in a formatted table.
function aggregateTable(arr) {
    let arrAsString = arr.join('');
    let data = arrAsString.split('|');
    let towns = [];
    let sum = 0;
    for (let index = 1; index < data.length; index += 2) {
        let town = data[index].trim();
        sum += Number(data[index + 1].trim());
        towns.push(town);
    }
    console.log(towns.join(', '));
    console.log(sum);
}

//6.	Restaurant Bill
//You are tasked to write a JS function that receives an array of purchases and their prices and prints all your purchases and their total sum.
function printBill(input) {
    let items = input.filter((x, i) => i % 2 == 0);
    let sum = input.filter((x, i) => i % 2 == 1)
        .map(Number)
        .reduce((a, b) => a + b);
    console.log(`You purchased ${items.join(', ')} for a total sum of ${sum}`);
}

//7.	Usernames
//Write a JS function that parses a list of emails and returns a list of usernames, generated from them. Each username is composed from the name of the email address, a period and the first letter of every element in the domain name. 
function parseEmails(input){
    let result=[];
    for (let index = 0; index < input.length; index++) {
        let data=input[index].split('@');
        let username = data[0]+'.';
        let domainParts = data[1].split('.');
        domainParts.forEach(p => username += p[0]);
        result.push(username);
    }

    console.log(result.join(', '));
    
}

//8.	Censorship
//Write a JS function that would censor news articles.The input comes as two arguments – one string and one array of strings. The first element is the text to scan and the array contains the strings to be censored.
//The output is the return value of your functions. Save the censored results in a string and return it.
function censorate(text,arr) {
    for (let censor of arr) {
        let replaced = '-'.repeat(censor.length);
        while (text.indexOf(censor) > -1) {
        text = text.replace(censor, replaced);
        }
    }
    console.log(text);
    
}

//9.	Escaping
//. Write a JS function that prints an HTML list from the data. The strings, however, may contain special HTML characters, which is an oft-used method for injection attacks. To prevent unwanted behavior or harmful content, all special characters need to be replaced with their encoded counterparts – they will look the same to the user, but will not pose a security risk. 


censorate('roses are red, violets are blue', [', violets are', 'red']);