//sum 3 numbers
function sumNumbers(a,b,c) {
    console.log(a+b+c);
}
//calculate sum and vat
function sumAndVat(arr) {
    let sum=0;
    for (let num of arr) {
        sum+=num;
    }
    console.log(`sum = ${sum}`);
    console.log(`VAT = ${sum*0.2}`);
    console.log(`total = ${sum*1.2}`);

}

//letter occurrences in string
function letterOccur(str,ch) {
    let occure = 0;
    for (let character of str) if (ch == character) occure++;
    console.log(occure);
}

//filter by age
function filterByAge(minAge,firstName,firstAge,secondName,secondAge) {
    let person1={name: firstName,age:firstAge};
    let person2 = {name: secondName,age:secondAge};
    if (person1.age>=minAge)console.log(person1);
    if (person2.age>=minAge)console.log(person2);

}

//string of numbers
function createString(n){
    let result ='';
    for (let i = 1; i <= n; i++) {
        result+=i;
    }
    console.log(result);
}

//figure area
function figureArea(w,h,W,H) {
let [area1,area2,figureArea]=[w*h,W*H,Math.min(w,W)*Math.min(h,H)];
return area1+area2-figureArea;
}

//next day
function nextDay(year,month,day){
    let date = new Date(year,month-1,day);
    let tommorow = new Date(date.getTime() + (24 * 60 * 60 * 1000));
    return tommorow.getFullYear() + "-" +
        (tommorow.getMonth() + 1) + '-' +
        tommorow.getDate();
}

//distance between points
function distanceBetweenTwoPoints(x1,y1,x2,y2) {
    let [distanceX,distanceY]=[Math.pow(x1-x2,2),Math.pow(y1-y2,2)];
    return Math.sqrt(distanceX+distanceY);
}

distanceBetweenTwoPoints(2,4,5,0);


