let currentDate = new Date();


// Get Methods

result = currentDate.getDate(); // Provides the information of which day of the month it is.
result = currentDate.getDay(); // 0:Sunday 6:Saturday
result = currentDate.getFullYear();
result = currentDate.getHours();
result = currentDate.getTime(); // Provides the time information in milliseconds.

// Set Methods

currentDate.setFullYear(2030);
currentDate.setMonth(10); // 0: January 11: December
currentDate.setDate(20);

// console.log(currentDate);
// console.log(typeof currentDate);

// console.log(result);
// console.log(typeof result);

const birthDate = new Date(2003, 4, 14, 10, 30);

result = currentDate.getFullYear() - birthDate.getFullYear();
result = currentDate - birthDate;

console.log(result);
console.log(typeof result);