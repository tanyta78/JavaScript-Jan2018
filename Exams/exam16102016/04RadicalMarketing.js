function solve(input) {

    let database = new Map();

    for (let line of input) {
        if (line.includes('-')) {
            let first = line.split('-')[0];
            let second = line.split('-')[1];
            subscribe(first, second);
            
        } else {
            register(line);
        }
    }

    let sortedkeys = [...database.keys()].sort((a, b) => {
        let aLen = database.get(a).size;
        let bLen = database.get(b).size;
        let result=bLen - aLen;
        if (result===0) {
            //to do check in subscibers lists
        }
        return result;

    });

    let person = sortedkeys[0];
    let subscribers = database.get(person);
    console.log(person);
   
    [...subscribers].forEach((el,i)=>console.log(`${i+1}. ${el}`));
    
    function register(name) {
        if (!database.has(name)) {
            database.set(name, new Set());
            return;
        }
        return;
    }

    function subscribe(first, second) {
        if (!database.has(first) || !database.has(second)) {
            return;
        }
        if (database.get(second).has(first)) {
            return;
        }

        let subscribers = database.get(second);
        database.set(second, subscribers.add(first));
    }
}


solve(['A', 'B', 'C', 'D', 'A-B', 'B-A', 'C-A', 'D-A']);