//1.	Split a String with a Delimiter
//Write a JS function that splits a string with a given delimiter.

function splitWithDelimeter(text, delimiter) {
    console.log(text.split(delimiter).join('\n'));

}


//2.	 Repeat a String N Times
/*Write a JS function that repeats a given string, N times.
The input comes as 2 arguments. The first argument is a string that will represent the one you need to repeat. The second one is a number will represent the times you need to repeat it.
The output is a big string, containing the given one, repeated N times.*/
function repeatString(text, times) {
    console.log(text.repeat(times));

}

//3.	Check if String starts with a given Substring.
/*Write a JS function that checks if a given string, starts with a given substring.
The input comes as 2 string arguments. The first string will represent the main one. The second one will represent the substring.
The output is either “true” or “false” based on the result of the check.
The comparison is case-sensitive!*/
function checkTextStartsWithStr(text, str) {
    console.log(text.startsWith(str));
}
//4.	Check if String ends with given Substring.
//Write a JS function that checks if a given string, ends with a given substring.
function checkTextEndsWithStr(text, str) {
    console.log(text.endsWith(str));
}


//5.	*Capitalize the Words
//Write a JS function that capitalizes the given words. You need to make every word’s first letter – uppercase and all other letters – lowercase. 
function capitalizeWords(text) {

    let result = text.toLowerCase()
        .split(' ')
        .map(w => w[0].toUpperCase() + w.substr(1));
    console.log(result.join(' '));

}

//6.	Capture the Numbers
/*Write a JS function that finds all numbers in a sequence of strings.
The input comes as array of strings. Each element represents one of the strings.
The output is all the numbers, extracted and printed on a single line – each separated by a single space.*/

function matchNumbersInText(text) {

    console.log(text.join(' ').match(/\d+/g).join(' '));
}

//7.	Find Variable Names in Sentences
/*Write a JS function that finds all variable names in a given string. A variable name starts with an underscore (“_”) and contains only Capital and Non-Capital English Alphabet letters and digits. Extract only their names, without the underscore. Try to do this only with regular expressions.
The input comes as single string, on which you have to perform the matching.
The output consists of all variable names, extracted and printed on a single line, each separated by a comma.*/
function findNameInString(str) {
    console.log(str.match(/\b_([a-zA-Z0-9]+)\b/g)
        .map(v => v.substr(1))
        .join(','));
}

//8.	Find Occurrences of Word in Sentence
/*Write a JS function that finds, how many times a given word, is used in a given sentence. Note that letter case does not matter – it is case-insensitive. 
The input comes as 2 string arguments. The first one will be the sentence, and the second one – the word.
The output is a single number indicating the amount of times the sentence contains the word
*/
function findOccurrencesOfWordInText(text, word) {
    let count = 0;
    let regex = new RegExp("\\b" + word + "\\b", "gi");
    // let match = regex.exec(text);

    // while(match) {
    //     count++;
    //     match = regex.exec(text);
    // }
    count = text.match(regex) == null ? 0 : text.match(regex).length;

    console.log(count);

}

//9.	*Extract the Links
//Write a JS function that extracts links from a given text. The text will come in the form of strings, each representing a sentence. You need to extract only the valid links from it.The Sub-Domain must always be “www”. The Domain name can consist of English alphabet letters (uppercase and lowercase), digits and dashes (“–“). The Domain extension consists of one or more domain blocks, a domain block consists of a dot followed by one or more lowercase English alphabet letters, a Domain extension must have at least one domain block in order to be valid. The Sub-Domain and Domain name must be separated by a single dot. Any link that does NOT follow the specified above rules should be treated as invalid.
function extractLinks(text) {
    let links = [];
    let regex = /www\.[A-Za-z0-9\-]+(\.[a-z]+)+/g;

    for (let sentence of text) {
        let match = null;
        let index = 0;
        while (match = regex.exec(sentence)) {
            console.log(match[0]);
        }
    }
}

//10.	**Secret Data
/*Write a JS function that hides essential client data from secret documents that went public. You have to hide people’s names, phone numbers, ids and secret base names. 
•	The names of the clients will be preceded by a single asterisk (“*”), they will always be exactly one word, they will contain only English alphabet letters, they will start with a capital letter and they will always be followed by either a space, a tabulation or the end of the string. Anything else is NOT to be considered as a name.

•	The phone numbers of the clients will be preceded by a single plus sign (“+”) and will consist of exactly 10 symbols. The phone numbers can consist only of digits and dashes and they will always be followed by a space, tabulation or the end of the string. Anything else is NOT to be considered as a phone number.

•	The IDs of the clients will be preceded by a single exclamation mark (“!”). The IDs of the clients will consist only of Lowercase and Uppercase English alphabet letters and digits and they will always be followed by a space, tabulation or the end of the string. Anything else is NOT to be considered as an ID.

•	The names of the secret bases will be preceded by a single underscore (“_”) and will consist only of Uppercase and Lowercase English alphabet letters and digits and they will always be followed by a space, tabulation or the end of the string. Anything else is NOT to be considered as a secret base name.
Constraints
•	Usernames, phone numbers, IDs and names of secret bases can start glued to other text.
•	Usernames, phone numbers, IDs and names of secret bases will never be split given across 2 lines.
•	Usernames, phone numbers, IDs and names of secret bases will always have a space, tabulation or the end of the string after them.
The input comes as an array of strings. Each string represents a sentence of the secret document. You need to find every client data element that is supposed to be secret, and hide it, by replacing it with a string of vertical bars (“|”) with the same length, as the discovered element. 
NOTE: The preceding symbol counts towards the discovered element’s length when deciding how many pipes to use to cover it.
The output should be the same document, with the sensitive client data replaced by pipes.  See the example for more info.*/

function secretData(input) {
    let nameRegex = /\*[A-Z]{1}[a-zA-Z]*(?= |\t|$)/g;
    let phoneRegex = /\+[0-9\-]{10}(?=\t| |$)/g;
    let idRegex = /![a-zA-Z0-9]+(?=\t| |$)/g;
    let baseRegex = /_[a-zA-Z0-9]+(?=\t| |$)/g;

    for(let sentence of input) {
        sentence = sentence.replace(nameRegex, m => "|".repeat(m.length));
        sentence = sentence.replace(phoneRegex, m => "|".repeat(m.length));
        sentence = sentence.replace(idRegex, m => "|".repeat(m.length));
        sentence = sentence.replace(baseRegex, m => "|".repeat(m.length));

        console.log(sentence);
    }
}

//extractLinks(['Join WebStars now for free, at www.web-stars.com', 'You can also support our partners:', 'Internet - www.internet.com', 'WebSpiders - www.webspiders101.com', 'Sentinel - www.sentinel.-ko']);
//findOccurrencesOfWordInText('The waterfall was so high, that the child couldn’t see its peak.','e');
//findNameInString('The _id and _age variables are both integers.');
//matchNumbersInText(['The300','What is that?','I think it’s the 3rd movie.','Lets watch it at 22:45']);
//capitalizeWords('Capitalize these words');
 //checkTextEndsWithStr('This sentence ends with fun?','fun?');
//checkTextStartsWithStr('How have you been?','how');
//repeatString('repeat', 5);
//splitWithDelimeter('One-Two-Three-Four-Five', '-');