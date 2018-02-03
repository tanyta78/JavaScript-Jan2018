function solve(rooms, guestsList) {
    //TO DO refactoring!!! search in all rooms not only first found
  rooms.forEach(r=>r.set(r.number,{type:r.type,empty}))
    let teahouseGuests = 0;
    //room.number {guests:[],emptyBeds:}
    let occupations = new Map();
    rooms.forEach(r=>occupations.set(r.number,{guests: [], type:r.type,emptyBeds:r.type === 'double-bedded' ? 2 : 3}));

    for (let couple of guestsList) {
        let first = couple.first;
        let second = couple.second;
        if (first.gender != second.gender) {
            let room = occupations.find(r => r.type == 'double-bedded'&& r.emptyBeds==2 );
            if (room == undefined) {
                teahouseGuests += 2;
                continue;
            }
            

            if (occupations.get(room.number).emptyBeds > 0) {
                occupations.get(room.number).guests.push(first);
                occupations.get(room.number).guests.push(second);
                occupations.get(room.number).emptyBeds = 0;
               
            } else {
                teahouseGuests += 2;
                continue;
            }
        } else {
            let room = rooms.find(r => r.type == 'triple');
            if (room == undefined) {
                teahouseGuests += 2;
                continue;
            }
            if (!occupations.has(room.number)) {
                occupations.set(room.number, { guests: [], emptyBeds: 3 });
            }

            let emptyBeds = occupations.get(room.number).emptyBeds;
            if (emptyBeds == 3) {
                occupations.get(room.number).guests.push(first);
                occupations.get(room.number).guests.push(second);
                occupations.get(room.number).emptyBeds = 1;
            } else if (emptyBeds == 2) {
                if (occupations.get(room.number).guests[0].gender == first.gender) {
                    occupations.get(room.number).guests.push(first);
                    occupations.get(room.number).guests.push(second);
                    occupations.get(room.number).emptyBeds = 0;
                
                } else {
                    teahouseGuests += 2;
                    continue;
                }
            } else if (emptyBeds == 1) {
                if (occupations.get(room.number).guests[0].gender == first.gender) {
                    occupations.get(room.number).guests.push(first);
                    teahouseGuests += 1;
                    occupations.get(room.number).emptyBeds = 0;
                   
                } else {
                    teahouseGuests += 2;
                    continue;
                }
            } else {
                teahouseGuests += 2;
                continue;
            }
        }
    }

    for (let roomNumber of [...occupations.keys()].sort((a,b)=>a.localeCompare(b))) {
        console.log(`Room mumber: ${roomNumber}`);
        let empty=occupations.get(roomNumber).emptyBeds;
        let guestsInfo=occupations.get(roomNumber).guests.sort((a,b)=>{
            let aName=a.name.toLowerCase();
            let bName= b.name.toLowerCase();
            return aName.localeCompare(bName);
        });

        for (const person of guestsInfo) {
            console.log(`--Guest Name: ${person.name}`);
            console.log(`--Guest Age: ${person.age}`);
            
        }

        console.log(`Empty beds in the room: ${empty}`);
        
        
    }

    console.log(`Guests moved to the tea house: ${teahouseGuests}`);
    
}


    solve([ { number: '101A', type: 'double-bedded' }, 
    { number: '104', type: 'triple' }, 
    { number: '101B', type: 'double-bedded' }, 
    { number: '102', type: 'triple' } ], 
  [ { first: { name: 'Sushi & Chicken', gender: 'female', age: 15 },  
      second: { name: 'Salisa Debelisa', gender: 'female', age: 25 } }, 
    { first: { name: 'Daenerys Targaryen', gender: 'female', age: 20 },  
      second: { name: 'Jeko Snejev', gender: 'male', age: 18 } }, 
    { first: { name: 'Pesho Goshov', gender: 'male', age: 20 },  
      second: { name: 'Gosho Peshov', gender: 'male', age: 18 } },     
    { first: { name: 'Conor McGregor', gender: 'male', age: 29 },  
      second: { name: 'Floyd Mayweather', gender: 'male', age: 40 } } ]);