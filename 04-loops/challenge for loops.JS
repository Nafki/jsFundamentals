/*write a for loop that counts from 1 to 100
for nimber that are evenly divisible by 3, print 'FIZZ'
FOR NUMBERS ARE EVENLY DIVISSIBLR BY 5, print 'BUZZ'
FOR NUMBERS ARE EVENLY DIVISSIBLR BY 3 and 5, print 'FIZZ BUZZ'
*/

//ANSWER

/*for(let i = 0; i<= 100; i++){
    console.log(i); //do't run it numbers will go to infinity unless given conditions
    if(i % 3 == 0){ //We put == 0 because in js if(0) - 0 is false.
        console.log('FIZZ');
    }

    if(i % 5 == 0){
    console.log('BUZZ');
    }
}
*/

//the other answer

for (let l = 1; l <= 100; l++){
    if(l % 3 == 0 && l % 5 == 0){
        console.log('FIZZ BUZZ'); //code will look the first correct answer
    }else if(l % 3 == 0){
    console.log('FIZZ');
    }else if (l % 5 == 0){
        console.log('BUZZ');
    }else{
        console.log(l);
    }
}

