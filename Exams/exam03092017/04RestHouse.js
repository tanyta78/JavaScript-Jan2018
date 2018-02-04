function solve(rooms, guestsList) {
   
    let teahouseGuests = 0;
    //room.number {guests:[],emptyBeds:}
    let occupations = new Map();

    rooms.forEach(r => occupations.set(r.number, { guests: [], type: r.type, emptyBeds: r.type === 'double-bedded' ? 2 : 3 }));

    for (let couple of guestsList) {
        let first = couple.first;
        let second = couple.second;
        if (first.gender != second.gender) {
            let roomNumber = [...occupations.keys()].find(key => occupations.get(key).type== 'double-bedded' && occupations.get(key).emptyBeds == 2);

            if (roomNumber == undefined) {
                teahouseGuests += 2;
                continue;
            }

            occupations.get(roomNumber).guests.push(first);
            occupations.get(roomNumber).guests.push(second);
            occupations.get(roomNumber).emptyBeds = 0;

        } else {
            let isRoomFound = false;

            let availableRoomNumbers = [...occupations.keys()].filter(key => occupations.get(key).type == 'triple' && occupations.get(key).emptyBeds > 0);

            if (availableRoomNumbers.length == 0) {
                teahouseGuests += 2;
                continue;
            }

            for (let roomNumber of availableRoomNumbers) {
                if (isRoomFound) {
                    break;
                }
                let emptyBeds = occupations.get(roomNumber).emptyBeds;
                if (emptyBeds == 3) {
                    occupations.get(roomNumber).guests.push(first);
                    occupations.get(roomNumber).guests.push(second);
                    occupations.get(roomNumber).emptyBeds = 1;
                    isRoomFound = true;
                } else if (emptyBeds == 2) {
                    if (occupations.get(roomNumber).guests[0].gender == first.gender) {
                        occupations.get(roomNumber).guests.push(first);
                        occupations.get(roomNumber).guests.push(second);
                        occupations.get(roomNumber).emptyBeds = 0;
                        isRoomFound = true;
                    }
                } else if (emptyBeds == 1) {
                    if (occupations.get(roomNumber).guests[0].gender == first.gender) {
                        occupations.get(roomNumber).guests.push(first);
                        occupations.get(roomNumber).emptyBeds = 0;

                        let otherRoomNumber = [...occupations.keys()].find(key => occupations.get(key).type == 'triple' && occupations.get(key).emptyBeds > 0 && (occupations.get(key).guests.length > 0 ? occupations.get(key).guests[0].gender == first.gender : true));

                        if (otherRoomNumber != undefined) {
                            occupations.get(otherRoomNumber).guests.push(second);
                            occupations.get(otherRoomNumber).emptyBeds -= 1;

                        } else {
                            teahouseGuests += 1;
                        }

                        isRoomFound = true;


                    }

                }
            }

            if (!isRoomFound) {
                teahouseGuests += 2;
                continue;
            }
        }
    }
    //print result
    for (let roomNumber of [...occupations.keys()].sort((a, b) => a.localeCompare(b))) {
        console.log(`Room number: ${roomNumber}`);
        let empty = occupations.get(roomNumber).emptyBeds;
        let guestsInfo = occupations.get(roomNumber).guests.sort((a, b) => {
            let aName = a.name.toLowerCase();
            let bName = b.name.toLowerCase();
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
       

solve([{ number: '101A', type: 'double-bedded' },
{ number: '104', type: 'triple' },
{ number: '101B', type: 'double-bedded' },
{ number: '102', type: 'triple' }],
    [{
        first: { name: 'Sushi & Chicken', gender: 'female', age: 15 },
        second: { name: 'Salisa Debelisa', gender: 'female', age: 25 }
    },
    {
        first: { name: 'Daenerys Targaryen', gender: 'female', age: 20 },
        second: { name: 'Jeko Snejev', gender: 'male', age: 18 }
    },
    {
        first: { name: 'Pesho Goshov', gender: 'male', age: 20 },
        second: { name: 'Gosho Peshov', gender: 'male', age: 18 }
    },
    {
        first: { name: 'Conor McGregor', gender: 'male', age: 29 },
        second: { name: 'Floyd Mayweather', gender: 'male', age: 40 }
    }]);