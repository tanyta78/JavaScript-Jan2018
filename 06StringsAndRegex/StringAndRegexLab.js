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
function parseEmails(input) {
    let result = [];
    for (let index = 0; index < input.length; index++) {
        let data = input[index].split('@');
        let username = data[0] + '.';
        let domainParts = data[1].split('.');
        domainParts.forEach(p => username += p[0]);
        result.push(username);
    }

    console.log(result.join(', '));

}

//8.	Censorship
//Write a JS function that would censor news articles.The input comes as two arguments – one string and one array of strings. The first element is the text to scan and the array contains the strings to be censored.
//The output is the return value of your functions. Save the censored results in a string and return it.
function censorate(text, arr) {
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
function escapingHtml(input) {
    return "<ul>\n" +
    input.map(htmlEscape).map(
      item => `  <li>${item}</li>`).join("\n") +"\n"+
    "</ul>\n";

    function htmlEscape(str) {
        let symbols = { '"': '&quot;', '&': '&amp;',
        "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return str.replace(/['"&<>]/g,ch=>symbols[ch]);
    }

}

//10.	Match All Words
//Write a JS function that matches all words in a text, a word is anything that consists of letters, numbers or underscores (_).
function matchWords(text) {
    console.log(text.trim().split(/\W+/g).filter(w => w!="").join('|'));
    
}

//11.	Simple Email Validation
//Write a JS function that validates simple emails. The emails should have a username, which consists only of English alphabet letters and digits, a “@” sign, and a domain name after it. The domain should consist only of 2 strings separated by a single dot. The 2 strings should contain NOTHING but lowercase English alphabet letters.
function validateEmail(input) {
    let pattern=/^[a-zA-Z0-9]+@[a-z]+[.][a-z]+$/g;
    let result=pattern.test(input);
    if (result) {
        console.log("Valid");
      } else {
        console.log("Invalid");
      }
    
}

//12.	Expression Split
//Write a JS function that splits a passed in JS code into separate parts. The passed in code will always have one or more spaces between operators and operands. Normal brackets (‘(‘,’)’), commas (,), semicolons (;) and the member access operator (‘.’(dot), as in “console.log”) should also be used for splitting. String literals will always be initialized with double quotes (") and will contain only letters. Make sure there are no empty entries in the output.
function expressionSplit(input) {
    let elements = input.split(/[\s(),;.]+/);
    console.log(elements.join("\n"));

}

//13.	Match the Dates
//Write a JS function that finds and extracts all the dates in the given sentences. The dates should be in format d-MMM-yyyy. Example: 12-Jun-1999, 3-Dec-2017.
function matchDates(arr) {
    let pattern =
    /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
  let dates = [], match;
  for (let str of arr)
    while (match = pattern.exec(str))
      dates.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
  console.log(dates.join("\n"));

}

//14.	Parse the Employee Data
//Write a JS function that validates employee data, and stores it if it is valid. The employee data consists of 3 elements – employee name, employee salary and employee position.
function validateEmployeeData(arr) {
    let pattern=/^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;
    for (let element of arr) {
        let match = pattern.exec(element);
        if (match)
          console.log(`Name: ${match[1]}\n` +
            `Position: ${match[3]}\n` +
            `Salary: ${match[2]} `);
      }
    
}

//15.	Form Filler
/*Write a JS function that automatically fills a form for a lazy client. The client will give you 3 elements of data about himself – his username, his email, and his phone number. After those 3 elements you will be given the form, as text, with several placeholders in it. You must replace each valid placeholder with its corresponding value. The placeholders have special symbols and can contain only English alphabet letters. There are 3 types of valid placeholders:
•	<!{letters}!> - put the given username in place of this
•	<@{letters}@> - put the given email in place of this
•	<+{letters}+> - put the given email in place of this
The input comes as four string arguments and an array of strings. The first 3 arguments will represent the username, the email and the phone number. Each element of the array will represent a sentence, if you find a placeholder somewhere in those sentences you should replace it.
The output should be printed on the console. The output should consist of all sentences, printed again, this time with their placeholders replaced with the actual data.
*/

function formFiller(name,email,phone,textAsArr) {
    let usernamePattern=/<![a-zA-Z]+!>/g;
    let emailPattern=/<@[a-zA-Z]+@>/g;
    let phonePattern=/<[+][a-zA-Z]+[+]>/g;
    let textAsStr = textAsArr.join('\n');
    textAsStr=textAsStr.replace(usernamePattern,name);
    textAsStr=textAsStr.replace(emailPattern,email);
    textAsStr=textAsStr.replace(phonePattern,phone);
    console.log(textAsStr);
    
}

//var2
function formFiller2(name,email,phone,textAsArr) {
   textAsArr.forEach(line=>{
       line = line.replace(/<([!@+])[a-zA-Z]+([!@+])>/g, repl);
       console.log(line);
   });
    
   function repl(match,p1){
       switch (p1) {
           case '!':return username;
           case '@':return email;
           case '+':return phone; 
       }
   }
    
}

//16.	*Match Multiplication
//You are given a text with numbers multiplied by * in format {num1} * {num2}. Your job is to extract each two numbers in the above format, multiply them and replace them with their product. The first number is integer, can be negative. The second number is integer or floating-point and can be negative. There could be whitespace around the “*” symbol

function matchMultiplication(input) {
    input = input.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g, (match, num1, num2) => Number(num1) * Number(num2));
    console.log(input);
}

formFiller2('Pesho',
'pesho@softuni.bg',
'90-60-90',
['Hello, <!username!>!',
 'Welcome to your Personal profile.',
 'Here you can modify your profile freely.',
 'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
 'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
 'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
);