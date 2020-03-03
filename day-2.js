/* day-2.js */

let myNumber = '54'; // String :o

console.log( myNumber + 6 ); // Expect concatenation here

myNumber = parseInt ( myNumber ); // Now it is an 'Int'!

console.log( myNumber + 6 ); // Expected outcome is an addition!

myNumber = parseFloat( myNumber ); // Now it is a float!

console.log( myNumber + 6 ); // Addition occurs!

myNumber = Number( myNumber ); // Now it is a 64-bit floating point numeric! The only ACTUAL type of number in Javascript...!

console.log( myNumber + 6 ); // Addition occurs!


/**
 * Converting Numbers  to Strings:
 */

 myNumber = myNumber.toString(); // The toString() method will turn a number into a string!

 console.log( myNumber +  6 ); // Concatenation once more!

 /**
  * Wath out! Auto-conversion can be.. interesting! Always check your bases:
  */

  let myString = 'Hello World!';

  console.log( 'Test 1:' );
  console.log( 'Type is:' + ( typeof myString ) );
  console.log( myString ); // 'Hello world'

  myString = 5;
  console.log ( 'Test 2:' );
  console.log( 'Type is:' + ( typeof myString ) );
  console.log( myString ); // 5

  myString = myString * 3;
  console.log ( 'Test 3:' );
  console.log( 'Type is:' + ( typeof myString ) );
  console.log( myString ); // 15

  myString = 'Updated string.';
  console.log ( 'Test 4:' );
  console.log( 'Type is:' + ( typeof myString ) );
  console.log( myString ); // 'Updated string.'

  myString = { 'another' : 'string test!?' };
  console.log ( 'Test 5:' );
  console.log( 'Type is:' + ( typeof myString ) );
  console.log( myString ); // { another: 'string test!?' }


  /**
   * SWITICH (CASE) Statements
   * break stops the operation
   * from the example below if the order is switched, the string is going to search for the first match for add and start to execute
   * Switches execute starting at a first MATCHING value. However... they only STOP executing when they hit a break.
   * No break> Everything after the first MATCH will execute!
   */

   let mathOperation = 'add';

   switch ( mathOperation ) {
       case "add":
           console.log( 5 + 5 );
           break;
        case "subtract":
            console.log( 5 - 5 );
            break;
        case "divide":
            console.log( 5 / 5 );
            break;
        case "multiply":
            console.log( 5 * 5 );
            break;
        default:
            console.log( 'No operator provided.' );
            break;
   }

/**
 * Lets manipulate things in the DOM!
 *                              (Document Object Model)
 */

 let myParagraph = document.getElementById( 'my-paragraph' );
 console.log( myParagraph );

 myParagraph.textContent = 'Hello, World!';
 myParagraph.textContent += ' Also, hey how are we\'?'; // \' is an escape fxn. It says "don't close my string, just store an actual apostrophe here!"

 // Create a BRAND NEW element. it wont show up yet, but we can start manipulating it before we inject it into our webpage!
 let newParagraph = document.createElement( 'p' );
 newParagraph.textContent = 'This paragraph was created completely in Javascript! Wowie! Zounds! Gadzooks!'; // Populate your element.
 // Add your element to the document body!

 document.body.appendChild( newParagraph );

 var otherNewParagraph = document.createElement( 'p' );
 otherNewParagraph.textContent = 'Second New Paragraph.';

 // Please never actually do inline styles like this... Apply a class or ID and use yor CSS file to apply styles instead! :)
 otherNewParagraph.style.color = 'darkgrey';

 var myFirstLink = document.createElement( 'A' );
 myFirstLink.textContent = 'Click Here!';
 myFirstLink.href = './index.html';
 myFirstLink.title = 'Return to the Homepage.';
 myFirstLink.style.color = 'red';
 myFirstLink.className = 'my-link';
 // We're adding the link INTO our brand new paragraph BEFORE it even goes to the browser!
 otherNewParagraph.appendChild( myFirstLink );

 // Now, our paragraph with TEXT and a link both will be added to the body!
 document.body.appendChild( otherNewParagraph );

 // Lets try query selecto.
 var targetLink = document.querySelector( '.my-link' );
 targetLink.textContent = 'Go Back Home';

 /**
  * FORMS!
  */

  var calculatorForm = document.getElementById( 'calculator' );

// Listen for a submission! Put your ear on the form...

  calculatorForm.addEventListener( 'submit', function( event ) {

    //Stop the submission (event)
    event.preventDefault();

    // Collect the form fields (DOM objects.)
    var operatorInput = document.getElementById( 'operator' );
    var num1Input = document.getElementById( 'num1' );
    var num2Input = document.getElementById( 'num2' );

    // Retrieve the values from the form fields.
    var operatorValue = operatorInput.value;
    var num1Value = num1Input.value;
    var num2Value = num2Input.value;

    var result = 0;
    // Let's run our math!
    switch ( operatorValue ) {
        case "subtract":
            result = num1Value - num2Value;
            break;       
        case "add":
           result = num1Value + num2Value;
           break;       
        case "divide":
            result = num1Value / num2Value;
            break;
        case "multiply":
            result = num1Value * num2Value;
            break;
    }

  } );
  