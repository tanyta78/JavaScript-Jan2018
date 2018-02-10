function solve(arrStr) {
    let darkHits=1;
    let ligthHits=1;
    let darkPoints=0;
    let ligthPoints=0;
    let previousDarkDamage=0;
    let previousWhiteDamage=0;
    
      for (let data of arrStr) {
        let info=data.split(' ');
        if (info.length==3) {
            let count=Number(info[0]);
            let type=info[1];
            if (type=='dark') {
                if (previousDarkDamage==count) {
                    darkHits+=1;
                }
               
                if (darkHits==5) {
                    count=count*4.5;
                }
                previousDarkDamage=count;
                darkPoints+=count*60;
            }else if(type=='white'){
                if (previousWhiteDamage==count) {
                    ligthHits+=1;
                }
                
                if (ligthHits==2) {
                    count=count*2.75;
                }
                previousWhiteDamage=count;
                ligthPoints+=count*60;
            }
        }
    }

    if (darkPoints>ligthPoints) {
        console.log('Winner - Naskor');
        console.log(`Damage - ${darkPoints}`);
    }else{
        console.log('Winner - Viktor');
        console.log(`Damage - ${ligthPoints}`);
    }
}

solve([
    '2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    
]);