function solve(kingdomObjsArr, battleStrArr) {
    //kingdom new Map(general army)
    let kingdomsInfo = new Map();
    //kingdom [{general wins loses}])
    let battleInfo = new Map();
    for (let obj of kingdomObjsArr) {
        let kingdomName = obj.kingdom;
        if (!kingdomsInfo.has(kingdomName)) {
            kingdomsInfo.set(kingdomName, new Map());
        }

        let genName = obj.general;
        if (!kingdomsInfo.get(kingdomName).has(genName)) {
            kingdomsInfo.get(kingdomName).set(genName, 0);
        }

        let army = Number(obj.army);
        let prevArmy = kingdomsInfo.get(kingdomName).get(genName);
        kingdomsInfo.get(kingdomName).set(genName, prevArmy + army);

    }

    //console.log(kingdomsInfo);

    for (let [attKingdom, attGen, defKingdom, defGen] of battleStrArr) {
        if (attKingdom == defKingdom) {
            continue;
        }
        let attArmy = kingdomsInfo.get(attKingdom).get(attGen);
        let defArmy = kingdomsInfo.get(defKingdom).get(defGen);

        if (attArmy > defArmy) {
            kingdomsInfo.get(attKingdom).set(attGen, Math.floor(attArmy * 1.1));
            kingdomsInfo.get(defKingdom).set(defGen, Math.floor(defArmy * 0.9));

            addBattleInfo(attKingdom, attGen, 'win');
            addBattleInfo(defKingdom, defGen, 'lose');

        } else if (attArmy < defArmy) {
            kingdomsInfo.get(attKingdom).set(attGen, Math.floor(attArmy * 0.9));
            kingdomsInfo.get(defKingdom).set(defGen, Math.floor(defArmy * 1.1));

            addBattleInfo(attKingdom, attGen, 'lose');
            addBattleInfo(defKingdom, defGen, 'win');
        }
    }

    // console.log(battleInfo);
    let sorted = [];
    if (battleInfo.size == 0) {
        sorted = [...kingdomsInfo.keys()].sort((a, b) => {
            let aKingName=a;
            let bKingName=b;
            return aKingName.localeCompare(bKingName);
        });
        printWithoutBattles(sorted[0]);
    } else {
        sorted = [...battleInfo.keys()].sort((a, b) => mySort(a, b));
        printWinnerInfo(sorted[0]);
    }

    function addBattleInfo(kingdom, gen, result) {
        if (!battleInfo.has(kingdom)) {
            battleInfo.set(kingdom, []);
        }

        let genIndex = battleInfo.get(kingdom).findIndex(o => o.general == gen);
        if (genIndex < 0) {
            let genObj = { general: gen, wins: 0, loses: 0 };
            battleInfo.get(kingdom).push(genObj);
        }
        genIndex = battleInfo.get(kingdom).findIndex(o => o.general == gen);
        if (result == 'win') {
            battleInfo.get(kingdom)[genIndex].wins += 1;
        } else {
            battleInfo.get(kingdom)[genIndex].loses += 1;
        }


    }


    function mySort(first, second) {
        let firstKingdomWins = sumProp(battleInfo.get(first), 'wins');
        let secondKingdomWins = sumProp(battleInfo.get(second), 'wins');
        // console.log(firstKingdomWins);
        // console.log(secondKingdomWins);
        if (firstKingdomWins > secondKingdomWins) {
            return -1;
        } else if (firstKingdomWins < secondKingdomWins) {
            return 1;
        } else {
            let firstKingdomLoses = sumProp(battleInfo.get(first), 'loses');
            let secondKingdomLoses = sumProp(battleInfo.get(second), 'loses');
            if (firstKingdomLoses > secondKingdomLoses) {
                return 1;
            } else if (firstKingdomLoses < secondKingdomLoses) {
                return -1;
            } else {
                return first.toLocaleCompare(second);
            }

        }


    }
    function sumProp(items, prop) {
        return items.reduce(function (a, b) {
            return a + b[prop];
        }, 0);
    }

    function printWinnerInfo(kingdomName) {
        console.log(`Winner: ${kingdomName}`);
        let sortedGens = [...kingdomsInfo.get(kingdomName).keys()].sort((a, b) => {
            let aGenArmy = kingdomsInfo.get(kingdomName).get(a);
            let bGenArmy = kingdomsInfo.get(kingdomName).get(b);
            if (aGenArmy > bGenArmy) {
                return -1;
            } else if (aGenArmy < bGenArmy) {
                return 1;
            }
        });
        for (let genName of sortedGens) {
            console.log(`/\\general: ${genName}`);
            let genArmy = kingdomsInfo.get(kingdomName).get(genName);
            console.log(`---army: ${genArmy}`);
            let genInd = battleInfo.get(kingdomName).findIndex(o => o.general == genName);
            let genWins = battleInfo.get(kingdomName)[genInd].wins;
            let genLoses = battleInfo.get(kingdomName)[genInd].loses;
            console.log(`---wins: ${genWins}`);
            console.log(`---losses: ${genLoses}`);

        }
    }

    function printWithoutBattles(kingdomName) {
        console.log(`Winner: ${kingdomName}`);
        let sortedGens = [...kingdomsInfo.get(kingdomName).keys()].sort((a, b) => {
            let aGenArmy = kingdomsInfo.get(kingdomName).get(a);
            let bGenArmy = kingdomsInfo.get(kingdomName).get(b);
            if (aGenArmy > bGenArmy) {
                return -1;
            } else if (aGenArmy < bGenArmy) {
                return 1;
            }
        });
        for (let genName of sortedGens) {
            console.log(`/\\general: ${genName}`);
            let genArmy = kingdomsInfo.get(kingdomName).get(genName);
            console.log(`---army: ${genArmy}`);
            console.log(`---wins: 0`);
            console.log(`---losses: 0`);

        }
    }
}

solve([{ kingdom: "Maiden Way", general: "Merek", army: 5000 },
{ kingdom: "Stonegate", general: "Ulric", army: 4900 },
{ kingdom: "Stonegate", general: "Doran", army: 70000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 0 },
{ kingdom: "YorkenShire", general: "Quinn", army: 2000 },
{ kingdom: "Maiden Way", general: "Berinon", army: 100000 }],
    []

);