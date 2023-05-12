/*
var / let / const
*/

var fName = "Ömer";
fName = "Ayşe";
console.log(fName);
// Her yerden erişilebilir.

let lName = "Kiraz";
lName = "Saygılı";
console.log(lName);
// Bulunduğu blokta erişilebilir.

const country = "Türkiye";
console.log(country);
// Bulunduğu blokta erişilebilir.

if (2 > 1) {  // True
    console.log(fName + lName);
    let userName = "aysesaygili";
}

console.log(userName);