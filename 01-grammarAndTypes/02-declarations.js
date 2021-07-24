/*
what is avariables?

variables are named containers for sorting data.
we can think of this containers as a resource we can call up on later.Each variable allow us to store data
which could be a value or a function, that we will want to reference back to
*/

let a = 2;

/*
-"let" is our key word
-"a" is our Name of our variables
-"=" is our asginment operator
-"2" is our variable value
*/

let b = 1;
console.log(a + b);

/*
restrictions with variables
- a variable must begain with a letter,underscore or dollar sign
- number may follow above character,but not come first in the name
- java script is case sensetive- 'hello' and 'Hello are different variables
- no space are allowed in viriable names
- camelline is best paractice for naming in js. this will help keep names of varibles
readable
ex:
    let myName = 'Jarome';
    is easier to read than
    let myname = 'jarome';
*/
let startingWithLetter = 'test'; 'works';
let _startingwithunderScore = 'test'; 'works';
let $startingWithDollarSign ='test';'works';

//let  5startingWithNumber= 'brakes';// can not start a variable name with a number
// let -startWithLetter= 'breakes'; // can not start with -
console.log(startingWithLetter,_startingwithunderScore,$startingWithDollarSign);

//ctr + alt + n will run code runner(window)
//ctrl + option + n will run code runner (mac)

/*
KEYWORDS
var,let,const
- var: the old key word for variables.we will not use this much but it is still used depending on 
the project and when it was made. we will focus on let and const.

- let: the new keyword for variable which was introduces in ES6 * newest version of ECMAScript, which is standardization
of js

- const: also 'new' and declares unchangeable,or constant variable.
the only limits of const variables is that once they are decleared/assigned their value will NEVE change.
*/

var variable = 'var variable';
let letVariable = 'letVariable';
const constVariable ='const Variable';

console.log(variable, letVariable, constVariable);

/*
decoration are the left side of the assignment operator (=) with in a variable
- let x

intializtion are the right side of the assinment operator (=) and set the value of the variable

- let x = 10
10 would be the intialization
*/

let x = 10;
console.log('Declaration:', x);

x=10;
console.log('intialization 1:', x);

x=33;
console.log('intialization 2:', x);

let today 

today= 'Awesome!';
console.log(today, efa); // great! wonderful!

efa = 'super';
//console.log today, efa // error

const example; //error
example = 'Testing';
console.log(example);