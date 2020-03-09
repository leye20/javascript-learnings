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
    this.className = 'salmon-text'; /* In an event, the "this" keyword represented our element (myHeading). */
});

// When you stop hovering...
myHeading.addEventListener( 'mouseleave', function ( event ) {
    this.className = 'indigo-text';
});

// When you stop hovering...
myHeading.addEventListener( 'click', function ( event ) {
    // The class we want to add.
    var bigClass = 'big-text'; // Check if it already has it!
    if ( !this.className.includes( bigClass ) ) // Good to do checks like this so we dont have 500 of the same class onhere if the user keeps clicking!
    { // Exclamation means NOT. So it fires on the OPPOSITE.
        this.className += ' big-text'; // Concatenating a new class! Note the space between the inverted commers and the big text, this is a separator for the string!
        // Remember, you must have a space between classes when assigning multiple.
    }
});

/**
 * Let's make a function
 */

 function addTwoNumbers ( x, y )
 {
     x = Number( x ); // Enforce data-type (Number.)
     y = Number( y ); // Enforce data-type (number.)
     return ( x + y ); // Add the two together.
 }

 function currentDayString ()
 {
    // New Date object.
    var date = new Date(); // link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    // Declare a string we can store date info in. 
    var dateString = '';
     dateString += date.getFullYear(); // Year
     dateString += '.'; // (Period for formatting.)
     dateString += date.getMonth(); // Month
     dateString += '.'; // (Period for formatting)
     dateString += date.getDay(); // Date
     return dateString;
}

// Output to console.
console.log( 'The current date is: \r\n' + currentDayString() ); // \r\n is return/newline - this will now output o TWO lines in your console.

/**
 * Lets review some conditions-related operators...
 */

// Check for equivalency (type-agnostic.)
console.log( 1 == true ); //TRUE
console.log( 'Hello, World!' == true ); //FALSE
console.log( -137 == true ); // FALSE
console.log( 'test' == 'test' ); //TRUE
console.log( 36 == '36' ); // True
console.log( 0 == false ); //True
console.log( `test string` == "test string" ); //True

// Check if identical (value comparison including type.)
console.log( 1 === true ); //False
console.log( '' === true ); //False
console.log( 'Hello, World!' === true ); // False
console.log( -137 === true ); //False
console.log( 36 === '36' ); // True
console.log( 0 === false ); //True
console.log( `test string` === "test string" ); // True

/**
 * Hamburger Menu
 */

 // Lets grab our menu
 var myNav = document.querySelector( 'nav' );

 // And our menu button...
 var myNavButton = document.querySelector( '.menu-button' );

 // Lets listen for a click on this.
 myNavButton.addEventListener( 'click', function ( event ) {
    // When clicked, add/remove the "nav-open" class (in HTML), thats what toggle does
    myNav.classList.toggle( 'nav-open' );
 });