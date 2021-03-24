

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3)/3;
}

const checkWinner = function (dScore, kScore){

    if(dScore >= (2 * kScore)) {
        console.log(`Dolphins win (${dScore} vs ${kScore})`);
    } else if (kScore >= (2 * dScore)) {
        console.log(`Koalas win (${kScore} vs ${dScore})`);
    } else {
        console.log(`No Winners.(${kScore} vs ${dScore})`)
    }

}

const dolphineAvg1 = calcAverage(44, 23, 71);
const koalaAvg1 = calcAverage(65, 54, 49);

const dolphineAvg2 = calcAverage(85, 54, 41);
const koalaAvg2 = calcAverage(23, 34, 27);

checkWinner(dolphineAvg1, koalaAvg1);
checkWinner(dolphineAvg2, koalaAvg2);
checkWinner(dolphineAvg1, koalaAvg2);
checkWinner(dolphineAvg2, koalaAvg1);