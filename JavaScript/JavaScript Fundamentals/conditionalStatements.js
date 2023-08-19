/*

if / else / else if

*/

/* 
    * Operators

    == -> Is it equal?
    != -> Is it not equal?
    && -> and
    || -> or 

    * && -> All specified conditions must be provide. (and)
    * || -> Only one of the specified conditions needs to be provided. (or)

*/

// Anyone over the age of 18 can obtain a driver's license.

let age = 12;

if (age >= 18) {
    console.log("You can get a driver's license.");
}else if (age > 0 && age < 18) {
    console.log("You cannot get a driver's license.");
}else {
    console.log("Please enter a valid value.");
}


// Login status in the system.

let username = "myusername";
let password = "12345";

if (username == "myusername") {
    if (password == "1234") {
        console.log("Login successful.");
    }else {
        console.log("Your password is incorrect.");
    }
}else if (username != "myusername" && password != "12345") {
    console.log("Your username and password are incorrect.");
}else {
    console.log("Your username is incorrect.");
}


