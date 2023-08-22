// Kendine verilen kelimeyi istenildiği sayı kadar ekrana yazan fonksiyon yap.

function parrot(text, repeat) {
    for (let i = 0; i < repeat; i++) {
        console.log(text);
    }
}

// parrot("Cici kuş", 10);

// Dikdörtgenin alanını ve çevresini hesaplayan bir fonksiyon yap.

function rectangleSize(shortSide, longSide) {
    let area = shortSide * longSide;
    let perimeter = (shortSide + longSide) * 2; //Çevre

    if(shortSide <= 0 || longSide <= 0) {
        console.log("Uzunluk bilgileriniz yanlış. Kontrol ediniz.");
    }else {
        console.log(`Dikdörtgenin Alanı : ${area}`);
        console.log(`Dikdörtgenin Çevresi : ${perimeter}`);
    }
}

// rectangleSize (-5, 10);

// Yazı tura fonksiyonu yap.

function coinFlipping() {
    let random = Math.random() // 0-1

    if (random < 0.5) {
        console.log("Yazı");
    }else {
        console.log("Tura");
    }
    
}

// coinFlipping();

// Kendisine gönderilen sayıların tam bölenlerini dizi şeklinde döndüren bir fonksiyon yap.

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

// Değişken sayıda parametre alan toplam fonksiyonu yap.

function total() {
    let result = 0;

    for (let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    // buradaki arguments parametresi hazır olarak tanımlanmıştır.

    return result;
}

console.log(total(2,3,4,5,6,9,15));
