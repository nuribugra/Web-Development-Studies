// We use loops to save time while performing repetitive tasks.
// With a loop, code can be executed as long as the specified condition is met.

/* for (let i = 0; i <= 10; i++) { // for (defining a variable; condition; operation) {codes}
    // console.log(i);
    console.log("Hello!");
}
*/

// To sum up 1 to 10
/*let total = 0;

for (let i = 0; i <= 10; i++) {
    total += i;
    console.log(total);
}
*/

let numbers = [1,3,6,9,2,4];

let total = 0;

/*
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
console.log(total);
*/

// in operator (arrays)
for (let index in numbers) {
    console.log(index); // 0 , 1 , 2 , 3 , 4 , 5
}

console.log("***********");


// of operator
for (let number of numbers) {
    console.log(number); // 1 , 3 , 6 , 9 , 2 , 4 
}


let admin = {
    "name" : "Nuri Buğra Demir",
    "username" : "nuribugra",
    "password" : "12345",
    "email" : "example@company.com"   
}

for (let key in admin) {
    console.log(key);
    console.log(admin[key]);
}
