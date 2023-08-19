/*
var / let / const
*/

var fName = "Ömer";
fName = "Ayşe";
console.log(fName);
// It's accessible from everywhere. Can be modified later. Not used in modern JavaScript. (Old)

let lName = "Kiraz";
lName = "Saygılı";
console.log(lName);
// It's accessible within its block. Can be modified later.

const country = "Türkiye";
console.log(country);
// It's accessible within its block. Cannot be modified later.

if (2 > 1) {  // True
    console.log(fName + lName);
    var userName = "aysesaygili";
}

console.log(userName);