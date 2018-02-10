function solve(arrStr) {
    let bladesLens = arrStr.map(Number).map(Math.floor);
    let aplication = ['*rap-poker', 'blade', 'quite a blade', 'pants-scraper', 'frog-butcher'];

    console.log('<table border="1">\n<thead>\n<tr><th colspan="3">Blades</th></tr>\n<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>');


    for (let blade of bladesLens) {
        if (blade<=10) {
            continue;
        }
        console.log(`<tr><td>${blade}</td><td>${blade > 40 ? 'sword' : 'dagger'}</td><td>${aplication[blade % 5]}</td></tr>`);

    }
    console.log('</tbody>\n</table>');

};

solve([
    17.8,
    19.4,
    13,
    55.8,
    126.96541651,
    3
]);