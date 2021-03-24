'use strict'

function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and it's capital city is ${capitalCity}.\n`;
}

let uSDetails = describeCountry("United States", 330, "Washington D.C.");
let mexicoDetails = describeCountry("Mexico", 128, "Mexico City");
let canadaDetails = describeCountry("Canada", 38, "Ottawa");

console.log(uSDetails, mexicoDetails, canadaDetails);

function percentageOfWorld1(population){
    return (population/7900) * 100;
}

const chinaPercent = percentageOfWorld1(1441);
const uSPercent = percentageOfWorld1(330);
const canadaPercent = percentageOfWorld1(38);

console.log(`${chinaPercent}% of world population`);
console.log(`${uSPercent}% of world population`);
console.log(`${canadaPercent}% of world population`);

const percentageOfWorld2 = function(population){
    return (population/7900) * 100;
}

const chinaPercent2 = percentageOfWorld2(1441);
const uSPercent2 = percentageOfWorld2(330);
const canadaPercent2 = percentageOfWorld2(38);

console.log(`${chinaPercent2}% of world population`);
console.log(`${uSPercent2}% of world population`);
console.log(`${canadaPercent2}% of world population`);

const percentageOfWorld3 = (population) => (population/7900) * 100;

const chinaPercent3 = percentageOfWorld3(1441);
const uSPercent3 = percentageOfWorld3(330);
const canadaPercent3 = percentageOfWorld3(38);

console.log(`${chinaPercent3}% of world population`);
console.log(`${uSPercent3}% of world population`);
console.log(`${canadaPercent3}% of world population`);

const describePopulation = (country, population) => {
    const percentOfWorld = percentageOfWorld3(population);

    return `${country} as ${population} million people, which is about ${percentOfWorld}% of the world`;
}

console.log(describePopulation("China", 1441));
console.log(describePopulation("USA", 330));
console.log(describePopulation("Canada", 38));