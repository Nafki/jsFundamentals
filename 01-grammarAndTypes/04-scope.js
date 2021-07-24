// SCOPE

//put the bellow scope in new file inside grammar and types...04-scope.js
//copy from instructor code

/*- Global:  Variables that are defined outside of a function.  Functions can have acess to variables that are within the global scope. 
Consider global scope just like we would consider Earth in relation to Indiana.  There are a lot of "things" that could be happening outside of our local environment that could affect our state and a lot of "things" that wouldn't.
In relation to JS, we could have multiple functions within one JS file.
- Local:  Variables that are defined within a function. Within Indiana, there are aspects that we can focus on that our Global aspect doesn't consider unless we make it available.  
- As long as your application exist, your Global Scope exist.  Local Scope only exist when your functions are called and executed.
*/
let scope = 'Earth'; // globally scoped variable

let getFromGlobal = 'the moon!';
if(true){
    let scope = 'Indiana'; // locally scoped variable
    console.log(scope, 'markes the local scope');

    let kindaLocal = 'Noblesville';

    if(true){
        let scope = 'Indianapolis'; //local scope in side of a local scope ("city")
        console.log(scope, 'is the capital of Indiana.');
        console.log(`while looking out side of my very local area, I went to 
        ${kindaLocal} at might and saw ${getFromGlobal}');
    }
    console.log(scope, 'should be closest to Indianapolis');
}

//LET VS VAR

//var and Let seems the same to operate the same way....
//- var is scoped to the nearst function block
//- let is scoped to the nearest enclosing 'block'.
