/* 
    1- Sipariş bilgilerini object içerisinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 
        ürün id: 5
        ürün başlığı: IPhone 13 Pro
        ürün url: http://abc.com/iphone-13-pro
        ürün fiyatı: 22000

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye
******************************************************
    sipariş id: 102
    sipariş tarihi: 30.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye
*/

let order1 = {
    "orderId" : "13",
    "orderDate" : "19.02.2023",
    "paymentMethod":"credit card",
    "shippingAddress" :"Kınıklı Mh. Pamukkale/Denizli",
    "products":[
        product1 = {
            "productId": 5,
            "productName": "IPhone 14 Pro 128GB",
            "productUrl": 'http://abc.com/iphone-14',
            "productPrice": 40000
        },
        product2 = {
            "productId": 6,
            "productName": "IPhone 14 Pro Max 128GB",
            "productUrl":'http://abc.com/iphone-14-pro-max',
            "productPrice": 50000
        }
    ],
    "costumer": [costumerId = 12],
    "vendor": [
        companyId= 34,
        companyName="Apple Türkiye"
    ]
}

let order2 = {
    "orderId" : "14",
    "orderDate" : "20.02.2023",
    "paymentMethod":"credit card",
    "shippingAddress" :"Kemalpaşa Mh. Serdivan/Sakarya",
    "products":[
        product1 = {
            "productId": 5,
            "productName": "IPhone 14 Pro 128GB",
            "productUrl": 'http://abc.com/iphone-14',
            "productPrice": 40000
        }
    ],
    "costumer": [costumerId = 12],
    "vendor": [
        companyId= 34,
        companyName="Apple Türkiye"
    ]
}

let receipt1 = (order1.products[0].productPrice * 1.18) + (order1.products[1].productPrice * 1.18);

let receipt2 = (order2.products[0].productPrice * 1.18)

console.log(receipt1);
console.log(receipt2);

console.log(`Total Amount : ${receipt1 + receipt2}TL`);
