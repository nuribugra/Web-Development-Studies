let result;

result = "30";
result = Number(result); // Number() fonksiyonu ile değişkenin tipi number yapılır. 
result = parseInt(13.76); // parseInt() fonksiyonu ile değişken integer'a çevrilir.
result = parseFloat(19.5); // parseFloat() fonksiyonu ile değişken float'a çevirilir.
result = BigInt("1223456789012345678901234567890") // büyük tam sayılarda kullanılan fonksiyon.

result = isNaN("a12"); // isNaN() fonksiyonu ile bir ifadenin sayısal olup olmadığı kontrol edilir.

let x = 17.1123123;

result = x.toPrecision(3); // Girilen sayı kadar basamak gösterir. 
result = x.toFixed(1); // Ondalıklı bölümü girlen sayı kadar gösterir.

result = Math.round(2.5); // sayıları yuvarlar.
result = Math.ceil(2.3);  // Yukarıya yuvarlar.
result = Math.floor(2.8); // Aşağıya yuvarlar.
result = Math.sqrt(16); // Karekök alır.
result = Math.pow(3, 4); // Üs alma
result = Math.abs(-17); // Mutlak değer
result = Math.min(3,4,2,6,8,1,9); // Verilen sayılardan en küçüğünü bulur.
result = Math.max(3,4,2,6,8,1,9); // Verilen sayılardan en büyüğünü bulur.
result = Math.random(); // 0-1 aralığında bir sayı üretir.
result = Math.random() * 10;
result = Math.floor(Math.random() * 10) + 1; // 1-10
result = Math.PI; // pi sayısını getirir.


console.log(typeof result);
console.log(result);