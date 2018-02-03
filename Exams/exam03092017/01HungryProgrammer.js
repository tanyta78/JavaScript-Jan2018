function solve(meals,arrStr) {
    
    let eatenMeals = 0;
    for (let cmdLine of arrStr) {
        let cmdinfo = cmdLine.split(' ').filter(e => e != '');
        let cmd = cmdinfo[0];
        if (cmd == 'End') {
            printInfo();
            break;
        }
        switch (cmd) {
            case 'Serve':
                if (cmdinfo.length !== 1||meals.length==0) {
                    continue;
                }
                serve();
                break;
            case 'Add':
                if (cmdinfo.length !== 2) {
                    continue;
                }
                add(cmdinfo[1]);
                break;
            case 'Shift':
                if (cmdinfo.length !== 3) {
                    continue;
                }
                shift(cmdinfo[1], cmdinfo[2]);
                break;
            case 'Eat':
                if (cmdinfo.length !== 1) {
                    continue;
                }
                eat();
                break;
            case 'Consume':
                if (cmdinfo.length !== 3) {
                    continue;
                }
                consume(cmdinfo[1], cmdinfo[2]);
                break;
            default:
                break;
        }
    }

    function printInfo() {
        if (meals.length == 0) {
            console.log('The food is gone');
        } else {
            console.log(`Meals left: ${meals.join(', ')}`);
        }
        console.log(`Meals eaten: ${eatenMeals}`);


    }
    function serve() {
        let meal = meals.splice(-1, 1);
        console.log(`${meal} served!`);

    }
    function add(meal) {
        meals.unshift(meal);
    }
    function shift(index1, index2) {

        if (areIndexesValid(index1, index2)) {
            let meal1 = meals[index1];
            let meal2 = meals[index2];
            meals.splice(index1, 1, meal2);
            meals.splice(index2, 1, meal1);
        }
    }
    function eat() {
        if (meals.length > 0) {
            let meal = meals.shift();
            eatenMeals += 1;
            console.log(`${meal} eaten`);

        }


    }
    function consume(index1, index2) {
        if (areIndexesValid(index1, index2)) {
            let eaten = index2 - index1 + 1;
            meals.splice(index1,eaten);
            eatenMeals+=eaten;
            console.log('Burp!');
            
        }
    }
    function areIndexesValid(index1, index2) {
        let len = meals.length;
        return (index1 >= 0 && index1 < len) && (index2 >= 0 && index2 < len);
    }
}


solve(['chicken', 'steak', 'eggs'],[
'Serve',
'Eat',
'End',
'Consume 0 1']);
