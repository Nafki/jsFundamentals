//COMPARISON OPERATORS

//EQUAL
'3' == 3;
console.log('3' == 3)
/* 
JS is helpful and does things like coercion when comparing values
- coercion is the process of converting a value from one type to another
in the above example, js assume we are trying to check if '3' is equal to 3, even one of our value is strting and one is an integer
*/

//STRICT EQUAL- is overrides js coercion
console.log(3==3) //true
console.log('3'===3) //false

//NOT EQUAL
console.log('3' !=3)

//STRICT NOT EQUAL
'3' !== 4;
console.log('3' !==4) //true

//GREATR THAN
3 > 2;

//LESS THAN
2 < 3;
//GREATR THAN EQUAL
3 >= 2; //not to be confused with =(fat arrow function we see it later)

//LESS THAN OR EQUAL
2 <= 3;
//AND
2&3;

//OR
2 || 3;