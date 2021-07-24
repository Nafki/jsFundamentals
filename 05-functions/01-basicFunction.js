/*

FUNCTIONS
Function are process the call upon to run an action.they can do the following
- take in an inpur to process,modify,or response to (not required)
- return avalue
- can be invoked(or called as aften as needed)
*/

// (1)      (2)
function  hi(){
    console.log('Hi!');
}
//1: key word - we use this to define a function
//2 name of the funtion- this is how we call function which we run
//3:code goes here will be "brain" of the function"


//calling the function
//in order to innvoke9call0 a function, we will simply write
//it's name and put it's parenthesis after it
hi();

//when we console.log js will first evaluate the func, meaning it will run all of the code and look
//for a value from it. if we donot have return statement within the function,we will get back undefined.

let myName = 'Jerome';
function myNameCap() {
myName = myName.toUpperCase();
  // AVOID THIS IF YOU CAN (until much later)
  // THIS IS CALLED RECURSION
  // (calling a function within itself)
  // myNameCap()
hi();
}
// console.log() will not always run, or save, changes we make to see in the console. it is PURELY for us to see what is happening
// I get to look at this
// console.log(myName);
// THE COMPUTER gets to look at this
//myName
myNameCap();
console.log(myName);
//console.log(`This is working ${myName}`);
myNameCap();

// bellow are the above code with out notes 
function  hi(){
    console.log('Hi!');
}
hi();

let myName = 'Jerome';

function myNameCap() {
myName = myName.toUpperCase();
hi();
}
myNameCap();
    console.log(myName);
myNameCap();

/*
FUNCTION DECLARATION

a chunk of code that performes a set chunk of code when it is invoked or called
*/

function funcOne(){
    console.log('hi dear');
}

console.log(funcOne); // with out () not invoked but if we put console it will call or invoke
funcOne() // call the function followed by ()

/*
FUNCTION EXPRESSION

assigning a function to a variable is what we call an expression!

*/

let first = function funcTwo(){
    console.log('code being run in the function expression');
}
first();

let example = function () { //another way we can call function
    console.log('what is my name?');
}
example();
console.log(typeof example);  //function
console.log(typeof example()); //undefined is the type

/*
ANONYMOUS FUNCTION

anonymous function are stored in memory but the run time do not automatically create a reference to it.
the main use would be to pass these function through another func. may be have a ternary where if some thing is true
we run one func, else we run different func.
 */

let anon = function() {  //common use would be to assign these to variable
    console.log('anonymous function');
}
anon();

//example of writting anon func. below
//true || false ?
 //function( {console.log('true')} :)
 //function( {console.log('false')} :)
//fetch('something')
  //  . then(function(response{response.jason)})

/*
PARAMETERS

//we will be using functions to pass information and return a result
//parameters will allow our functions to take in ourside information

*/

function parameterFunc(num) {
    console.log(num + 1);
    return num + 5;  //
}

console.log(parameterFunc(7));
//parameterFunc('bruce');
//parameterFunc('another test');
//parameterFunc([1,2,3,4,5]);

let returnTest = 5;
parameterFunc(returnTest) //6
console.log(parameterFunc(returnTest)) // 10

let myReturn = parameterFunc(returnTest) //or let myReturn = parameterFunc(15 or your value number)
console.log('return:',myReturn)

//let myReturn = parameterFunc(15, 27) //js ignore 27 because it is not in ()
console.log('return:',myReturn)

let firstName = 'Jane';
let lastName = 'Doe'

function greeting(first, last) {
    console.log(`Hi,${first} ! Welcome back!`);
    console.log(`This is the first parameter:${first}`);
    console.log(`This is the second parameter:${last}`);
}
greeting(firstName);
greeting(lastName);
greeting(); 
greeting(firstName, lastName);
greeting(firstName, null);
greeting('', lastName);