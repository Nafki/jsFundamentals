
//LOOPS
/*
Loops allow us to go over a block of information or code in a determined amount of cycles. It's important to note that it is possible for us to write code without declaring an endpoint.
Loops help us repeat a process without writing alot of code.
*/
/*
STRUCTURE
We have to setup our loops in a way that we can 
1) See where we are in a loop,
2) Consider what sort of condition we want to run it against, and 
3) Note when we are done with that condition and move on to the next iteration.
We need to:
    1) Create an Index
    2) Run a Condition
    3) Change to the indexing variable (execution of condition)
*/
//? Let's count to 10:
for( let i = 0; i <= 10; 1++){
    console.log(i);
}
/*
We state our loop with a "for". Within this function, we are injecting some parameters that JS will run against. index; condition, change index -> result.
Within parameters, we are stating our index declaration to 0. This is our baseline. We move on to asking if that variable is less than or equal to the number 10, take that set number and add 1 to it. Once that is processed, return that value (in this case "console.log" of that number). Once our condition is met, we return a FALSE which ends our loop. 
THIS is important to note:
for(<create an index variable>; <run condition>; <change index>) {
    <return results>
    <cont. until the condition is met>
}
*/
//? If don't indicate what our condition is, the loop will not have a finish line and thus run until we have to force close it.
//INFINITE LOOP!
/*
for(let i = 0; i++){
    console.log(i);
}
*/
//No condition means that JS doesn't know when to stop and will never assume that information.
//! CHALLENGE:
//* Using a for loop, set an index to 2.  Make a condition where if that number is greater than -10, change that index by subtracting 4 and console log each iteration.*/
//RESULT
for(let a = 2; a > -10; a -=4){
    console.log(a);
}
//We aren't limited by positive or negative numbers. We can cycle through varaiables assigned with strings.
let word = "supercalifragilisticexpialidocious"
for(let b = 0; b < word.length; b++){
    // .length is a method we can use in JS that helps us determine a value we may not know.
    console.log(b, word[b]);
    // 1) We set of each index and are displaying that.
    // 2) We set to display the value within the "object" of word. Each character that is assigned to the variable of "word" is provided an index value and this is how we are cycling through it.
    console.log(`The letter ${word[b]} is in position: ${b}`);
}

for (let j=0; j<= 10;j+=2){
    console.log(j)
}

/*
FOR IN LOOPS 
WITH FOR LOOPS WE ARE SEEKING THE INDEX value and runing against a condition. for in loops do not require an index number
has enumerable properties
*/

let city = {
    name: 'indianapolis',
    pop: 877000,
    speedway: true
}

for(info in city){   //info can be change to any thing
    console.log(info);
    //console.log(city.name);  //city.info looks for city={info:'value'}
    //console.log(city["name"]);
    console.log(city[info]);
}
/* for(bear in city){  // we name the first(info) when ever we want like bear
    console.log(bear);
}
*/

/* 
for(variable in object){
    run code
}
*/

let list = ['milk', 'egg', 'lunch meat', 'bread']
for(item in list){   // because this is array we put the list numbers
    //console.log(item);
    //console.log([0]) // we see milk(0) 4 times
    console.log(list[item]); //[] this will look what our key has in it like the item name
    console.log(list[2]);
}

//!challenge
/*
write a for loop that loops over a name, and will capitalize the first letter, 
and make all other letters lowercase
*/ 

let myName = 'dwiGht';

for(let i = 0; i <= myName.length; i ++ )  // loop continue till last letter 
console.log(myName.length);
console.log(myName.split('')); //gives us each letter split up

for(let index = 0; index <= myName.length-1; index++){
console.log(myName[index]);
console.log(myName[index].toUpperCase()); 

console.log('d'.toUpperCase());  //if we want specific letter upper case

//to get rid of undefine on out put we can use .length -1 for(let index = 0; index <= myName.length - 1; index++){

//console.log(myName[index]);
//console.log('d'.toUpperCase());
   // if(index === 0){
    //console.log(myName[index].toUpperCase());
//} else{
    //console.log(myName[index].toLowerCase());
//}
//console.log(myName);
//}

// the same with above but we put propCase here

//let propCase; 

//for(let index = 0; index <= myName.length-1; index++){
//console.log(myName[index]);
//console.log(myName[index].toUpperCase()); 

//console.log('d'.toUpperCase());  if we want specific letter upper case

//to get rid of undefine on out put we can use .length -1 for(let index = 0; index <= myName.length - 1; index++){

console.log(myName[index]);
//console.log('d'.toUpperCase());
if(index === 0){
   propCase= myName[index].toUpperCase(); //propCase ='D' because we assigned it
}else{
    //propCase += myName[index].toLowerCase()); //'D' + 'W' = 'Dw'
    propCase += myName[index].toLowerCase();
}  
} 
console.log(proCase);


// FOR IN VERSION

let myName = 'dwIght';

let proCase;

for(index in myName){
    index == 0 ? propCase = myName[index].toUpperCase() : propcase +=
    myName[index].toLowerCase();
}
console.log(propCase);

/*
FOR OF LOOP

Inorder to run a for loop, the 'thing' must me numbered ilke an array
has Iterable properties
*/

//let myObject = {
   // string: 'Peter'   
   // boolean: true,
   // number:1
//};
//for (item of myObject){
    //console.log(item);
//}


let indexArray = ['spot 1', 2, true, 'not fifth'];

for(let pos of indexArray){
    console.log(pos, 'was run through a "for of" loop');
}

/* 
for (variable of interable)
code goes here
}
an interable is  some thing that has numbers assigned to it like an array, 
where the first item is assigned a 0, the second a 1, and so on..eg arrays, strings
*/

let officeCharacters = ['Dwight', 'Michael', 'Jim'];

for(worker of officeCharacters ){
    if(worker === 'Dwight' || worker === 'Michael'){  // IF WE USE COMMA(,) INSTEAD OF || we will get only 'Michael
    console.log(worker, 'works in the office.');
    console.log(worker, 'works to much in the office.');
    }

    if(worker === 'Jim' && worker !== 'Dwight'){
        console.log('bear. beets. battlestar. moon');
    }
}  
