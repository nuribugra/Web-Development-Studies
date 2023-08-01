let text = "Burada bir metin var ve bu metin javascript ile düzenlenecek.";

let result;

result = text.toLowerCase();
result = text.toUpperCase();
result = text.length;
result = text[1]; 
result = text.slice(0, 6); // [a, b)
result = text.slice(6);

result = text.substring(0, 6); //slice ile aynı işi yapar.

result = text.replace("bir", "tek"); // replaceAll() metodu bütün elemanları değiştirir.
result = text.trim(); // Sağ ve soldaki boşlukları siler. trimend/trimstart

result = text.indexOf("javascript"); // Belirtilen ifadenin kaçıncı index itibarıyla bulunduğunu söyler.
result = text.slice(33);
result = text.includes("javascript") // Belirtilen ifadenin bulunup bulunmadığını true veya false olarak söyler.

result = text.split(" ");


console.log(result);
