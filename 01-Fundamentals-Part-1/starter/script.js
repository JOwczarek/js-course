/*
//Use of ; at end of lines is not necessary but good practice
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);
use camel case to name variables like firstName, cannot start variable name with a number, can only use letters, numbers, underscores, and $. Cannot use reserved js keywords, do not start variables with an upper case letter, all uppercase is use for constants. Use variable names that are descriptive, it should be easy to understand what the variable is used for.
let firstName = "Party Monster";

console.log("First Name: " + firstName);

// Number - floating point numbers used for both doubles and ints
// String used for characters and strings
// boolean - true or false
// Undefined - variable with no value
//null - empty value
// bigint - number bigger than number can hold
//dynamic typing means js will auto assign based on value


let javascriptIsFun = true;
console.log(javascriptIsFun);
console.group(typeof javascriptIsFun);

//typeof null is an object


// Use let for variables that may be reassigned or mutated
//const variable cannot be mutated or reassigned
// cannot have unassigned const variables
//var is old way of declaring variables before es6

let funNumbers = 8;

console.log("funNumber:", funNumbers, "^2", funNumbers ** 2);

const firstName = "Josh";
const lastName = "Owczarek";

//Use + to concatenate strings
console.log(firstName + " " + lastName);

let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);


function add(a, b) {
  return a + b;
}

console.log(add(2, 5));

let array = [];


let x, y;

x = y = 25 - 10 - 5;
console.log(x, y);
let num = 8;
function average(x, y) {
  return (x + y) / 2;
}
console.log("Average ", average(x, num))


//Template Literals
const firstName = "Josh";
const job = "student";
const birthYear = 1988;
const year = 2021;

const details = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + " !";

console.log(details);

// Must use `` backtick above tab key to use template literals and ${} to get the value from the variable
const detailsNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(detailsNew);

console.log("Use \\n\\ \n\ to place \n\ multiple lines with the classic string");
console.log(`use return key
to place new line with template literals`);


//If else statements

const age = 14;
const drivingAge = 18;

// If/else control structure, control flow of code execution
if (age >= drivingAge) {
  console.log(`The driver is old enough`);
} else {
  const yearsToDrive = drivingAge - age;
  console.log(`Too young to drive🤣 wait ${yearsToDrive} more years!`);
}

const birthYear = 2010;
// Must define variable outside code block so it does not go out of scope
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);



//Type conversion is manually converting one type of data to another type coercion is when js does it for us behind the scenes

//type conversion
const inputYear = "1991";
console.log(inputYear + 18);
//the conversion on happens for the log, does not change the value in the variable
console.log(Number(inputYear) + 18);
//get nan when trying to convert a string to number that is not convertable
console.log(Number("Josh"));
console.log(typeof NaN);

console.log(String(23), 23);


//type coercion

console.log("I am " + 32 + " years old.");
console.log("23" - "10" - 5);
// + operator will convert to string all others will convert to number

console.log("23" + 10);
console.log("23" > "15");

let n = "1" + 1;
// string 11 - 1
n = n - 1;
console.log(n);



// Truthy and Falsy values
// Falsy values will be false if converted to boolean
//There are only 5 falsy values 0, "", undefined, NaN, null

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(22));
console.log(Boolean("null"));
console.log(Boolean({}));
console.log(Boolean(false));
console.log(Boolean(true));

// js will coerce boolean in logical operators and control functions

const money = 0;

if (money) {
  console.log("Spend that money!");
} else {
  console.log("Save some money!");
}

let height = 0;

if (height || height != 0) {
  console.log("Height is defined!");
} else {
  console.log("Height not yet defined!");
}



// === is strcit equality operator. no type coercion
const age = 18;
if (age === 18) {
  console.log("You just became an adult.");
}
// == loose equality operator, type coercion, avoid as much as possible
// can interduce bugs that are hard to find
console.log(18 == "18");
const favoriteNum = Number(prompt("What is your favorite number?"));
console.log(favoriteNum);
console.log(typeof favoriteNum);

if (favoriteNum === 23) {
  console.log(`${favoriteNum} is an awesome number!`)
} else if (favoriteNum === 7) {
  console.log(`${favoriteNum} is also cool!`);
} else {
  console.log(`${favoriteNum} is not 7 or 23`);
}

if (favoriteNum !== 23) {
  console.log(`${favoriteNum} is not cool. 
  Why not 23?`)
}



//Boolean Logic

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasDriversLicense);
console.log(!hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense && !hasGoodVision);
console.log(!hasGoodVision && !hasDriversLicense);
console.log(hasDriversLicense || hasDriversLicense);
console.log(!hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense || !hasGoodVision);
console.log(!hasGoodVision || !hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

const isTired = false;

if (shouldDrive && !isTired) {
  console.log("Should drive!");
} else {
  console.log("Someone else should drive...");
}


// Switch statement
//Does strict comparison
const day = `Sunday`;

switch(day) {
  case 'Monday' :
    console.log(`Full day off!`);
    break;
  case 'Tuesday' :
    console.log(`School`);
    break;
  case 'Wednesday' :
  case 'Friday' :
    console.log(`Work Work!`);
    break;
  case 'Thursday' :
    console.log(`Courtney Has class...`);
    break;
  case 'Saturday' :
    console.log(`Take the kids to work!`);
    break;
  case 'Sunday' :
    console.log(`Study day!`);
    break;
  default :
    console.log(`Messed up!`);
}

if (day === 'Monday'){
  console.log(`Full day off!`);
} else if (day === 'Tuesday'){
  console.log(`School`);
} else if (day === 'Wednesday' || day == 'Friday'){
  console.log(`Work Work!`);
} else if (day === 'Thursday'){
  console.log(`Courtney Has class...`);
} else if (day === 'Saturday'){
  console.log(`Take the kids to work!`);
} else if (day === 'Sunday') {
  console.log(`Study day!`);
} else {
  console.log(`Messed up!`);
}

*/

//Difference between statements and expressions
//Expression is a piece of code that produces a value.
// Like 3 + 4 or 1988 or true & false
// A statement is usually a larger piece of code that 
// performs actions, like if/else and switch statements
//template literals expect expressions

//Conditional operator

const age = 32;
// ? is the if : is the else. must have an else statement
// also called the ternary operator, a boolean, an if, and an else;
age >= 18 ? console.log("Adult!>!") :
console.log("NOT Adult!>!");

const drink = age >= 18 ? `Beer` : `water`;
console.log(`${drink}`);

// transpiling and polyfilling with babel converts modern javascript 
// back to es5 to allow older browser verions to still work ES6+
// means js from es6 to es2020, esnext is features that will be added
// to es and are currently suppored by browsers before release