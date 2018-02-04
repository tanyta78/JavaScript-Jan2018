function solve(base, increment) {
    let step = 1;
    let stone = 0;//(base-2)*(base-2)
    let marble = 0;//4*(base-1)
    let lapis = 0;// step%5==0? stone=as it is lapis used instead of marble
    let gold = 0;//if base<=2 - top most step base*base
    while (base > 2) {
        stone += (base - 2) * (base - 2) * increment;
        if (step%5==0) {
            lapis+=4*(base-1)*increment;
        }else{
            marble+=4*(base-1)*increment;
        }
        step++;
        base-=2;
    }

    let height = step*increment;
    gold=base*base*increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
    
    
}


solve(23,0.5);