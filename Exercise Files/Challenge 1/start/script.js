/*
Create a function sum() that will sum all arguments passed to it.
Quantity of the arguments is unknown.

Use console.log() at the end of the sum() function to print result.
Use ES6 whenever possible.
*/

"use strict";

// Write code here
function sum(...numbers){
    let sum = 0;
    for(let num of numbers){
        sum = sum + num;
    }
    return sum;
}
console.log(sum(1, 3));
//4
console.log(sum(10, 20, 5));
//35
console.log(sum(2, 5, 80, 1, 10, 12));
//110
