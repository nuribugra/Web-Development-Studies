let currentDate = new Date();


// Get Methods

result = currentDate.getDate(); // Aydaki kaçıncı gün olduğunun bilgisini verir.
result = currentDate.getDay(); // 0:Sunday 6:Saturday
result = currentDate.getFullYear(); // yıl
result = currentDate.getHours(); // saat bilgisini verir
result = currentDate.getTime(); // saat bilgisini milisaniye cinsinden verir.

// Set Methods

currentDate.setFullYear(2030);
currentDate.setMonth(10); // 0: January 11: December
currentDate.setDate(20);

// console.log(currentDate);
// console.log(typeof currentDate);

// console.log(result);
// console.log(typeof result);

const birthDate = new Date(2003, 4, 14, 10, 30);

result = currentDate.getFullYear() - birthDate.getFullYear();
result = currentDate - birthDate;

console.log(result);
console.log(typeof result);