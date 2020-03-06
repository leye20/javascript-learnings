/**
 * Lets try Javascript, again!
 * Multi-Line comment.
 */

 // Single line, comment!

 // Basic assignment:
 var myVariable = '38.9587';

 myVariable = myVariable + 5;
 console.log( myVariable ); // Oop, one of these is a string so plus is concatenating!

 // Type-handling:
 myVariable = parseFloat( myVariable ); // Floating point number, decimal maintained.
 console.log( myVariable ); // Is now a numeric value.

 myVariable = parseInt( myVariable ); // Converted to integer, decimal removed.
 console.log( myVariable); // 38

 myVariable = Number( myVariable ); // Converted to any number type it can.
 console.log( myVariable ); // No change here.

 myVariable = myVariable + 5; // Addition. Beware "+" as it can add, or concatenate, depending on if any of the operands are strings!
 console.log( myVariable );

 myVariable = myVariable.toString(); // Convert back to a string.
 console.log( myVariable );

 /**
  * Other types?
  */

var myArrayOfDataTypes = [
    // Booleans:
    true,
    false,
    // Null:
    null,
    // Float:
    34,
    168.793,
    // String:
    'Hello, World!',
    // Vaue not defined:
    undefined,
    // Not a number:
    NaN,
    // An array in an array!?
    [1, 2, 3, 4, 5]
];

/**
 * Creating elements for a webpage. (Adding to the DOM!)
 */

 // Create datalist.
 var myDataList = document.createElement( 'DL' ); // Won't show yet! We didn't tell it where to go.

 // Let's loop through the array so we don't have to typ out each item!
 for ( var i = 0; i < myArrayOfDataTypes.length; i++ )
 { // ( ASSIGNMENT; TERMINATION CONDITION; ITERATION )
    // Create datalist title.
    var dataListTitle = document.createElement( 'DT' );
    dataListTitle.textContent = typeof myArrayOfDataTypes[i]; // Output the datatype.

    // Create datalist data.
    var dataListData = document.createElement( 'DD' );
    dataListData.textContent = myArrayOfDataTypes[i];

    // Add our new elements to our datalist.
    myDataList.appendChild( dataListTitle );
    myDataList.appendChild( dataListData );
}

  var myHeadingText = 'Our Data-Type Test:';
 // This is adding HTML to the end of our body.
 document.body.innerHTML += `<!-- Back ticks are used in JS for multi-line strings. -->
    <h2>
        `+myHeadingText/*Concatenating strings!*/+`    
    </h2>
`;
// Add ALL of that to the body! Yay! We should be see it now! 
 document.body.appendChild( myDataList );

 /**
  * Collecting elements.
  */

// Get by ID:
var myHeading = document.getElementById( 'my-heading' );
myHeading.title = 'This is a heading.'; // Tooltip attribute.
// myHeading.style.color = 'darkgray'; // PLEASE avoid using inline styles... this is the CSS file's job!!!
myHeading.className = 'gray-text'; // Use classes instead!

/**
 * Events!
 */

// We can add event-listeners to a targeted element.
myHeading.addEventListener( 'mouseover'/* Here we say which event we are targeting. */, function ( event/* We capture infor about the event*/ ) {
    this.className = 'salmon-text'; /* In an event, the "this" keyword representd our element (myHeading). */
})