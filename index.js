//sort object

Object.keys(info).sort((a, b) => { return info[b] - info[a]; }).forEach(k => console.log(`${k} = ${info[k]}`));

function sortObject(obj) {
    return Object.keys(obj).sort((a, b) => myCompare(a, b)).reduce(function (result, key) {
        result[key] = obj[key];
        return result;
    }, {});
}
function myCompare(a, b) {
    if (modules[a]['controllers'].length != modules[b]['controllers'].length) {
        return modules[b]['controllers'].length - modules[a]['controllers'].length;
    }
    return modules[a]['models'].length - modules[b]['models'].length;
}

[...planes].sort((p1, p2) => p1.localeCompare(p2)).forEach(p => console.log(`- ${p}`));
[...port].sort((t1, t2) => {
    if (t1[1].arrivals < t2[1].arrivals) return 1;
    if (t1[1].arrivals > t2[1].arrivals) return -1;
    return t1[0].localeCompare(t2[0]);
}).forEach(logData);

/*
    [...election].map(([s, c]) =>
    [s, [...c].sort((a, b) =>           // Place candidate with most votes in system in first place
        b[1] - a[1]).reduce((a, b) =>       // Collect all votes into first element (previously sorted)
            [a[0], a[1] + b[1]])])
    .map(([s, [c, v]]) => [c, s, v])    // Change structure from system with candidates to candidate with systems (all that he won)
    .forEach(([c, s, v], i, arr) => result.has(c) ? result.get(c).set(s, v) : result.set(c, new Map([[s, v]])));    // Transfer results to another map

    let ranking = [...result].map(([c, s]) =>
    [c, [...s].map(([s, v]) => v)           // Sum the votes for each candidate
        .reduce((a, b) => a + b)])
    .sort(([c1, v1], [c2, v2]) => v2 - v1); // Sort by number of votes

    // Calculate total turnout (number of votes)
    let total = ranking.map(([c, v]) => v).reduce((a, b) => a + b);

    if (ranking[0][1] > total / 2) {
    console.log(`${ranking[0][0]} wins with ${ranking[0][1]} votes`);
    if (ranking.length > 1) {
        let runnerup = ranking[1][0];
        console.log(`Runner up: ${runnerup}`);
        [...result.get(runnerup)].sort(([s1, v1], [s2, v2]) => v2 - v1).forEach(s => console.log(`${s[0]}: ${s[1]}`))
    } else {
        console.log(`${ranking[0][0]} wins unopposed!`);
    }
    } else {
    console.log(`Runoff between ${ranking[0][0]} with ${Math.floor(ranking[0][1] / total * 100)}% and ${ranking[1][0]} with ${Math.floor(ranking[1][1] / total * 100)}%`);
}*/

//output
var formatedResults = {};
Object.keys(associativeArr).sort().forEach(function (key, index) {
    if (associativeArr[key]['name'] && associativeArr[key]['age']) {
        associativeArr[key]['opponents'].sort();
        var rank = calculateRank(associativeArr[key]['wins'], associativeArr[key]['losses']);
        // 2 digit after dec point
        associativeArr[key]['rank'] = rank.toFixed(2);
        delete associativeArr[key]['wins'];
        delete associativeArr[key]['losses'];
        //add at specific order;
        formatedResults[key] = {};
        Object.keys(associativeArr[key]).sort().forEach(function (innerKey, index) {
            formatedResults[key][innerKey] = associativeArr[key][innerKey];
        });
    } else {
        delete associativeArr[key];
    }
});
function calculateRank(wins, losses) {
    return (wins + 1) / (losses + 1);
}