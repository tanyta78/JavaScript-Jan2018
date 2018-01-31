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
function countWordsWithMap(arr) {
    let text = arr.join('\n');
    let words = text.split(/[^A-Za-z0-9_]/)
        .filter(w => w != '')
        .map(w=>w.toLowerCase());
    let wordsCount = new Map();
    words.forEach(w => {
        wordsCount.has(w) ? wordsCount.set(w, wordsCount.get(w) + 1) : wordsCount.set(w, 1);
    });

    let sorted = Array.from(wordsCount.keys()).sort();
    for (let key of sorted) {
        console.log("'" + key + "'" + " -> " + wordsCount.get(key) + " times");
    }
}

countWordsWithMap(['Far too slow, you re far too slow.']);

//7.	Populations in Towns
/*You have been tasked to create a register for different towns and their population.
The input comes as array of strings. Each element will contain data for a town and its population in the following format:
“{townName} <-> {townPopulation}”
If you receive the same town twice, you should add the given population to the current one.

*/
function populationInTownsWithObj(arrOfStrings) {
    let towns = {};
    for (let line of arrOfStrings) {
        let [town, pop] = line.split(' <-> ');
        if (!towns.hasOwnProperty(town)) {
            towns[town] = 0;
        }
        towns[town] += Number(pop);
    }


    for (let town of Object.keys(towns)) {
        console.log(`${town} : ${towns[town]}`);

    }




}

function populationInTownsWithMap(arrOfStrings) {
    let towns = new Map();
    for (let line of arrOfStrings) {
        let [town, pop] = line.split(' <-> ');
        if (!towns.has(town)) {
            towns.set(town, 0);
        }
        towns.set(town, towns.get(town) + Number(pop));
    }

    [...towns].forEach(([town, pop]) => console.log(`${town} : ${pop}`));

}

//8.	City Markets
/*You have been tasked to follow the sales of products in the different towns. For every town you need to keep track of all the products sold, and for every product, the amount of total income.
The input comes as array of strings. Each element will represent data about a product and its sales. The format of input is:
{town} -> {product} -> {amountOfSales} : {priceForOneUnit}
The town and product are both strings. The amount of sales and price for one unit will be numbers. Store all towns, for every town, store its products, and for every product, its amount of total income. The total income is calculated with the following formula - amount of sales * price for one unit. If you receive as input a town you already have, you should just add the new product to it.
As output you must print every town, its products and their total income in the following format:
“Town – {townName}
*/
function cityMarkets(strArr) {
    let cityMarkets = new Map();
    for (let line of strArr) {
        let [town, product, sales] = line.split(' -> ');
        sales = sales.split(' : ').reduce((a, b) => a * b);

        if (!cityMarkets.has(town)) {
            cityMarkets.set(town, new Map());
        }

        if (!cityMarkets.get(town).has(product)) {
            cityMarkets.get(town).set(product, 0);
        }

        let oldSales = cityMarkets.get(town).get(product);
        cityMarkets.get(town).set(product, oldSales + sales);
    }

    for (let [town, products] of cityMarkets) {
        console.log(`Town - ${town}`);

        for (let [product, sales] of products) {
            console.log(`$$$${product} : ${sales}`);

        }
    }

}

//10.	Extract Unique Words
/*Write a JS function that extracts all UNIQUE words from a valid text, and stores them. Ensure that there are NO duplicates in the stored words. Once you find a word, there is no need for you to store it again if you meet it again in the text. You also need to make all characters from the words you’ve stored – lowercase.
*/
function uniqueWordsInText(arrStr) {
    let text = arrStr.join('\n');
    let unique = new Set();
    let words = text.split(/\W+/)
        .filter(w => w !== '')
        .map(e => e.toLowerCase())
        .forEach(e => unique.add(e));

    console.log([...unique].join(', '));

}

//9.	Lowest Prices in Cities
/*You will be given several towns, with products and their price. You need to find the lowest price for every product and the town it is sold at for that price.
The input comes as array of strings. Each element will hold data about a town, product, and its price at that town. The town and product will be strings; the price will be a number. The input will come in the following format:
{townName} | {productName} | {productPrice}
If you receive the same town and product more than once, you should update the old value with the new one.
As output you must print each product with its lowest price and the town at which the product is sold at that price. If two towns share the same lowest price, print the one that was entered first. 
The output, for every product, should be in the following format:
{productName} -> {productLowestPrice} ({townName})
The order of output is – order of entrance. See the examples for more info.

*/
function lowestPriceInCities(arr) {
    let products = new Map();

    for (let row of arr) {
        let [town, product, price] = row.split(' | ');

        //check if product exist
        if (!products.has(product)) {
            products.set(product, new Map());
        }

        //check if town exist
        if (!products.get(product).has(town)) {
            products.get(product).set(town, 0);
        }

        products.get(product).set(town, Number(price));
    }

    for (let [product, prices] of products) {

        let minPrice = Math.min(...prices.values());
        let townName = getKeyByValue(prices, minPrice);
        console.log(`${product} -> ${minPrice} (${townName})`);


    }

    function getKeyByValue(mymap, value) {
        return [...mymap.keys()].find(key => mymap.get(key) === value);
    }
    //     let sorted = [...products].forEach(([product,cities])=>[...cities.entries()].map(e =>{ return e[1];}).sort(function(a, b) {return a-b;}));

    //       [...products].forEach(([product,cities])=>console.log(`${product} -> ${([...cities].map(e=>{return e[1];}))[0]} (${([...cities].map(e=>{return e[0];}))[0]})`));
    // //console.log(products);

}



/*
lowestPriceInCities([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000',
]);
uniqueWordsInText([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.', 
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla. ',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis. ',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut. ',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu. ',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus. ',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.',    
]);
cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);

populationInTownsWithObj([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'

]);

console.log(sumByTown(['Sofia','20', 'Varna','10', 'Sofia','5']));

console.log(jsonToHtml('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'));

console.log(scoreToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]'));

townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);*/