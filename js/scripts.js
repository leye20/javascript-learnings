//single line comment.

/*
this comment can be: many lines*/

// Camel casing is common for javascript!
var myInteger = 34; 

// We can ouput to our console via the console.log method.
console.log( myInteger * 3);

if (( myInteger === 7 ) || ( myInteger === 34 ) )
{
    console.log( 'Number is ... 7 or 34!?' );
} else if ( ( myInteger === 6 ) && ( myInteger > 5 ) ) {
    console.log( 'Number is 6!!!' );
} else if ( myInteger > 5 ) {
    console.log( 'Number is greater than 5.');
} else if ( myInteger < 5 ) {
    console.log( 'Number is less than 5.' );
} 
else {
    console.log( 'Number is 5!?' );
}

var myString = 'Hello world!' ;
myInteger = 64; // this is lready declared at the top, now just changing the value, hence no var is required!
var myFloat = 12.768; // Decimal number
var myBoolean = true; // True or false
var uhOh = undefined; // dont use this if its undefined, javascript will try and assign it (No value is yet assigned.)
var myNull = null; // The value/variable doesn't exist!
var myArray = [myString, myInteger, myFloat]; // Array

// Let's try a loop. remember: i++ is same as:
//                      i = i + 1;
for ( var i = 0; i < 5; i++) {
    console.log( 'value of position '+i+', in my Array, is:'+myArray[i] );
}

// A bsic function!
function myFunction () {
    console.log( 'My function has run.' );
}

// // We have to call upon it, in order to run it, don't forget!
// myFunction();

var inputValue = prompt( 'Enter your name' );


var input = myFunction();
input += GetInput();
input = AddSmileyToEnd( input );
input = AddSmileyToBeginning( input );
WriteName( input );
 }
function AddSmileyToEnd( string input )
    {
input = input+":)";
return input;
    }

function AddSmileyToBeginning( string input )
    {
input = ":("+input;
return input;
    }

// function writeName( input ) {
// Console.log( input );
// }
// }
// }

/* TRUTHY and FALSEY
* false === false
* 0 == 
*/

// If statement
var a = 3;
var b = 5;
if ( a == b) {
    console.log( 'a is identical to b.')
} else {
    console.log( 'a and b are not identical.');
}

// Converting the above to ternary...
/*
* Syntax is:
* (conditiion) ? (logic for TRUE) : (logic for FALSE);
* note that it returns the outcome, so it can be used for assignment.
*/
( a === b ) ? console.log( 'a is identical to b. ') : console.log( 'a and b are not identical.');

var i = 0;
while ( i < 6 ) {
    console.log( 'While loop: '+i);
    i++; // Make sure the condition will eventually be FALSE, or loop will go on FOREVER :(
}

// Foreach!? It is a method of the array datatype!
myArray.forEach( function( arrayItem ) {
    // Woah! We're ina closure, or, an "anonymous function" now! We didn't declare and name it, so won't be able to call it again... it is useful here to process our array items though!
    console.log( 'Array item is: '+arrayItem );
});

/* lets try object */

var myObject = {
    name: 'Ola',
    age:    32,
    hobbies: [
        'sports',
        'movies',
        'sliding'
    ]
}

sayHi: function() {
    console.log(
        'Hello! My name is '
        +this.name
        +'. I am '
        +this.age
        +' years old, and one of my hobies is: \r\n'
    )
}

myObject.age++; // Increment object's "age" property.
myObject.hobbies[1] = 'programming'; // Update array value in position "1"

// Let Bob speak!
myObject.sayHi();


// Multi-line text can be included in a 
for ( var prop in myObject ) {
    console.log( myObject[prop] );
}

console.log('hello! my name is '+myObject.name+'. I am '+myObject.age+' years old, and one of my hobbies is: \r\n'+myObject.hobbies[0] );


var multiLineString = `
    This text
        is
many lines!
`;
console.log( multiLineString);



// class assignment


var myHotel = {
    name: 'The Quay',
    totalRooms: 40,
    bookedRooms: 25,
    types: [
        'twin',
        'double',
        'suit'
    ],
    checkAvailability: function() {
        console.log( 'Remaining avaliable rooms: ' + ( this.totalRooms - this.bookedRooms ) );
        // return 'Remaining available rooms: ' + ( this.totalRooms - this.bookedRooms );
    }
}

myHotel.bookedRooms += 5; // Increase to 30.

console.log( myHotel.checkAvailability() );