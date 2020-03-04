/* Table Exercise */

// First capture the form!

// Listen for a form submission...
let myForm = document.getElementById( 'table-form' );

function deleteRow( element ) { //Element will be the button we pressed.
    let tableRow = element.parentNode.parentNode; // 2 levels up from our button, to get our row.
    tableRow.parentNode.removeChild( tableRow ); // An element cannot delete itself.. so we have to tell the parent to do it for us!
}

// Grab existing buttons.
let allButtons = document.querySelectorAll( 'td > button' );
// Loop through our query selected buttons.
for (let i = 0; i < allButtons.length; i++) {
// Let's add listeners to these!
    allButtons[i].addEventListener( 'click', function ( event ) {
        deleteRow( this );
    })
}
// Listen for a form submission...
myForm.addEventListener( 'submit', function ( event ) {
    // Prevent the form ACTUALLY submitting (would leave or refresh the page, terminating our script.)
    event.preventDefault();

    // Grab your input elements.
    let nameField = document.querySelector( 'form > label > input' ); // Get first input (name field), > sign means direct child
    let ageField = document.querySelector( '#age' );
    let schoolField = document.getElementById( 'school' );
    let cityField = document.getElementById( 'city' );

    // Extract the values.
    let nameValue      = nameField.value;
    let ageValue       = ageField.value;
    let schoolValue    = schoolField.value;
    let cityValue      = cityField.value;

    //Create new element (table row)
    let newRow = document.createElement( 'TR' );

    //Create new cell for the row (table data.)
    let nameCell = document.createElement( 'TD' );
    nameCell.textContent = nameValue; // Add our text to the cell.
    newRow.appendChild( nameCell ); // Add our cell to the table row

    let ageCell = document.createElement( 'TD' );
    ageCell.textContent = ageValue; // Add our text to the cell.
    newRow.appendChild( ageCell ); // Add our cell to the table row

    let schoolCell = document.createElement( 'TD' );
    schoolCell.textContent = schoolValue; // Add our text to the cell.
    newRow.appendChild( schoolCell ); // Add our cell to the table row

    let cityCell = document.createElement( 'TD' );
    cityCell.textContent = cityValue; // Add our text to the cell.
    newRow.appendChild( cityCell ); // Add our cell to the table row

    // Create our delete button.
    let deleteButton = document.createElement( 'Button' );
    deleteButton.textContent = 'Delete Row'; // These elements are being dynamically added - the event listener we added earler would't see iyt! We have to add event listeners as we're MAKING them instead here.
    deleteButton.addEventListener( 'click', function ( event ) {
        deleteRow( this ); // Delete the row!
        // In this case, "this" is the element the EVENT is happening to!
        // Remember objects? we used "this" to refer to itself there too!
    });
    let actionCell = document.createElement( 'TD' ); // Create the actions cell!
    actionCell.appendChild( deleteButton ); // Add the button inside.
    newRow.appendChild( actionCell ); // Don't forget to add this new cell to the row too!

    // Target your table body.
    let tableBody = document.getElementById( 'tablebody' );
    tableBody.appendChild( newRow ); // Inject the brand new row, so the user an see it! yay!
} );