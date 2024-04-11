// Create a function that prints the given word to the console for the desired number of times.

function parrot(text, repeat) {
    for (let i = 0; i < repeat; i++) {
        console.log(text);
    }
}

// parrot("Cici kuş", 10);

// Create a function that calculates the area and perimeter of a rectangle.

function rectangleSize(shortSide, longSide) {
    let area = shortSide * longSide;
    let perimeter = (shortSide + longSide) * 2; //Çevre

    if(shortSide <= 0 || longSide <= 0) {
        console.log("Length values are incorrect. Please check.");
    }else {
        console.log(`Rectangle Area: ${area}`);
        console.log(`Rectangle Perimeter: ${perimeter}`);
    }
}

// rectangleSize (-5, 10);

// Create a function for flipping a coin.

function coinFlipping() {
    let random = Math.random() // 0-1

    if (random < 0.5) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
    
}

// coinFlipping();

// Create a function that returns an array of factors of a given number.

function factors(number) {
    let numbers = [];

    for (let i = 1; i <= number; i++) {
        if (number % i == 0 ) {
            numbers.push(i);
        }
    }

    return numbers;
}

// console.log(factors(64));

// Create a function that takes a variable number of parameters and returns the sum.

function total() {
    let result = 0;

    for (let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    // buradaki arguments parametresi hazır olarak tanımlanmıştır.

    return result;
}

console.log(total(2,3,4,5,6,9,15));
