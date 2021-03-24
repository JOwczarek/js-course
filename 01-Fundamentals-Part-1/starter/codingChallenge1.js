

// function BMI(mass, height) {
//   return mass / (height ** 2);
// }

// let markWeight = 78;
// let markHeight = 1.69;

// let johnWeight = 92;
// let johnHeight = 1.95;

// let markBmi = BMI(markWeight, markHeight);
// let johnBmi = BMI(johnWeight, johnHeight);
// let johnHigherBMI = johnBmi > markBmi;
// console.log("Mark's BMI: ", markBmi);
// console.log("John's BMI: ", johnBmi);
// console.log("John BMI > Mark: ", johnHigherBMI);

// let markWeight2 = 95;
// let markHeight2 = 1.88;

// let johnWeight2 = 85;
// let johnHeight2 = 1.76;

// let markBmi2 = BMI(markWeight2, markHeight2);
// let johnBmi2 = BMI(johnWeight2, johnHeight2);
// let johnHigherBMI2 = johnBmi2 > markBmi2;
// console.log("Mark's BMI2: ", markBmi2);
// console.log("John's BMI2: ", johnBmi2);
// console.log("John BMI2 > MarkBMI2: ", johnHigherBMI2);

// console.log("Part 2")

// if (johnHigherBMI) {
//   console.log(`John's BMI of ${johnBmi} is higher than Mark's BMI of ${markBmi}`);
// } else {
//   console.log(`Mark's BMI of ${markBmi} is higher than John's BMI of ${johnBmi}`);
// }

// if (johnHigherBMI2) {
//   console.log(`John's BMI of ${johnBmi2} is higher than Mark's BMI of ${markBmi2}.`);
// } else {
//   console.log(`Mark's BMI of ${markBmi2} is higher than John's BMI of ${johnBmi2}.`);
// }

// let dScore1 = 96;
// let dScore2 = 108;
// let dScore3 = 89;

// let kScore1 = 88;
// let kScore2 = 91;
// let kScore3 = 110;

// let dScore4 = 97;
// let dScore5 = 112;
// let dScore6 = 101;

// let kScore4 = 109;
// let kScore5 = 95;
// let kScore6 = 123;

// let dScore7 = 97;
// let dScore8 = 112;
// let dScore9 = 101;

// let kScore7 = 109;
// let kScore8 = 95;
// let kScore9 = 106;

// function averageScore(one, two, three){
// return (one + two + three)/3;
// }

// const dAvgScore1 = averageScore(dScore1, dScore2, dScore3);
// const kAvgScore1 = averageScore(kScore1, kScore2, kScore3);

// const dAvgScore2 = averageScore(dScore4, dScore5, dScore6);
// const kAvgScore2 = averageScore(kScore4, kScore5, kScore6);

// const dAvgScore3 = averageScore(dScore7, dScore8, dScore9);
// const kAvgScore3 = averageScore(kScore7, kScore8, kScore9);

// if (dAvgScore1 > kAvgScore1) {
//   console.log(`The Dolphins win the tournament with an average score of 
//   ${dAvgScore1} to the Koalas average score of ${kAvgScore1}`);
// } else if (kAvgScore1 > dAvgScore1) {
//   console.log(`The Koalas win the tournament with an average score of 
//   ${kAvgScore1} to the Dolphines average score of ${dAvgScore1}`);
// } else {
//   console.log(`The Koalas and Dolphins tie with an average score of ${dAvgScore1}`);
// }
// if ((dAvgScore2 > kAvgScore2) && (dAvgScore2 >= 100)) {
//   console.log(`The Dolphins win the tournament with an average score of 
//   ${dAvgScore2} to the Koalas average score of ${kAvgScore2}`);
// } else if ((dAvgScore2 < kAvgScore2) && (kAvgScore2 >= 100)) {
//   console.log(`The Koalas win the tournament with an average score of 
//   ${kAvgScore2} to the Dolphines average score of ${dAvgScore2}`);
// } else if (dAvgScore2 === kAvgScore2) {
//   console.log(`The Koalas and Dolphins tie with an average score of ${dAvgScore2}`);
// } else {
//   console.log(`The average scores were below 100, no one wins...`);
// }

// if ((dAvgScore3 > kAvgScore3) && (dAvgScore3 >= 100)) {
//   console.log(`The Dolphins win the tournament with an average score of 
//   ${dAvgScore3} to the Koalas average score of ${kAvgScore3}`);
// } else if ((dAvgScore3 < kAvgScore3) && (kAvgScore3 >= 100)) {
//   console.log(`The Koalas win the tournament with an average score of 
//   ${eAvgScore3} to the Dolphines average score of ${dAvgScore3}`);
// } else if ((dAvgScore3 === kAvgScore3) && (dAvgScore3 >= 100)) {
//   console.log(`The Koalas and Dolphins tie with an average score of ${dAvgScore3}`);
// } else {
//   console.log(`The average scores were below 100, no one wins...`);
// }

 const bill = 430;
 const tip = bill < 50 || bill > 300 ? bill * .2 : bill * .15;

 console.log(`Your bill was $${bill}, the tip was $${tip}, and your total is $${bill + tip}.`);