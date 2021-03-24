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

