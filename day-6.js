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

//myNestedFunction(); // can we run the nested function? Nope it is not abvioable globally if it was defined in a localized scope.

/**
 * Functions returning functions.
 * anything passed into the function is a parameter and can be declared later.
 */

 function addNums ( x, y ) {
     return ( Number( x ) + Number( y ) );
 }

 function subtractNums ( x, y ) {
    return ( x - y );
}

function multiplyNums ( x, y ) {
    return ( x * y );
}

function divideNums ( x, y ) {
    return ( x / y );
}

function myMath ( operation, x, y ) {
    switch ( operation ){
        case "add":
            return addNums; // "Return" kills the function, so breaks are optional here.
        case "subtract":
            return subtractNums;
        case "multiply":
            return multiplyNums;
        case "divide":
            return divideNums;
        default:
            return 'Invalid operation.';
    }
}


var result = myMath( 'divide' )( 9, 3 );
console.log( result );
var newResult = myMath( 'multiply' )( 2, result );
console.log( newResult );

/**
 * Now lets try with... anonymous functions.
 * 
 */

function newTestFunction ( myString ) {
    myString = 'Entered string is: '+myString;
    return function ( additionalString ) {
        if ( additionalString != undefined ) {
            myString += ', '+additionalString;
        }
        return function ( yetAnotherString ){
            if ( yetAnotherString != undefined ) {
                myString += ', ' + yetAnotherString + '!!!';
            }
            return myString;
        }
    }
}

console.log ( newTestFunction( 'A B C D E F G')( 'H I J K L M N O P')( 'Q R S T U V W X Y Z' ) );