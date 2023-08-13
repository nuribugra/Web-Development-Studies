/*
var / let / const
*/

var fName = "Ömer";
fName = "Ayşe";
console.log(fName);
// Her yerden erişilebilir. Sonradan değiştirilebilir.

let lName = "Kiraz";
lName = "Saygılı";
console.log(lName);
// Bulunduğu blokta erişilebilir. Sonradan değiştirilebilir.

const country = "Türkiye";
console.log(country);
// Bulunduğu blokta erişilebilir. Sonradan değiştirilemez.

if (2 > 1) {  // True
    console.log(fName + lName);
    var userName = "aysesaygili";
}

console.log(userName);