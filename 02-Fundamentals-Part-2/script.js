/*Strict mode must be the first line of code in the file
It is used to write more secure js. You can also use strict for only one function or block. It helps programmers write less error prone code by forbidding
programmers from doing things and does not allow
bugs that js would normally not catch. 
Strict will also proved some reserve words for 
featurs that are not yet implemented.
*/
'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// /*If not using strict the undefined variable would
// not throw an error, it would just fail silently.*/
// if (passTest) {
//     // hasDriversLicens = true;
//     hasDriversLicense = true;
// }

// if (hasDriversLicense) {
//     console.log('I can now drive.');
// }

/*Functions
They are pieces of code that we can reuse over 
and over again */

// function logger() {
//     console.log(`My name is Josh`);
// }
// /* This is called running, calling, or invoking 
// the function*/
// logger();
// logger();
// logger();

// /* Functions can use and return data, put something
// in the function, the function does something, and 
// returns the result. Do not repeat code, use functions
// to keep the code "dry"*/

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);

//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`

//     return juice;
// }

// /*Parametes are what you put in, arguemments are 5 and 0 in this case. */
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const fruitPunch = fruitProcessor(4, 10);
// console.log(fruitPunch);

// /**
//  * 
//  * Function declaration 
//  * can be called before they are defined in the code
//  * because of hoisting.
//  */
// function calcAge1(birthYear){
//     return 2021 - birthYear;
// }

// const age1 = calcAge1(1993);
// console.log(age1);


// /** 
// * Anonymous function, has no name and stored in a
// * variable. Cannot be called before they
// * Function expression
//  */

// const calcAge2 = function (birthYear){
//     return 2021 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age2);


// /**
//  * Arrow Functions
//  */

// /**
//  * Still a function expression. do not need to write
//  * return. Great for one line functions.
//  */
// const calcAge3 = birthYear => 2037 - birthYear;

// const yearsUntilRetirement = (birthYear , firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetirement(1988, "Josh"));


// /**
//  * Functions calling Functions
//  */

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

/**
 * Use arrays to store data
 */

// const friends = ["Courtney", "Cyrus", "Rebekkah"];
// console.log(friends);

// /**
//  * Must use new keyword for declaring arrays this way
//  */
// const years = new Array(1988, 1989, 2010, 2012, 2016);

// /**
//  * use square brackets and index to get element from array
//  */
// console.log(friends[0]);
// console.log(friends[2]);

// /**
//  * Get length of array, not 0 based. 
//  * must subtract one to align with array index.
//  */
// console.log(friends.length);
// console.log(years[years.length - 1]);

// /**
//  * Only primitive types are immutable, not arrays
//  */
// friends[3] = "Luke";
// friends[4] = "Ryker";

// console.log(friends[3]);
// console.log(friends[4]);

// const josh = ["Joshua", "Owczarek", 2021 - 1998];

/**
 * Array methods
 */

// const friends = ["Courtney", "Cyrus", "Rebekkah"];

// friends.push("Luke");
// /**
//  * push method adds element to end of array and
//  *  returns the lenght of the new array
//  */
// let newLength = friends.push("Ryker");

// console.log(newLength);

// /**
//  * Adds element to beginnng of array and 
//  * returns new length of array
//  */
// newLength = friends.unshift("Tucker");

// console.log(newLength);

// /**
//  * Removes last element of array and returns it.
//  */
// let removed = friends.pop();
// console.log(removed);
// friends.push(removed);
// /**
//  * Remoces first element of the array and returns it.
//  */
// removed = friends.shift();
// console.log(removed);
// friends.unshift(removed);

// /**
//  * Returns -1 if the element is not in the array.
//  */
// console.log(friends.indexOf("Bob"));

// /**
//  * More modern es6 method. Returns true/false.
//  * Uses strict equality.
//  */
// console.log(friends.includes("Courtney"));


// /**
//  * Objects Literal Syntax
//  * Object person has 5 properties, each is a key
//  * value pair. 
//  */
// const person = {
//   firstName: "Josh",
//   lastName: "Owc",
//   age: 2021 - 1988,
//   job: "student",
//   friends: ["Courtney", "Alika"]
// };

// console.log(person);
// /**
//  * use . notation to get property value
//  * you can also use bracket notation
//  * you can use expressions with bracket notation
//  */
// console.log(person.lastName);
// console.log(person['lastName']);

// const nameKey = 'Name';
// console.log(person['first' + nameKey]);
// console.log(person['last' + nameKey]);

// const userInterest = prompt('What do you want to know?');

// /**
//  * . is undefined
//  */
// if (person[userInterest]) {
//   console.log(person.userInterest);
//   console.log(person[userInterest]);
// } else {
//   console.log("Undefined for person.")
// }

// person.location = "Arizona";
// person["interest"] = "programming";

// console.log(`${person.firstName} has ${person.friends.length} friends, and his best friend is called ${person.friends[0]}`);
/**
 * Storing functions in objects, arrays are
 * are also objects and have their own defined
 * methods.
 */

/**
 * Storing functions in objects
 */

// const josh = {
//   firstName: "Josh",
//   lastname: "Owc",
//   birthYear: 1988,
//   job: "student",
//   friends: ["Courtney", "Alika", "John"],
//   hasDriversLicsence: true,
//   /**
//    * Any function attached to an object is a method.
//    * Use the this. to access variables in the object
//    * 
//    */
//   // calcAge : function (birthYear) {
//   //     return 2021 - birthYear;
//   // }

//   // calcAge : function () {
//   //     console.log(this.birthYear);
//   //     return 2021 - this.birthYear;
//   // }
//   calcAge: function () {
//     this.age = 2021 - this.birthYear;
//     return this.age;
//   },

//   infoDetail: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and has ${this.hasDriversLicsence ? "a" : "no"} drivers licsence.`
//   }
    
//     // calcAge : function () {
//     //     console.log(this.birthYear);
//     //     return 2021 - this.birthYear;
//     // }
//     calcAge: function () {
//        this.age = 2021 - this.birthYear;
//        return this.age;
//     }
// };

// console.log(josh.calcAge());
// console.log(josh.age);
// console.log(josh.infoDetail());



for(let i = 0; i < 10; i++ ) {
    
}
