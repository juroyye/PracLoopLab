// for (let i = 1; i <= 100; i++){
//     if (i % 15 == 0){
//         console.log("Fizz Buzz")
//     } else if (i % 3 == 0){
//         console.log("Fizz")
//     } else if (i % 5 == 0){
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }

const { type } = require("express/lib/response");


// for(let i = 1; i < 100;++i)console.log((i%3?'':'Fizz') + (i%5?'':'Buzz') || i)

////////////////////////////////////

// how do i figure out a prime number ?
// take the number, and find its factors
// this is done by dividing a number by 2-9
// must check all potential divisors up to square root of that number
// need a variable to store the square root
// n is just the starting place, it can be set to whatever

// take the number, find its square root
// FOR LOOP: divide the number by every number (starting at 2) leading up to that square root
// if none of those numbers are a factor, then the number is prime


let n = 1; // this is simply the start
let num = 51; // this is the number you're checking
let x = Math.sqrt(num)

for (let i = n; i < 100; i++){

    for (a = 2; a <= Math.floor(x); a++){
       let output = num / a;
        
        if(Number.isInteger(output)){
            console.log("Number is composite")
            return
        } else{
            console.log("Number is prime")
            return
        }
    }
}





