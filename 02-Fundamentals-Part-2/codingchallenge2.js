
const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

const checkWinner = function (dScore, kScore) {

    if (dScore >= (2 * kScore)) {
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

/**
 * Challenge 2 
 */

const calcTip = bill => bill < 50 || bill > 300 ? bill * 0.2 : bill * 0.15;

const calcTip2 = (bill) => {
    if (bill < 50 || bill > 300) {
        return bill * .2;
    } else {
        return bill * .15;
    }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`Bill: S${bills[0]} Tips: S${tips[0]} Total: $${totals[0]}.`);
console.log(`Bill: S${bills[1]} Tips: S${tips[1]} Total: $${totals[1]}.`);
console.log(`Bill: S${bills[2]} Tips: S${tips[2]} Total: $${totals[2]}.`);
