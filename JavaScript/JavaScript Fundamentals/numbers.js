let result;


result = "30";
result = Number(result); // The type of the variable is converted to number using the Number() function.
result = parseInt(13.76); // The variable is converted to an integer using the parseInt() function.
result = parseFloat(19.5); // The variable is converted to a float using the parseFloat() function.
result = BigInt("1223456789012345678901234567890") // Function used for large integers.

result = isNaN("a12"); // Checks whether an expression is numeric using the isNaN() function.

let x = 17.1123123;

result = x.toPrecision(3); // Displays the specified number of digits.
result = x.toFixed(1); // Displays the decimal part up to the given number of digits.

result = Math.round(2.5); // Rounds numbers.
result = Math.ceil(2.3); // Rounds up.
result = Math.floor(2.8); // Rounds down.
result = Math.sqrt(16); // Calculates square root.
result = Math.pow(3, 4); // Exponentiation.
result = Math.abs(-17); // Absolute value.
result = Math.min(3,4,2,6,8,1,9); // Finds the smallest of the given numbers.
result = Math.max(3,4,2,6,8,1,9); // Finds the largest of the given numbers.
result = Math.random(); // Generates a number between 0 and 1.
result = Math.random() * 10;
result = Math.floor(Math.random() * 10) + 1; // Generates a number between 1 and 10.
result = Math.PI; // Returns the value of pi.


console.log(typeof result);
console.log(result);