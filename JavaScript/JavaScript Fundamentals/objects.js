let user1 = {
    "fName": "Nuri Buğra",
    "lName": "Demir",
    "age": 22,
    "job": "Software Engineer",
    "address": {
        "city": "Kocaeli",
        "district": "Derince"
    },
    "hobbies": ["cinema", "reading", "music", "game"]
}
let user2 = {
    "fName": "Deniz Berk",
    "lName": "Demir",
    "age": 6,
    "job": "Student",
    "address": {
        "city": "Kocaeli",
        "district": "Derince"
    },
    "hobbies": ["game", "social media", "cartoon", "play"]
}

let users = [user1, user2];

let result;

result = user1.fName;
result = user1.lName;
result = user1.age;
result = user1.job;
result = user1.address;
result = user1.address.city;
result = user1.hobbies[1];

console.log(result);