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

    console.log( myFunctionScopeVariable );

    function myNestedFunction () {
        var myNestedFunctionVariable = 'I\'m very nested!';
        console.log( myNestedFunctionVariable ); // Local access works.
    
        console.log( 'Accessing function scope variable in nested function: '+myFunctionScopeVariable ); // We can access variables from a PARENT function. But not the reverse.
    
        console.log( myVariable ); // Global variables / functions are accessible even all the way in here!
    
        // More nesting
        function myDoubleNestedFunction () {
            var doubleNestedVar = 'Double nested var, here!';
            console.log( doubleNestedVar );
        }

        myDoubleNestedFunction(); //This works, same scope that the function was defined.
    
        // myNestedFunction(); // Can i run this here? yes, it was declared in/by a parent so we are good to go! calling a function inside of itself causes recursion --> unless you have a termination condition this causes endless looping. (my browser is crashing).
    }

    myNestedFunction(); // Lets runa dn try it.

    // console.log( myNestedFunctionVAriable ); // Can we see it out here? Nope, the variable is scoped to its origin function, not here...
}

myFunction(); // Lets run it and see.
//console.log( myFunctionScopeVariable ); //Can we access it outside of the function? No! locally scoped variables will live and die in their function :(

//myNestedFunction(); // can we