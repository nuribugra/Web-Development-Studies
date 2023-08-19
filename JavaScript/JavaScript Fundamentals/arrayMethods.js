let students = ["George", "Arthur", "Harry", "Jessica"];

let result;

result = students.length;

// array to string
result = students.toString(); // Converts an array to a string.
result = students.join(" "); // It creates a string by combining all the elements in an array.

// delete an element
result = students.pop(); // Last element is deleted. Deleting element returns.
result = students.shift(); // It does the same thing to first element like "pop()".

// adding an element
result = students.push("Caesar"); // It adds a new element as last.
result = students.unshift("Matt"); // It does the same thing like "push()", but as a first element.

let brands1 = ["Audi", "BMW", "Mercedes"];
let brands2 = ["Toyota", "Suzuki", "Honda"];
let brands3 = ["Renault", "Peugeot", "Citroen"];

result = brands1.concat(brands2); // Merges arrays.
// brands1.splice(0, 0, brands2); // splice(start-index, deleting count, element) Adding/Deleting elements.
brands1.splice(0, 1); // Deleting element

console.log(result);
console.log(brands1);
// console.log(students);