// TASKS 1: The postfix and prefix forms
// What are the final values of all variables a, b, c and d after the code below?

let a = 1,
  b = 1;

let c = ++a; // ? 2
let d = b++; // ? 1

// The answer is:
// a = 2
// b = 2
// c = 2
// d = 1
// let a = 1, b = 1;

// alert( ++a ); // 2, prefix form returns the new value
// alert( b++ ); // 1, postfix form returns the old value

// alert( a ); // 2, incremented once
// alert( b ); // 2, incremented once

// Assignment result
// What are the values of a and x after the code below?

let a = 2;

let x = 1 + (a *= 2);

// 5

// Fix the addition

// Here’s a code that asks the user for two numbers and shows their sum.

// It works incorrectly. The output in the example below is 12 (for default prompt values).

// Why? Fix it. The result should be 3.

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(a + b); // 12

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 3

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3

// Comparisons
// What will be the result for these expressions?

5 > 4; //true
"apple" > "pineapple"; //false
"2" > "12"; //false
undefined == null; //true
undefined === null; //false
null == "\n0\n";
null === +"\n0\n";

// SOLUTION
// 5 > 4 → true
// "apple" > "pineapple" → false
// "2" > "12" → true
// undefined == null → true
// undefined === null → false
// null == "\n0\n" → false
// null === +"\n0\n" → false

// Some of the reasons:
// Obviously, true.
// Dictionary comparison, hence false. "a" is smaller than "p".
// Again, dictionary comparison, first char "2" is greater than the first char "1".
// Values null and undefined equal each other only.
// Strict equality is strict. Different types from both sides lead to false.
// Similar to (4), null only equals undefined.
// Strict equality of different types.
