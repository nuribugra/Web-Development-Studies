// function greeting() {
//     console.log("Hello");
// }

// greeting();

function calculateAge(birthYear) {
    return new Date().getFullYear() - birthYear;
}

// calculateAge(2003); 
// It doesn't work, because In this case javascript calculated an age but It didn't show us.
// Because, return keyword doesn't print an output. It just calculate.
// To show the age, we should use the console.log() function, out of the function.

console.log(calculateAge(2003));

function calculateRetirement(birthYear) {

    let age = calculateAge(birthYear);
    let remainingYear = 65 - age;

    if (remainingYear > 0) {
        console.log(`Emekli olmanıza ${remainingYear} yıl kaldı.`);
    }else {
        console.log("Emekli oldunuz.");
    }
}

calculateRetirement(2003);

