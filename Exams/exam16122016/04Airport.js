function solve(arrStr) {
    let planes = new Set();
    let airport = new Map();
    for (let data of arrStr) {
        let [planeID, town, passengersCount, action] = data.split(' ');
        statsPlane(planeID, town, passengersCount, action);
    }

    console.log("Planes left:");
    [...planes].sort((a, b) => a.localeCompare(b))
                .forEach(p=>console.log(`- ${p}`));
    
    [...airport].sort(townSort)
                .forEach(printStats);

    function statsPlane(planeID, town, passengersCount, action) {

        switch (action) {
            case 'land':
                if (planes.has(planeID)) {
                    return;
                }
                planes.add(planeID);
                break;
            case 'depart':
                if (!planes.has(planeID)) {
                    return;
                }
                planes.delete(planeID);
                break;

        }

        if (!airport.has(town)) {
            let stats = { planes: [], arrivals: 0, departures: 0 };
            airport.set(town, stats);
        }

        if (!airport.get(town).planes.includes(planeID)) {
            airport.get(town).planes.push(planeID);
        }

        switch (action) {
            case 'land':
                airport.get(town).arrivals += Number(passengersCount);
                break;
            case 'depart':
                airport.get(town).departures += Number(passengersCount);
                break;

        }

    }

    function townSort(t1,t2){
        let town1arrivals = t1[1].arrivals;
        let town2arrivals = t2[1].arrivals;
        if (town1arrivals>town2arrivals) return -1;
        if (town1arrivals<town2arrivals) return 1;
        return t1[0].localeCompare(t2[0]);
    }

    function printStats(town){
        console.log(town[0]);
        console.log(`Arrivals: ${town[1].arrivals}`);
        console.log(`Departures: ${town[1].departures}`);
        console.log("Planes:");
        town[1].planes.sort((p1, p2) => p1.localeCompare(p2)).forEach(p => console.log(`-- ${p}`));
    }

}


solve([
'RTA72 London -10 land',
'RTA#72 Brussels -110 depart',
'RTA7!2 Warshaw 350 land',
'RTA72 Riga -201 depart',
'rta72 riga -13 land',
'rta Riga -200 depart'
]);
