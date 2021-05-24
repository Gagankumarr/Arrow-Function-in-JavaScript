
// *********************Chanllenge one satrted ***************//

const calcAverage = (score1, score2, score3) => {          // arrow  function
    avgScore = (score1 + score2 + score3) / 3;
    return avgScore;
}

let avgDolphins = (calcAverage(44, 23, 71));
let avgKoalas = (calcAverage(65, 54, 49));
checkWinner(avgDolphins, avgKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins = 2 * avgKoalas) {
        console.log(`Dolphins won as average score of dolphins is ${avgDolphins} and average score of koalas is ${avgKoalas}`);
    }
    else if (avgKoalas = 2 * avgDolphins) {
        console.log(`koalas won as average score of dolphins is ${avgKoalas} and average score of dolphins is ${avgDolphins}`);

    }
    else {
        console.log('draw');
    }
}

 // *********************Chanllenge one ends ***************//
