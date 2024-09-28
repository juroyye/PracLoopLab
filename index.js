// PART 1


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

// const { type } = require("express/lib/response");


// // for(let i = 1; i < 100;++i)console.log((i%3?'':'Fizz') + (i%5?'':'Buzz') || i)

// ////////////////////////////////////

// PART 2

// // how do i figure out a prime number ?
// // take the number, and find its factors
// // this is done by dividing a number by 2-9
// // must check all potential divisors up to square root of that number
// // need a variable to store the square root
// // n is just the starting place, it can be set to whatever

// // take the number, find its square root
// // FOR LOOP: divide the number by every number (starting at 2) leading up to that square root
// // if none of those numbers are a factor, then the number is prime


// let n; // this is simply the start
// let num = 24; // this is the number you're checking
// let x = Math.sqrt(num)

// for (let i = n; i < 10; i++){

//     for (a = 2; a <= Math.floor(x); a++){
//        let output = num / a;
        
//         if(Number.isInteger(output)){
//             console.log("Number is composite")
//             return
//         } 
//         }
//     }

// console.log("Number is prime")

/////////////////////////////////////////////////

// PART 3

const arr = ["ID,Name,Occupation,Age,\n42,Bruce,Knight,41,\n57,Bob,Fry Cook,19,\n63,Blaine,Quiz Master,58,\n98,Bill,Doctor’s Assistant,26"]

let cell = "";
let row = [];

function sectionArr(){
    for(let i = 0; i < arr.length; i++){
        let c = arr[i];

        if(c === ","){
            row.push(cell)
            cell = "";
        } else if (c === "\n"){
            row.push(cell)
            console.log(...row)
            cell = "";
            row = [];
        } else {
            cell += c;
        }
    }

    if (cell.length > 0) {
        row.push(cell);
        console.log(...row);
    }
}

sectionArr()



// create an empty cell template
// create an empty array
// create a for loop that iterates through each item in the array
// for each item in the array, put the value of the array index inside of a cell
// push that cell into the empty array
// console.log the new empty array
//invoke the function


// function formatArr(){
//     let cell = "";
//     let newArr = [];

//     for(i = 0; i < arr.length; i++){
//         cell = arr[i];
//         newArr.push(cell)
//     }
//     console.log(newArr)

// }

// formatArr();



