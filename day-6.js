/**
 * Day 6!
 */

/**
 * How scope works
 */

var myVariable = 3;

function myFunction () {
    console.log( myVariable ); // Can we see myVariable in the function?

    var myFunctionScopeVariable = 64;
}

myFunction(); // Lets run it and see.
console.log( myFunctionScopeVariable ); //Can we access it outside of the function? No! locally scoped variables will live and die in their function :(
