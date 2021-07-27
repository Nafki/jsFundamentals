/*
ARROW FUNCTIONS

arrow functions are expressional functions that can be simplified 
into one of two forms: Concise body and block body. The main goal
is to generate shorter syntax for writting a function
*/

//Regular Function
function redFunc(){
    console.log('just a regular function');
}
redFunc();
//   1          2   3         4
let arrowFunc = () => console.log('function in one line');
arrowFunc();

/*
1: A variable created to hold the value of our anonymous arrow function
    - arrow function is ALWAYS anonymous.
2: parameters are still capable of being added
    -parameters go in the () as they would with a nornal function,
    BUT if we only have 1, no more re less parameter we do not need ()
    If no parameters we still require to put ().
3: "How we see an arrow". this is js syntax that says we are about to process
a function.
4.The code the arrow function will run, or execute. i.e "do this"
*/

let arrow = (x) => console.log(x);
arrow(10);

//!CONCISE VS BLOCK BODY

//CONCISE BODY
/* when we have a simple return, or response, from our arrow
function,it makes sense write in a concise,simplified way.
when we use a concise body arrow function, the "return" statement 
is implied(meaning we do not have to write it)
*/

//let conciseBody = (x,y) => console.log(x + y);
//conciseBody(1,2);

let conciseBody = (x,y) => x + y;
console.log(conciseBody(1,2));   // same result with the above

//let conciseBody = (x,y) => x + y; //=> x+y is like return x+y or implied return
//console.log(conciseBody(1,2)); 

//let conciseBody = (x,y) => x + y; 
//let result = conciseBody(1,2) // return sets conciseBody(1,2)=3
//console.log(result); 

let slightlyComplexConcise = (x,y) => x > 2 && y < 2 ? 
console.log(`${x} is greater than 2 and ${y} is less than 2`):
console.log(`${x} and ${y} are where we want them`)

slightlyComplexConcise(3,1);
slightlyComplexConcise(2,1);

//BLOCK BODY
/*
- In any block body the 'return' keyword IS required. We will include curly braces.
- sometimes it will sense to use block body if we need to do multiple lines of code
*/

let blockArrow = (x,y) => {
    console.log(`${x} and ${y} are in a block body arrow function`)
    //return `${x} and ${y} are in a block body arrow function`
    //ANY code below the return statement in a function will be ignored.
    //if we write code below it, it will no run
    //console.log();
}
(blokArrow(1,2));

let blockResponseReturn = blockArrow(1,2); // variable will hold the value of the return string
let blockResponseLog = blockArrow(1,2); // variable will be undefined
console.log('LOG RESPONSE:' ,blockResponseLog ); //undefined because console.log tells us and
//and return tells the computer.

/*// challenge - rewrite to concies and block body function
let hero = 'Robin Hood';
let nock = 1;

function shot(x,y){
    y < 3 ? console.log(`${x} only shot ${y} arrow...`) : console.log(`${x}
    shot ${y} arrows at the target!`);
}
*/

let hero = 'Robin Hood';
let nock = 1;

let shot = (x, y) => y < 3 ? console.log(`${x} only shot ${y} arrow...`) : console.log(`${x}
    shot ${y} arrows at the target!`);

shot(hero, nock);

// challenge part 2- use block body, pass the same variables but increase the number
//of shots until the second console.log printed

let hero = 'Robin Hood'
let nock = 1;
//1-block body arrow function?
//2-pass in 2 variables
//3- run the conditional
//4-repeat the code until the result changes?

let shoot = (x, y) => {
    
    for(y; y < 4; y++){
        console.log('y:',y);
    if(y < 3){
        console.log(`${x} only shot ${y} arrow...`)
    } else {
        console.log(`${x} shot ${y} arrows at the target!`)
    };
    };
}

shoot(hero, nock);








