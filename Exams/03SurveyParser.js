function solve(str) {
    let surveyDataRgx = /<svg>(.*)<\/svg>/;
    let label = '';

    if (!surveyDataRgx.test(str)) {
        console.log('No survey found');

    } else {
        let surveyInfo = surveyDataRgx.exec(str)[1];
        // let catIndex = surveyInfo.indexOf('<cat>');
        // let closingCatIndex = surveyInfo.indexOf('</\cat>');
        let catInfo = [];
        let firstCatRgx = /<cat><text>.*\[(.*)\].*<\/text><\/cat>/;
        let secondCatRgx = /<cat>(<g>.*<\/g>)<\/cat>/;

        if (firstCatRgx.test(surveyInfo) && secondCatRgx.test(surveyInfo)) {

            label = firstCatRgx.exec(surveyInfo)[1];

            let secondCatInfo = secondCatRgx.exec(surveyInfo)[1];
            let ratingsRgx = /<g><val>(\d+)<\/val>(\d+)<\/g>/g;
            if (ratingsRgx.test(secondCatInfo)) {
                let ratingsMatches = secondCatInfo.match(ratingsRgx);
                let sum = 0;
                let count = 0;
                for (let ratingMatch of ratingsMatches) {
                    let ratingsRgx2 = /<g><val>(\d+)<\/val>(\d+)<\/g>/;
                    let rating = ratingsRgx2.exec(ratingMatch);
                    let value = Number(rating[1]);
                    let ratingCount = Number(rating[2]);
                    if (value >= 1 && value <= 10 && ratingCount >= 0) {
                        sum += value * ratingCount;
                        count += ratingCount;
                    }
                }
                console.log(`${label}: ${Math.round((sum / count) * 100)/100}`);

            } else {
                console.log('Invalid format');
            }

        } else {
            console.log('Invalid format');

        }



    }


}

solve('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>'

);