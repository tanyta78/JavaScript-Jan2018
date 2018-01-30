//1.	Towns to JSON
/*You’re tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each string represents a row of a table, with values on the row encompassed by pipes "|" and optionally spaces. The table will consist of exactly 3 columns “Town”, “Latitude” and “Longitude”. The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
*/
function townsToJSON(arr) {
    let colNames = arr.shift()
        .split('|')
        .filter(e => e != '');
    let towns = [];
    for (let row = 0; row < arr.length; row++) {
        let tokens = arr[row].split('|')
            .filter(e => e != '')
            .map(e => e.trim());
        let townObj = { Town: tokens[0], Latitude: Number(tokens[1]), Longitude: Number(tokens[2]) };
        towns.push(townObj);
    }

    console.log(JSON.stringify(towns));

}

//2.	Score to HTML
/*You are given a JSON string representing an array of objects, parse the JSON and create a table using the supplied objects. The table should have 2 columns "name" and "score", each object in the array will also have these keys.
Any text elements must also be escaped in order to ensure no dangerous code can be passed.
You can either write the HTML escape function yourself or use the one from the Strings and Regular Expressions Lab.
The input comes as a single string argument – the array of objects as a JSON.
The output should be printed on the console – a table with 2 columns - "name" and "score", containing the values from the objects as rows.
*/

function scoreToHTML(strJson) {
    let arr = JSON.parse(strJson);
    let result = "<table>\n";
    result += "  <tr><th>name</th><th>score</th></tr>\n";

    for (let obj of arr) {
        result += `  <tr><td>${htmlEscape(obj['name'])}` + `</td><td>${(obj['score'])}</td></tr>\n`;

    }

    return result + "</table>";

    function htmlEscape(str) {
        let symbols = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return str.replace(/['"&<>]/g, ch => symbols[ch]);
    }
}

//3.	From JSON to HTML Table
/*You’re tasked with creating an HTML table of students and their scores. You will receive a single string representing an array of objects, the table’s headings should be equal to the objects’ keys, while each object’s values should be a new entry in the table. Any text values in an object should be escaped, in order to avoid introducing dangerous code into the HTML. 
Object’s keys will always be the same. 
The input comes as single string argument – the array of objects.
The output should be printed on the console – for each entry row in the input print the object representing it.
*/
function jsonToHtml(jsonObj) {
    let result = "<table>\n";
    let arr = JSON.parse(jsonObj);

    result += "<tr>";
    for (let colName of Object.keys(arr[0])) {
        result += `<th>${htmlEscape(colName)}</th>`;
    }
    result += "</tr>\n";

    for (let data of arr) {
        result += `  <tr>`;
        Object.keys(data).forEach(k => result += `<td>${htmlEscape(String(data[k]))}</td>`);
        result += `</tr>\n`;

    }
    result += "</table>";

    return result;

    function htmlEscape(str) {
        let symbols = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return str.replace(/['"&<>]/g, ch => symbols[ch]);
    }
}

//4.	Sum by Town
function sumByTown(arr) {
    let townIncomes = {};
    for (let i = 0; i < arr.length; i += 2) {
        let [town, income] = [arr[i], Number(arr[i + 1])];
        if (townIncomes[town] == undefined) {
            townIncomes[town] = income;
        } else {
            townIncomes[town] += income;
        }
    }
    return JSON.stringify(townIncomes);
}

//5.	Count Words in a Text
function countWords(arr) {
    let text = arr.join('\n');
    let words = text.split(/[^A-Za-z0-9_]/)
        .filter(w => w != '');

    let wordsCount = {};
    for (let word of words) {
        wordsCount[word] ? wordsCount[word]++ : wordsCount[word] = 1;
    }

    return JSON.stringify(wordsCount);
}

//6.	Count Words with Maps
function countWordsWithMap(params) {
    
}
/*
console.log(sumByTown(['Sofia','20', 'Varna','10', 'Sofia','5']));

console.log(jsonToHtml('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'));

console.log(scoreToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]'));

townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);*/