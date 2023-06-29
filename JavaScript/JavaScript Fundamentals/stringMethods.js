let text = "Burada bir metin var ve bu metin javascript ile düzenlenecek.";

let result;

result = text.toLowerCase();
result = text.toUpperCase();
result = text.length;
result = text[1]; 
result = text.slice(0, 6); // [a, b)
result = text.slice(6); //Baştan ilk 6 elemanı çıkardı.

result = text.substring(0, 6); //slice ile aynı işi yapar.

result = text.replace("bir", "tek");
result = text.trim; // Sağ ve soldaki boşlukları siler. trimend/trimstart


console.log(result);
