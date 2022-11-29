// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/


let isMale = "male";
if (isMale === "male") {
    console.log("The gender is male");
  }  else {
        console.log("The gender is female")
}



/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/


let a = 4;
let b = 4;
if ((a === 8 || b === 8) || (a + b === 8 || a - b === 8)) {
    console.log("One of the results is 8!")
} else {
    console.log("None of the results is 8");
}



/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/


let sumString = "This is a string" + " AND this also is a string";
console.log(sumString);


/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/


let num1 = 12;
let num2 = 24;
let num3 = 1;
if (num1 > num2 && num2 > num3) {
    console.log(num1 , "is the highest number" , num2  , "is the second highest number and" , num3,  "is the lowest number");
} else if (num1 > num3 && num3 > num2) {
    console.log(num1 , "is the highest number" , num3  , "is the second highest number and" , num2,  "is the lowest number" );
} else if (num2 > num1 && num1 > num3){
    console.log(num2 , "is the highest number" , num1  , "is the second highest number and" , num3,  "is the lowest number" );
} else if (num2 > num3 && num3 > num1){
    console.log(num2 , "is the highest number" , num3  , "is the second highest number and" , num2,  "is the lowest number" );
} else if (num3 > num1 && num1 > num2){
    console.log(num3 , "is the highest number" , num1  , "is the second highest number and" , num2,  "is the lowest number" );
} else (num3 > num2 && num2 > num1){
    console.log(num3 , "is the highest number" , num2  , "is the second highest number and" , num1,  "is the lowest number" );
}


/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let numOne = 10;
let numTwo = 20;
let average = (numOne + numTwo) / 2;
console.log("The average is: ", average);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let string1 = "hey how are you";
let string2 = "I'm doing just fine thanks!";
if (string1.length > string2.length) {
    console.log("string1 is longer");
} else {
    console.log("string2 is longer");
}


/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let isInteger = 2;
if (isInteger === parseInt(isInteger)) {
    console.log("Yes the variable is integer")
} else {
    console.log("No, the value is not an integer")
}

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let exampleNumber = 100;
console.log("10% out of the number is:", 100 * 0.1);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

let exampleNumber = 10;
if (exampleNumber % 2 === 0) {
    console.log("The number is even");
} else {
    console.log("The number is not even");
}
