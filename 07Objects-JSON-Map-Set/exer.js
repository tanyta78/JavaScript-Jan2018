//Heroic Inventory
function heroicInventory(arrStr) {
    let inventory = [];
    for (let row of arrStr) {
        let [name, level, items] = row.split(' / ');
        let hero = {};
        hero.name = name;
        hero.level = Number(level);
        hero.items = [];
        if (items != undefined) {
            hero.items = items.split(', ')
        }
        inventory.push(hero);
    }
    console.log(JSON.stringify(inventory));

}

/*heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);*/

//2.	JSON’s Table
function JSONTable(arrJson) {
    let arrObj = [];
    [...arrJson].forEach(e => arrObj.push(JSON.parse(e)));
    let table = '<table>\n';

    for (let data of arrObj) {
        table += '    <tr>\n';
        Object.keys(data).forEach(k => table += `       <td>${htmlEscape(String(data[k]))}</td>\n`);

        table += '    <tr>\n';

    }
    table += '</table>';

    function htmlEscape(str) {
        let symbols = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return str.replace(/['"&<>]/g, ch => symbols[ch]);
    }

    console.log(table);

}

/*JSONTable([ '{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}' ]);*/

//3.	Cappy Juice
function juicesOrder(arrStr) {
    let juices = new Map();
    let produsedBottles = new Map();
    for (let data of arrStr) {
        let [name, quantity] = data.split(' => ')
            .filter(e => e != '');
        //check if juice exist
        if (!juices.has(name)) {
            juices.set(name, 0);
        }

        //check for producing bootle
        let oldQuantity = juices.get(name);
        let newQuantity = oldQuantity + Number(quantity);
        let bottles = Math.floor(newQuantity / 1000);
        if (bottles >= 1) {
            //check if bottles exists for this juice
            if (!produsedBottles.has(name)) {
                produsedBottles.set(name, 0);
            }
            //set new quantity of bottles and juice
            let oldBottles = produsedBottles.get(name);
            produsedBottles.set(name, oldBottles + bottles);
            newQuantity = newQuantity % 1000;
        }

        //set remaining juice
        juices.set(name, newQuantity);

    }

    //print prodused bottles
    [...produsedBottles].forEach(([name, bottles]) => console.log(`${name} => ${bottles}`));

}

/*juicesOrder(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);*/

//4.	Store Catalogue
function createCatalogue(arrStr) {
    let catalogue = new Map();
    let initials = new Set();

    for (let data of arrStr) {
        let [name, price] = data.split(' : ');
        catalogue.set(name, Number(price));
        initials.add(name[0]);
    }

    for (let letter of [...initials.keys()].sort()) {
        console.log(letter);

        let products = [...catalogue.keys()].filter(p => p[0] == letter).sort();
        products.forEach(p => console.log(`  ${p}: ${catalogue.get(p)}`));
    }


}

/*createCatalogue([ 'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10' ]
);*/

//5.	Auto-Engineering Company
function carCompany(arrStr) {
    let carProduction = new Map();

    for (let data of arrStr) {
        let [brand, model, quantity] = data.split(' | ');

        //check if brand exist
        if (!carProduction.has(brand)) {
            carProduction.set(brand, new Map());
        }
        //check if model exist
        if (!carProduction.get(brand).has(model)) {
            carProduction.get(brand).set(model, 0);
        }

        //set or add quantity
        let oldQuantity = carProduction.get(brand).get(model);
        carProduction.get(brand).set(model, oldQuantity + Number(quantity));
    }

    for (let brand of carProduction.keys()) {
        console.log(`${brand}`);

        for (let [model, quantity] of carProduction.get(brand)) {
            console.log(`###${model} -> ${quantity}`);

        }
    }
}

/*carCompany([ 'Mercedes-Benz | 50PS | 123',
'Mini | Clubman | 20000',
'Mini | Convertible | 1000',
'Mercedes-Benz | 60PS | 3000',
'Hyunday | Elantra GT | 20000',
'Mini | Countryman | 100',
'Mercedes-Benz | W210 | 100',
'Mini | Clubman | 1000',
'Mercedes-Benz | W163 | 200' ]);*/

//6.	System Components
function register(strArr) {
    let systemRegister = new Map();

    for (let data of strArr) {
        let [systemName, componentName, subcomponentName] = data.split(' | ');

        //check if system exist
        if (!systemRegister.has(systemName)) {
            systemRegister.set(systemName, new Map());
        }

        //check if component exist
        if (!systemRegister.get(systemName).has(componentName)) {
            systemRegister.get(systemName).set(componentName, new Set());
        }

        //add subcomponent name
        systemRegister.get(systemName).get(componentName).add(subcomponentName);
    }

    for (let sysName of [...systemRegister.keys()].sort((x, y) => {
        let result = [...systemRegister.get(y).keys()].length - [...systemRegister.get(x).keys()].length;
        if (result == 0) {
            return x.toLowerCase().localeCompare(y.toLowerCase());
        }

        return result;
    })) {
        console.log(`${sysName}`);

        let orderedCompNames = [...systemRegister.get(sysName).keys()].sort((a, b) => {
            let aLen = systemRegister.get(sysName).get(a).size;
            let bLen = systemRegister.get(sysName).get(b).size;
            return bLen - aLen;
        });

        for (let compName of orderedCompNames) {
            console.log(`|||${compName}`);
            [...systemRegister.get(sysName).get(compName)].forEach(e => console.log(`||||||${e}`));
        }

    }


}

/*register(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',    
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']);*/

//7.	Usernames
function usernameCatalogue(arrStr) {
    let usernames = new Set();
    arrStr.forEach(e => usernames.add(e));

    let ordered = [...usernames.keys()].sort((a, b) => {
        let result = a.length - b.length;
        if (result == 0) {
            return a.localeCompare(b);
        }
        return result;
    });

    console.log(ordered.join('\n'));

}

usernameCatalogue(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']);

//8.	*Unique Sequences
function uniqueSequences(arrJsonStr) {
    let arraysSet = [];

    for (let line of arrJsonStr) {
        let arr = JSON.parse(line);
        arraysSet.push(arr.map(Number).sort((a, b) => b - a));
    }

    let uniqueArrays = [];

    for (let i = 0; i < arraysSet.length; i++) {
        let haveEqual = false;

        for (let j = i + 1; j < arraysSet.length; j++) {

            if (compareArrays(arraysSet[i], arraysSet[j])) {
                arraysSet.splice(j, 1);
                j--;
            }
        }
    }


    arraysSet.sort((a, b) => a.length - b.length);
    arraysSet.forEach(a => console.log("[" + a.join(", ") + "]"));

    function compareArrays(arr1, arr2) {
        if (arr1.length != arr2.length) {
            return false;
        } else {
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] != arr2[i]) {
                    return false;
                }
            }
            return true;
        }

    }
}