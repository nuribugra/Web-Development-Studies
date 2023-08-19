let text = "There is a text here";

let result;

result = text.toLowerCase();
result = text.toUpperCase();
result = text.length; // To show length of text
result = text[1]; 
result = text.slice(0, 6); // [a, b)
result = text.slice(6);

result = text.substring(0, 6); // It does the same thing with 'slice()'

result = text.replace("a", "one"); // The replaceAll() method replaces all words.
result = text.trim(); // Removes the spaces on the right and left. trimend/trimstart

result = text.indexOf("javascript"); // Tells at which index the specified expression was found.
result = text.slice(33);
result = text.includes("javascript") // Tells whether the specified expression is found or not, returns true or false.

result = text.split(" "); // Creates an array based on the specified character as a reference.


console.log(result);
