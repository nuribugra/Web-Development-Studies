// We use arrays to store a collection of multiple items and to use them under a single variable when needed.
// Defining an array really familiar with defining a variable.

// Every string statement is actually an array.

let myText = "Here, you can see a text that i utilized to explain strings";
// console.log(myText[0]);

let products = ["smart tv", ["iphone", "smart phone"], "printer", "fridge"];
let prices = [20000, 50000, 6000, 10000]; //turkish lira
let brands = ["Samsung", "Apple", "Hp", "Philips"];

// let promotion1 = `Did you see our brand new ${brands[0].toUpperCase()} ${products[0].toUpperCase()} ? It is only ${prices[0]} turkish liras.`;
let promotion2 = `Did you see our brand new ${brands[1].toUpperCase()} ${products[1][1].toUpperCase()} ? It is only ${prices[1]} turkish liras.`;

// for (let i = 0; i <= 3; i++) {
//     let promotion = `Did you see our brand new ${brands[i].toUpperCase()} ${products[i].toUpperCase()} ? It is only ${prices[i]} turkish liras.`;

//     console.log(promotion);
// }

console.log(promotion2);
// console.log(products[1]);
// console.log(products[1][0]);
// console.log(products[1][1]);


