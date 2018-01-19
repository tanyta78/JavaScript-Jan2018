//1.	Inside Volume
//Write a JS function that determines whether a point is inside the volume, defined by the box.
function insideOrOutside(input) {
    for (let i = 0; i < input.length; i += 3) {
        let x = input[i];
        let y = input[i + 1];
        let z = input[i + 2];
    
        if (inVolume(x, y, z)) {
            console.log('inside');

        } else {
            console.log('outside');

        }
    }
    function inVolume(x, y, z) {
        let xMin = 10, xMax = 50, yMin = 20, yMax = 80, zMin = 15, zMax = 50;

        if (x >= xMin && x <= xMax) {
            if (y >= yMin && y <= yMax) {
                if (z >= zMin && z <= zMax) {
                    return true;
                }

            }

        }
        return false;
    }
}

//2.	Road Radar
function inSpeedLimit([speed,area]) {
    let overlimit=0;
    switch (area) {
        case "motorway":
            overlimit=speed-130;
            break;
        case "interstate":
            overlimit=speed-90;
            break;
        case "city":
            overlimit=speed-50;
            break;
        case "residential":
            overlimit=speed-20;
            break;
        default:
            break;
    }

    if (overlimit>40)  {
        console.log("reckless driving");
        
    } else if (overlimit>20){
        console.log("excessive speeding");
    }else if (overlimit>0){
        console.log("speeding");
        
    }
}

//3.	Template format
function xmlTemplate(input) {
    let temp ='<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';
    for (let i = 0; i < input.length; i+=2) {
        let question = input[i];
        let answer=input[i+1];
        temp+=`  <question>\n    ${question}\n   </question>\n  <answer>\n    ${answer}\n  </answer>\n`;
    }
    temp+=`<quiz>\n`;
    console.log(temp);
    
}

xmlTemplate(["Who was the forty-second president of the U.S.A.?",
"William Jefferson Clinton"]
)