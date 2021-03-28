'use strict'

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital city is ${capitalCity}.\n`;
}

let uSDetails = describeCountry("United States", 330, "Washington D.C.");
let mexicoDetails = describeCountry("Mexico", 128, "Mexico City");
let canadaDetails = describeCountry("Canada", 38, "Ottawa");

console.log(uSDetails, mexicoDetails, canadaDetails);

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const chinaPercent = percentageOfWorld1(1441);
const uSPercent = percentageOfWorld1(330);
const canadaPercent = percentageOfWorld1(38);

console.log(`${chinaPercent}% of world population`);
console.log(`${uSPercent}% of world population`);
console.log(`${canadaPercent}% of world population`);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const chinaPercent2 = percentageOfWorld2(1441);
const uSPercent2 = percentageOfWorld2(330);
const canadaPercent2 = percentageOfWorld2(38);

console.log(`${chinaPercent2}% of world population`);
console.log(`${uSPercent2}% of world population`);
console.log(`${canadaPercent2}% of world population`);

const percentageOfWorld3 = (population) => (population / 7900) * 100;

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

const populations = [1441, 330, 138, 38];

console.log(`Array has 4 elements: ${populations.length === 4}`);

const percentages = [percentageOfWorld3(populations[0]), percentageOfWorld3(populations[1]), percentageOfWorld3(populations[2]), percentageOfWorld3(populations[3])];

const neighbours = ["Canada", "Mexico",
    "Bahamas"];

neighbours.push("Utopia");
console.log(neighbours.includes("Germany") ? "Probably a European Country." : "Probably not in Europe");
neighbours.pop();
neighbours.push("Germany");
console.log(neighbours.includes("Germany") ? "Probably a European Country." : "Probably not in Europe");

const myCountry = {
    country: "United States",
    capital: "Washington D.C.",
    language: "English",
    population: 330,
    neighbours: ["Canada", "Mexico"],

    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};

console.log(myCountry.describe());
myCountry.population += 2;
console.log(myCountry.describe());
myCountry["population"] -= 2;
console.log(myCountry.describe());

myCountry["checkIsland"]();
console.log(myCountry["isIsland"]);
myCountry.neighbours = [];
myCountry["checkIsland"]();
console.log(myCountry["isIsland"]);

for(let i = 1; i < 51; i++) {
    console.log(` Voter ${i}'s vote counted!`)
}

let percentages2 = [];

for( let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
    console.log(percentages2[i]);
    console.log(percentages[i]);
}

const listOfNeighbours = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for(let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbor: ${listOfNeighbours[i][j]}`)
    }
}

