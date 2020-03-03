for( let i = 1; i <= 100; i++)
{
    if(i % 3 === 0 && i % 5 === 0)
    {
        console.log( i + 'FizzBuss');
    }
    else if (i % 3 === 0)
    {
        console.log(i + 'Fizz');
    }
    else if(i % 5 === 0)
    {
        console.log(i + 'Buzz');
    } else
    {
        console.log(i);
    }
}


let myHotel = {
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
    }
}

myHotel.bookedRooms += 5; // Increase to 30.

console.log( myHotel.checkAvailability() );