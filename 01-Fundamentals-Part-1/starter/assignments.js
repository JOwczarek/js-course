// Assignment 1
let country = "United States";
let continent = "North America";
let population = 300000000;

console.log("Assignment 1 | 03/22/2021");
console.log("Country: " + country);
console.log("Continent: " + continent);
console.log("Population: " + population);

let isIsland = false;
let language;

console.log("Assignment 2 | 03/23/2021");
console.log("Country: " + country);
console.log("Continent: " + continent);
console.log("Population: " + population);
console.log("Island: " + isIsland);
console.log("language: " + language);

const LANGUAGE = "English";
const COUNTRY = country;
const CONTINENT = continent;

console.log("Assignment 3 | 03/23/2021");
console.log("Country: " + COUNTRY);
console.log("Continent: " + CONTINENT);
console.log("Population: " + population);
console.log("Island: " + isIsland);
console.log("language: " + LANGUAGE);


population++;
console.log("Population ", population);
const finlandPop = 6000000;
const averagePop = 33000000;
const moreThanFinland = population > finlandPop;
const moreThanAveragePop = population > averagePop;
console.log("More people than Finland", moreThanFinland);
console.log("More people than average population", moreThanFinland);
const description = COUNTRY + " is in " + CONTINENT + ", and its " + population + " people speak " + LANGUAGE;
console.log(description);

console.log("Assignment 4 | 03/23/2021");
const descriptionTl = `${COUNTRY} is in ${CONTINENT}, and its ${population} people speak ${LANGUAGE}`;
console.log(descriptionTl);

console.log("Assignment 5 | 03/23/2021");

if (population > averagePop) {
  console.log(`${COUNTRY}'s population is ${population - averagePop} above average`);
} else {
  console.log(`${COUNTRY}'s population is ${averagePop - population} below average`);
}

console.log("Assignment 6 | 03/23/2021");

console.log('9' - '5' === 4);
console.log('19' - '13' + '17' === "617");
console.log('19' - '13' + 17 === 23);
console.log('123' < 57 === false);
console.log(5 + 6 + '4' + 9 - 4 - 2 === 1143);

console.log("Assignment 7 | 03/23/2021");

let numNeighbors = Number(prompt("How many countries neighbor your country?"));

if (numNeighbors === 1) {
  console.log(`Only ${numNeighbors} neighbor?`);
} else if (numNeighbors > 1) {
  console.log(`Wow! ${numNeighbors} neighbors!`)
} else {
  console.log("No Borders:(");
}