/**
 * Objects again!
 */

 let myObject = {
     firstName: 'Leye',
     lastName: 'Agboola',
     sayHello: function () {
         let newP = document.createElement( 'p' );
         newP.textContent = 'Hey there!';
         document.body.appendChild( newP );
         document.body.innerHTML += `
         <d1><! -- A data-list -->
            <dt>First Name:</dt><! -- Datalist title... -->
            <dd>`+this.firstName+`</dd><!-- is always followed by
            Datalist data! -->
            <dt>Last Name:</dt>
            <dt>`+this.lastName+`</dd>
         </d1>
         
         `;
     }
 }