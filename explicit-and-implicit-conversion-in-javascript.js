/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; // added Number() to convert string "5" to number 5 for correct subtraction
console.log("The result is: " + result); // 

let isValid = Boolean(false); // fixed by using Boolean() to explicitly convert false to boolean false
if (isValid) {
    console.log("This is valid!");
}

let age = Number("25"); // Fixed code to correct the concatenation with in the code and actually have the math done.
let totalAge = age + 5;
console.log("Total Age: " + totalAge);


// Implicit Type Conversion Example 
let totalBalls = 10 + null;
console.log("Total Balls: " + totalBalls);
console.log("After conversion, totalBalls is a: " + typeof totalBalls); // Implicitly converts null to 0, so totalBalls becomes 10")


// Explicit Type Conversion Example
let myString = "100";
let myNumber = Number(myString);
console.log("Before explicit conversion, myString is a: " + typeof myString); // myString is a string
console.log("After explicit conversion, myNumber is a: " + typeof myNumber); // myNumber is a number