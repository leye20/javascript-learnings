/**
 * Lets try Javascript, again!
 * Multi-Line comment.
 */

 // Single line, comment!

 // Basic assignment:

 let myVariable = '38.9587';
 console.log( myVariable + 5 ); // Oop, one of these is a string so plus is concatenating!

 myVariable = parseFloat( myVariable ); //Flaoting point number, decimal maintained.
 console.log( myVariable ); // Is now a numeric value.

 myVariable = parseInt( myVariable ); // Converted to integer, decimal remived.
 console.log( myVariable); // 38

 myVariable = Number( myVariable ); // Convert to any number type it can.
 console.log( myVariable ); // No Change here.

 myVariable = myVariable + 5; // Addition. Beware "+" as it can add, or concatenate, depending on if any of the operands are strings!
 console.log( myVariable );

 myVariable = myVariable.toString(); // Converts back to a string.
 console.log( myVariable );

 /**
  * Other types?
  */

let myArrayOfDataTypes = [
    // Boolean
    true,
    false,
    // Null
    null,
    // Float
    34,
    168.783,
    // String:
    'Hello, World',
    // Vaue not defined:
    undefined,
    // Not a number:
    NaN,
    // An array in an array!?
    [1, 2, 3, 4, 5]
];