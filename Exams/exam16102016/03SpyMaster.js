function solve(arrStr) {
    let specialKey = arrStr.shift();
   
    let pattern = "((?: |^)";
    for(let i = 0; i < specialKey.length; i++){
        pattern += "[" + specialKey[i].toLowerCase() + specialKey.toUpperCase() + "]";
    }

    pattern += "[ ]+)([!#$%A-Z]{8,})( |\\.|,|$)";
    let rgx = new RegExp(pattern,'g');

    for(let i = 0; i < arrStr.length; i++){
        let line = arrStr[i].replace(rgx,decode);
        console.log(line);
    }

    function decode(match,group1,group2,group3){
        group2 = group2.replace(/!/g,'1')
            .replace(/%/g, '2')
            .replace(/\#/g,'3')
            .replace(/\$/g,'4')
            .replace(/[A-Z]/g,x=>x.toLowerCase());
        return group1 + group2 + group3;
    }

}

solve([ 'specialKey',
'In this text the specialKey HELLOWORLD! is correct, but',
'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!' ]);