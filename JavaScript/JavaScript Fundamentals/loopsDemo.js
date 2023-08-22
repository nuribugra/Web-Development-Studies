let numbers = [1,5,7,15,3,25,12,24];

// Her bir elemanın karesini yazdır

/*
for (let number of numbers) {
    console.log(number ** 2);
}
*/

// Hangi sayılar 5'in katıdır ?

/*
for (let number of numbers) {
    if (number % 5 == 0) {
        console.log(`${number} sayısı 5'in katıdır.`);
    }else {
        console.log(`${number} sayısı 5'in katı değildir.`);
    }
}
*/


// Listedeki çift sayıların toplamını bulunuz.

/*
let total = 0;

for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) == 0) {
        total += numbers[i];
        console.log(`${numbers[i]} sayısı ikinin katıdır`);
        console.log(total);
    }else {
        console.log(`${numbers[i]} sayısı ikinin katı değildir.`);
    }
}
*/


let products = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];

// Listedeki tüm ürünleri büyük harfle yazdır.

/*
for (let name of products) {
    let result = name.toUpperCase();
    console.log(result);
}
*/

let students = [
    {"name":"yiğit","lastName":"bilgi","scores":[40,20,60]},
    {"name":"ada","lastName":"bilgi","scores":[80,70,80]},
    {"name":"çınar","lastName":"turan","scores":[70,70,60]},
    {"name":"Şakir","lastName":"Karaeski","scores":[75,50,60]},
    {"name":"Selçuk","lastName":"Ata","scores":[90,85,100]}
];

// Listedeki her öğrencinin not ortalaması ve başarı durumunu yazdır.
// Tüm öğrencilerin not ortalamasını da bulsun.

let average = 0;

for (let student of students) {
    console.log(`1.Sınav: ${student.scores[0]}\n2.Sınav: ${student.scores[1]}\n3.Sınav: ${student.scores[2]}`);

    let score = (student.scores[0] + student.scores[1] + student.scores[2]) / 3;

    average += score;

    console.log(`${student.name} ${student.lastName} isimli öğrencimizin not ortalaması ${score.toFixed(2)}. `);
    if (score >= 45) {
        console.log("Öğrenci Başarılı");
    }else {
        console.log("Öğrenci Başarısız");
    }

    console.log("*****************************");
}

console.log(`Öğrenci Mevcudu: ${students.length}`);
console.log(`Sınıf Not Ortalaması: ${(average / students.length).toFixed(2)}`);