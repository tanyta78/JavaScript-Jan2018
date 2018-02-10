function solve(arrStr) {
    let hashPattern = arrStr.pop();
    let len = arrStr.length;
    for (let index = 0; index < len; index += 3) {
        let method = arrStr[index].split(' ');
        if (method.length != 2 || method[0] != "Method:" || !(method[1] == 'GET' || method[1] == 'POST' || method[1] == 'PUT' || method[1] == 'DELETE')) {
            console.log("Response-Code:400");
            continue;
        }

        let credentials = arrStr[index + 1].split(' ');
        if (credentials.length != 3 || credentials[0] != "Credentials:" || !(credentials[1] == "Basic" || credentials[1] == "Bearer")) {
            console.log("Response-Code:400");
            continue;
        }

        let credentialTokenRegex = /^[A-Za-z0-9]+$/;
        if (!credentials[2].match(credentialTokenRegex)) {
            console.log("Response-Code:400");
            continue;
        }


        let content = arrStr[index + 2].split(' ');
        if (content.length != 2 || content[0] != "Content:") {
            console.log("Response-Code:400");
            continue;
        }
        let contentRegex = /^[a-zA-Z0-9.]+$/;
        if (!content[1].match(contentRegex)) {
            console.log("Response-Code:400");
            continue;
        }

        if ((method[1] == 'POST' || method[1] == 'PUT' || method[1] == 'DELETE') && credentials[1] == "Basic") {
            console.log(`Response-Method:${method[1]}&Code:401`);
            continue;
        }

        let authHashes = [];
        for (let i = 0; i < hashPattern.length; i += 2) {
            authHashes.push(hashPattern.substr(i, 2));
        }

        let validAuth = false;

        for (let hashPat of authHashes) {
            let count = hashPat[0];
            let char = hashPat[1];

            let splittedAuth = credentials[2].split(char);
            if (splittedAuth.length - 1 == count) {
                validAuth = true;
            }
        }

        if (!validAuth) {
            console.log(`Response-Method:${method[1]}&Code:403`);
            continue;
        }

        console.log(`Response-Method:${method[1]}&Code:200&Header:${credentials[2]}`);
    }
}

solve([
    'Method: GET',
    'Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
    'Content: users.asd.1782452.278asd',
    'Method: POST',
    'Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas',
    'Content: Johnathan',
    '2q'
]);