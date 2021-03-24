

function BMI(mass, height) {
  return mass / (height ** 2);
}

let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBmi = BMI(markWeight, markHeight);
let johnBmi = BMI(johnWeight, johnHeight);
let johnHigherBMI = johnBmi > markBmi;
console.log("Mark's BMI: ", markBmi);
console.log("John's BMI: ", johnBmi);
console.log("John BMI > Mark: ", johnHigherBMI);

let markWeight2 = 95;
let markHeight2 = 1.88;

let johnWeight2 = 85;
let johnHeight2 = 1.76;

let markBmi2 = BMI(markWeight2, markHeight2);
let johnBmi2 = BMI(johnWeight2, johnHeight2);
let johnHigherBMI2 = johnBmi2 > markBmi2;
console.log("Mark's BMI2: ", markBmi2);
console.log("John's BMI2: ", johnBmi2);
console.log("John BMI2 > MarkBMI2: ", johnHigherBMI2);

console.log("Part 2")

if (johnHigherBMI) {
  console.log(`John's BMI of ${johnBmi} is higher than Mark's BMI of ${markBmi}`);
} else {
  console.log(`Mark's BMI of ${markBmi} is higher than John's BMI of ${johnBmi}`);
}

if (johnHigherBMI2) {
  console.log(`John's BMI of ${johnBmi2} is higher than Mark's BMI of ${markBmi2}.`);
} else {
  console.log(`Mark's BMI of ${markBmi2} is higher than John's BMI of ${johnBmi2}.`);
}
