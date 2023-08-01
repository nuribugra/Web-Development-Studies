let fname = "Nuri Buğra";
let lname = " Demir";
let age = 20;

let message = "Merhaba ben " + fname + lname + ", " + age + " yaşındayım.";

console.log(message);

// * backtick (AltGr + ,)  ${variable}

let message2 = `Merhaba ben ${fname}${lname}, ${age} yaşındayım.`;

console.log(message2);
