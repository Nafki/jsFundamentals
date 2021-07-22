/*
DATA and STRUCTURE TYPES
- Primitive data types
    - boolean
    - undifin
    - string
    - number
    - bigInt*
    - symbol*
- null
- object
- function 
*/

/*
BOOLEAN
- a boolean has two possible values: true or false
*/

/*
NULL
 a null value is empty value. Think of empty container that has space to fill. Nul and undifine are two different things.
 in real time we use it for data rest.
 */

let empty = null;
console.log(empty);

let on= true;
let off = false;
console.log (on);
console.log (false);

/*
undefined
no value has been assigned to a container and does not even act as an empty container
in real time we usually avoid undefined.
*/

let unknown;
let unef = undefined;

//the difference between null and undefined is 
/* null is like a continer nothing in it
undefined is variables that has not set or created yet
*/

/* NUMBERS JUST numbers
for big numbers js is not good, 15 diget limits, more than 15 will be roundeded(like 0's)
js is not good on decemal numbers too
*/

let degree = 87;
console.log(degree);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let whatif = (0.2*10 + 0.1*10)/10;
console.log(whatif);

/*
STRINGS
strings represent text and wrapped in either single oe double qoutes.
*/

let doubleQoute = "doubleQoutes";
let singleQoute = "singleQoute";
console.log(doubleQoute);
console.log(singleQoute);

letbothQoutes ='I said, "how cool is that"';
letbothQoutesAlt ='I said, "cool right?"';
console.log(letbothQoutes);
console.log(letbothQoutesAlt);

// const contractions1 = "now you can't run";
// const contractions2 ='now you can\'t run';


// numbers and srtings//

let addThese = 100 + 200;
console.log(addThese);

let addTheseAlso ='1050' + '100';
console.log(allTheseAlso);

// we can use an operation called 'typeof' to return a srting of the variable's type

console.log(typeof addThese);  //result in number
console.log(typeof addTheseAlso); // result in string

let addTest = '1050' + 100; 
console.log(addTest);
//let addTestAlso = '1050' + '100'; 
//console.log(addTestAlso);

/* OBJECTS
used to store many values instead of just one. consider them as a collection of different 
variables in one container.
denoted by curly backets: {} 
*/

let frodo = {
    // an object has many properties in side of it
    race: 'Hobbit',  // string
    //name: value 
    // we must separete properties in an object with comma
    rings: 1,   //number
    string: true   //boolean
}
    console.log(frodo);
    console.log(typeof frodo);
    console.log(frodo.rings);   // we put Dot notation(.) to get property out of object
    
/* 
ARRAYS
 containers that hold a list of items
 all items are with in: [] 
 regardless of data type, all items are sepereaed by commas
*/
let arrayList = ['position 1', 'position 2', 'position 3,'];
console.log(arrayList);

let anotherExample = ['muffins','pizza', 'bread', 17, false, null];
console.log(anotherExample[0]);  //square bracket notation, we will get the first list 'muffin'
console.log(typeof anotherExample);  // array is an object according to js and it has an index but the do function differently.

/* 
ADDITION VS CONCATENATION
 JS sees the + symbol in two different ways
 - when we use it with numbers,it will use the built-in math functionlity
 - when we use it with strings, it will ignor the math functionality and concats, 
 or combines the two string into one.
*/

let strings = 'one' + ' ' + 'is a number';
console.log(strings);

let concatDiff = 1050 + '100';
console.log(concatDiff);
console.log(typeof concatDiff);

//challenge set each variable to its respective type

let firstName = 'Jack';
let lastName = 'Issac';
let houseNumber = 244367;
let city = 'Indiapolis';
let state = 'Indiana';
let zipcode = 4098722;
console.log(firstName, lastName + ',', houseNumber, city + ',',
 state, zipcode);

/* 
string: proporties
properties are quantities associated with a data type
string has properties or qualities, associated with them  the length of astring is property
*/

let myname ='Jerome';
console.log(myname.length);

/*
STRING METHODS
 methods are tools that can help us manupulate data
 .properties .methoth()
 no parents     parents
*/

let myNameIs = 'Jerome';
console.log(myNameIs.toLocaleUpperCase()); //() HOLDS NOTHING IF DEPLOY

let home = 'zionsville';
console.log('includes method:', home.includes('zionsvill')) //then it is true but if we have .includes('Carmel') result will be false

let sent ='it is funn';
const str = 'it is hard to see that';
const word = sent.split(' ');
console.log(word);