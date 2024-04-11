/* 
    1- Store the order information in an object.
    2- Calculate the total amount paid including VAT for each order. (VAT: 18%)
    3- Calculate the total amount paid including VAT for all orders.

    Order ID: 101
    Order Date: 31.12.2022
    Payment Method: credit card
    Shipping Address: Yahya kaptan mah. Kocaeli İzmit
    Purchased Products: 
        Product ID: 5
        Product Name: IPhone 13 Pro
        Product URL: http://abc.com/iphone-13-pro
        Product Price: 22000

        Product ID: 6
        Product Name: IPhone 13 Pro Max
        Product URL: http://abc.com/iphone-13-pro-max
        Product Price: 25000

    Customer:
        Customer ID: 12
        
    Vendor:
        Company ID: 34
        Company Name: Apple Türkiye
*******************************************************
    Order ID: 102
    Order Date: 30.12.2022
    Payment Method: credit card
    Shipping Address: Yahya kaptan mah. Kocaeli İzmit
    Purchased Products: 

        Product ID: 6
        Product Name: IPhone 13 Pro Max
        Product URL: http://abc.com/iphone-13-pro-max
        Product Price: 25000

    Customer:
        Customer ID: 12
        
    Vendor:
        Company ID: 34
        Company Name: Apple Türkiye
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
