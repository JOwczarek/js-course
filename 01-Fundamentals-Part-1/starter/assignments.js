// Assignment 1
let country = "United States";
let continent = "North America";
let population = 300000000;

console.log("Assignment 1 | 03/22/2021");
console.log("Country: " + country);
console.log("Continent: " + continent);
console.log("Population: " + population);

let isIsland = false;
let language = "English";

console.log("Assignment 2 | 03/23/2021");
console.log("Country: " + country);
console.log("Continent: " + continent);
console.log("Population: " + population);
console.log("Island: " + isIsland);
console.log("language:country " + language);


console.log("Assignment 3 | 03/23/2021");
console.log("Country: " + country);
console.log("Continent: " + continent);
console.log("Population: " + population);
console.log("Island: " + isIsland);language
console.log("language: " + language);


population++;
console.log("Population ", population);
const finlandPop = 6000000;
const averagePop = 33000000;
const moreThanFinland = population > finlandPop;
const moreThanAveragePop = population > averagePop;
console.log("More people than Finland", moreThanFinland);
console.log("More people than average population", moreThanFinland);
const description = country + " is in " + continent + ", and its " + population + " people speak " + language;
console.log(description);

console.log("Assignment 4 | 03/23/2021");
const descriptionTl = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(descriptionTl);

console.log("Assignment 5 | 03/23/2021");

if (population > averagePop) {
  console.log(`${country}'s population is ${population - averagePop} above average`);
} else {
  console.log(`${country}'s population is ${averagePop - population} below average`);
}

console.log("Assignment 6 | 03/23/2021");

console.log('9' - '5' === 4);
console.log('19' - '13' + '17' === "617");
console.log('19' - '13' + 17 === 23);
console.log('123' < 57 === false);
console.log(5 + 6 + '4' + 9 - 4 - 2 === 1143);

// console.log("Assignment 7 | 03/23/2021");

// let numNeighbors = Number(prompt("How many countries neighbor your country?"));

// if (numNeighbors === 1) {
//   console.log(`Only ${numNeighbors} neighbor?`);
// } else if (numNeighbors > 1) {
//   console.log(`Wow! ${numNeighbors} neighbors!`)
// } else {
//   console.log("No Borders:(");
// }


const desiredLang = "English";
const desiredPop = 300000001;
const desiredIsland = false;

if (desiredLang === language && desiredPop >= population && desiredIsland === isIsland) {
  console.log(`You should live in ${country}.`);
} else {
  console.log(`${country} does not meet your criteria`);
}

switch(language) {
  case 'Mandarin' :
    console.log("Most native speakers!");
    break;
  case 'Spanish' :
    console.log("Second most native speakers!");
    break;
  case 'English' :
    console.log("3rd place!");
    break;
  case 'Hindi' :
    console.log("Number 4!");
    break;
  case 'Arabic' :
    console.log("Most native speakers!");
    break;
  default :
    console.log(`${language} is a great language too!`);
}

population = 17;

population > 33000000 ? console.log(`${country} population is above average.`) : console.log(`${country} population is below average.`);
