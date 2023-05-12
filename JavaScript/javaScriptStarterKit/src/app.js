console.log("Hello World!")

let dolarDun = 19.90
let dolarBugun = 20.01
// var keyword'ü artık kullanılmıyor. Onun yerine let kullan.

{
    let dolarDun = 19.80
}

console.log(dolarDun)

// array
// camelCasing
// PascalCasing
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")


console.log(konutKredileri)