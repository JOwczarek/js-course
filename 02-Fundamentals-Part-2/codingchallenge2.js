
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

const mark = {
    fullName: "Mark Miller",
    weight: 65,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.weight / (this.height ** 2);
    }
}


const john = {
    fullName: "John Smith",
    weight: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.weight / (this.height ** 2);
    }
}

mark["calcBMI"]();
john["calcBMI"]();

console.log(mark.BMI > john.BMI ? `${mark.fullName}'s BMI (${mark.BMI} is greater than ${john.fullName}'s BMI(${john.BMI}))` : `${john.fullName}'s BMI (${john.BMI} is greater than ${mark.fullName}'s BMI(${mark.BMI}))`);


/**
 * Challenge 3
 */

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals2 = [];

for (let i = 0; i < bills2.length; i++ ){
    tips2.push(calcTip(bills2[i]));
    totals2.push(bills2[i] + tips2[i]);
}

for (let i = 0; i < bills2.length; i++ ){
    console.log(`The cost of bill ${i+1} is $${bills2[i]} and the tip
    should be $${tips2[i]} for a total of $${totals2[i]}.`); 
}

function calcAverage2(arr){
    let total = 0;
 

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total / arr.length;
}

console.log(calcAverage2(totals2));