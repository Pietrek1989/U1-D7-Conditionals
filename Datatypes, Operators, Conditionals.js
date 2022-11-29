/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

 Different datatypes:
    - String - a sequence of the characters or to put simply a plain text that can be made of different letters but also number and certain symbols. We put string inside the double quote or single quote or side tick. 
    - Number - it's simply a number. It can be any number( integer which is a whole number or float number which is not a whole number but has a floating points such as 1.2332)
    - Undefined - It's a value that Javascript assigns to the variable if you have declared it but didn't assing it any value. It means it's empty automatically.
    - Null - It's also a value that means the variable is empty but we use it normally to assign an empty value to a variable that had previously some other value.
    - Boolean - It can only have 2 values. It's either true or it's false. We use for conditions to run another part of the code.



/* 
EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

Variable is a container to which we can enter various different value types. It will hold this data and later it can be changed or used in some other place. So it will keep that value for the later use. */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

console.log(12 + 20); 

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12;

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

console.log(x - 12);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1;
let name2;
name1 = "john";
name2 = "John"
console.log(name1 === name2);
console.log(name1 === name2.toLowerCase());

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/


 let x = 2;
console.log(x);


/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/


let biggerThan10 = 2; 
if (biggerThan10 < 10) {
    biggerThan10 = 11;
    console.log("Value of variable biggerThan10 has been changed to", biggerThan10);
} else {
    console.log("a is already bigger than 10");
}

