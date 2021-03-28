'use strict';

/**
 * Only difference between constructor function and normal function
 * is constuctor function is called with the New operator.
 * constructor functions always start with a captial letter.
 * Cannot use arrow function for constructor functions
 * NOT a class, a constructor function
 */

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

/**
 * Never create a method this way, each object created from this
 * constructor function will carry this function. This takes up 
 * unnecessary space.
 */
    // this.calcAge = function () {
    //     this.age = 2021 - birthYear;
    // }
}

/**
 * Using new keyword.
 * 1. New {} object is created
 * 2. function is called and this = {}
 * 3. {} linked to a prototype
 * 4. function returns object automatically
 * 
 * Objects created from instructor functions.
 */

const josh = new Person("Josh", 1988);
const jonas = new Person("Jonas", 1991);
const fred = new Person("Fred", 1911);
console.log(josh);
console.log(jonas);
console.log(fred);
console.log(josh instanceof Person);

/**
 * Prototypes - all functions have a property called prototype
 */

console.log(Person.prototype);

/**
 * The Person object delegates its methods to the Person.prototype
 * Person objects will have access to the calcAge method without
 * it being in each object.
 */
Person.prototype.calAge = function (){
    this.age = 2021 - this.birthYear;
}



josh.calAge();
console.log(josh.birthYear);
/**
 * josh.__proto__ gives the prototype property object of Person 
 * constructor function. Person.prototype has a property of .constructor
 * with a reference to the Person constructor function
 * Person.prototype is a prototype not of person but of the objects
 * created by person.
 * A person object has a link to the prototype through its .__proto__
 * property that gives it access to the methods and properties of the 
 * prototype
 */
console.log(josh.__proto__);
console.log(Person.prototype);
console.log(String.prototype);
