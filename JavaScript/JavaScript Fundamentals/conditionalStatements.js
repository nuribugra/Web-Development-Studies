// Şartlı İfadeler

/*

if / else / else if

*/

/* 
    * Operators

    == -> Eşit mi?
    != -> Eşit değil mi?
    && -> ve (& = "ve")
    || -> veya 

    * && -> Belirlenen tüm şartlar sağlanmak zorundadır. (ve)
    * || -> Belirlenen şartlardan sadece bir tanesinin sağlanması yeterlidir. (veya)

*/

// Yaşı 18'den büyük herkes ehiyet alabilir.

let age = 12;

if (age >= 18) {
    console.log("Ehliyet alabilirsiniz.");
}else if (age > 0 && age < 18) {
    console.log("Ehliyet alamazsınız.");
}else {
    console.log("Lütfen geçerli bir değer giriniz.");
}


// Sisteme giriş yapma durumu

let username = "kullaniciadim";
let password = "12345";

if (username == "kullaniciadi") {
    if (password == "1234") {
        console.log("Giriş başarılı.");
    }else {
        console.log("Şifreniz yanlıştır.");
    }
}else if (username != "kulanıcıadi" && password != "1234") {
    console.log("Kullanıcı adınız ve şifreniz yanlıştır.");
}else {
    console.log("Kullanıcı adınız yanlış.");
}


