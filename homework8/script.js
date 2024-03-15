// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// class User {
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = id;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone
//     }
// }
//
// let users = [];
//
// users.push(
//     new User(1, "John", "Doe", "john.doe@example.com", "123-456-7890"),
//     new User(2, "Jane", "Smith", "jane.smith@example.com", "987-654-3210"),
//     new User(3, "Alice", "Johnson", "alice.johnson@example.com", "555-123-4567"),
//     new User(4, "Bob", "Johnson", "bob.johnson@example.com", "555-987-6543"),
//     new User(5, "Michael", "Brown", "michael.brown@example.com", "111-222-3333"),
//     new User(6, "Emily", "Williams", "emily.williams@example.com", "444-555-6666"),
//     new User(7, "David", "Jones", "david.jones@example.com", "777-888-9999"),
//     new User(8, "Sarah", "Miller", "sarah.miller@example.com", "666-444-3333"),
//     new User(9, "Ryan", "Garcia", "ryan.garcia@example.com", "222-333-4444"),
//     new User(10, "Olivia", "Martinez", "olivia.martinez@example.com", "999-888-7777")
// );

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(users.filter(value => value.id % 2 == 0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(users.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// let clients = [];
// clients.push(
//     new Client(1, "John", "Doe", "john.doe@example.com", "123-456-7890", [
//         {id: 101, product: "Product A", quantity: 2},
//         {id: 109, product: "Product I", quantity: 5},
//         {id: 109, product: "Product I", quantity: 5},
//         {id: 102, product: "Product B", quantity: 3},
//         {id: 103, product: "Product C", quantity: 1}
//     ]),
//     new Client(2, "Jane", "Smith", "jane.smith@example.com", "987-654-3210", [
//         {id: 104, product: "Product D", quantity: 1},
//         {id: 109, product: "Product I", quantity: 5},
//         {id: 109, product: "Product I", quantity: 5},
//         {id: 109, product: "Product I", quantity: 5},
//         {id: 109, product: "Product I", quantity: 5},
//         {id: 109, product: "Product I", quantity: 5},
//         {id: 105, product: "Product E", quantity: 4},
//         {id: 106, product: "Product F", quantity: 2}
//     ]),
//     new Client(3, "Alice", "Johnson", "alice.johnson@example.com", "555-123-4567", [
//         {id: 107, product: "Product G", quantity: 3},
//     ]),
//     new Client(4, "Bob", "Williams", "bob.williams@example.com", "111-222-3333", [
//         {id: 110, product: "Product J", quantity: 3},
//         {id: 113, product: "Product M", quantity: 2},
//         {id: 113, product: "Product M", quantity: 2},
//         {id: 113, product: "Product M", quantity: 2},
//         {id: 111, product: "Product K", quantity: 1},
//         {id: 112, product: "Product L", quantity: 4}
//     ]),
//     new Client(5, "Emily", "Brown", "emily.brown@example.com", "444-555-6666", [
//         {id: 115, product: "Product O", quantity: 2}
//     ]),
//     new Client(6, "David", "Jones", "david.jones@example.com", "777-888-9999", [
//         {id: 120, product: "Product T", quantity: 3},
//         {id: 120, product: "Product T", quantity: 3},
//         {id: 116, product: "Product P", quantity: 4},
//         {id: 117, product: "Product Q", quantity: 2},
//         {id: 118, product: "Product R", quantity: 1}
//     ]),
//     new Client(7, "Sarah", "Miller", "sarah.miller@example.com", "666-444-3333", [
//         {id: 119, product: "Product S", quantity: 1},
//         {id: 121, product: "Product U", quantity: 2}
//     ]),
//     new Client(8, "Ryan", "Garcia", "ryan.garcia@example.com", "222-333-4444", [
//         {id: 122, product: "Product V", quantity: 3},
//         {id: 126, product: "Product Z", quantity: 3},
//         {id: 123, product: "Product W", quantity: 4},
//         {id: 124, product: "Product X", quantity: 2}
//     ]),
//     new Client(9, "Olivia", "Martinez", "olivia.martinez@example.com", "999-888-7777", [
//         {id: 125, product: "Product Y", quantity: 1},
//         {id: 126, product: "Product Z", quantity: 3},
//         {id: 127, product: "Product AA", quantity: 5},
//         {id: 129, product: "Product AC", quantity: 3},
//     ]),
//     new Client(10, "Michael", "Taylor", "michael.taylor@example.com", "333-111-2222", [
//         {id: 128, product: "Product AB", quantity: 2},
//         {id: 129, product: "Product AC", quantity: 3},
//         {id: 130, product: "Product AD", quantity: 4}
//     ])
// );
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(clients.sort((a, b) => a.order.length - b.order.length));
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function car({model, manufacturer, year, maxSpeed, engineVolume}) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    this.info = function () {
        console.log(`
        model - ${model}
        manufacturer - ${manufacturer}
        year - ${year}
        maxSpeed - ${maxSpeed}
        engineVolume - ${engineVolume}
        `)
    }
    this.increaseMaxSpeed = function (newMaxSpeed) {
        console.log(`Максимальну швидкість ${maxSpeed} збільшено до ${newMaxSpeed}`)
        this.maxSpeed = newMaxSpeed;
    }
    this.changeYear=function (newValue) {
        console.log(`Рік випуску змінено з ${this.year} до значення ${newValue}`)
        this.year=newValue;
    }
    this.addDriver = function (name, categories, yearsExperience) {
        this.driver={name,categories,yearsExperience}
    }
}

let cars = [
    new car({ model: "Accord", manufacturer: "Honda", year: 2022, maxSpeed: 240, engineVolume: 2.0 }),
    new car({ model: "Civic", manufacturer: "Honda", year: 2023, maxSpeed: 220, engineVolume: 1.8 }),
    new car({ model: "Camry", manufacturer: "Toyota", year: 2022, maxSpeed: 250, engineVolume: 2.5 }),
    new car({ model: "Corolla", manufacturer: "Toyota", year: 2023, maxSpeed: 230, engineVolume: 1.6 }),
    new car({ model: "3 Series", manufacturer: "BMW", year: 2022, maxSpeed: 260, engineVolume: 2.0 }),
    new car({ model: "5 Series", manufacturer: "BMW", year: 2023, maxSpeed: 250, engineVolume: 3.0 }),
    new car({ model: "C-Class", manufacturer: "Mercedes-Benz", year: 2022, maxSpeed: 240, engineVolume: 2.0 }),
    new car({ model: "E-Class", manufacturer: "Mercedes-Benz", year: 2023, maxSpeed: 250, engineVolume: 3.0 }),
    new car({ model: "A4", manufacturer: "Audi", year: 2022, maxSpeed: 230, engineVolume: 2.0 }),
    new car({ model: "A6", manufacturer: "Audi", year: 2023, maxSpeed: 240, engineVolume: 3.0 })
];

// -- drive () - яка виводить в консоль
console.log(cars[0].drive());
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
cars[0].info();
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
cars[0].increaseMaxSpeed(265)
console.log(cars[0]);
// -- changeYear (newValue) - змінює рік випуску на значення newValue
cars[0].changeYear(2020);
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
cars[0].addDriver("John Doe", ["B", "C"], 5);
console.log(cars[0]);
//
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     class Car {
//         constructor (model, manufacturer, year, maxSpeed, engineVolume) {
//             this.model = model;
//             this.manufacturer = manufacturer;
//             this.year = year;
//             this.maxSpeed = maxSpeed;
//             this.engineVolume = engineVolume;
//
//             this.drive = function () {
//                 console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//             }
//             this.info = function () {
//                 console.log(`
//         model - ${model}
//         manufacturer - ${manufacturer}
//         year - ${year}
//         maxSpeed - ${maxSpeed}
//         engineVolume - ${engineVolume}
//         `)
//             }
//             this.increaseMaxSpeed = function (newMaxSpeed) {
//                 console.log(`Максимальну швидкість ${maxSpeed} збільшено до ${newMaxSpeed}`)
//                 this.maxSpeed = newMaxSpeed;
//             }
//             this.changeYear=function (newValue) {
//                 console.log(`Рік випуску змінено з ${this.year} до значення ${newValue}`)
//                 this.year=newValue;
//             }
//             this.addDriver = function (name, categories, yearsExperience) {
//                 this.driver={name,categories,yearsExperience}
//             }
//         }
//     }
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Popelushka {
    constructor(name,age,legSize) {
    this.name=name;
    this.age=age;
    this.legSize=legSize
    }
}
class Prince{
    constructor(name,age,foundShoeSize) {
    this.name=name;
    this.age=age;
    this.foundShoeSize=foundShoeSize
    }
}
let popelushkas=[];
popelushkas.push(new Popelushka("Cinderella 1", 21, 36));
popelushkas.push(new Popelushka("Cinderella 2", 22, 37));
popelushkas.push(new Popelushka("Cinderella 3", 23, 38));
popelushkas.push(new Popelushka("Cinderella 4", 24, 39));
popelushkas.push(new Popelushka("Cinderella 5", 25, 40));
popelushkas.push(new Popelushka("Cinderella 6", 26, 41));
popelushkas.push(new Popelushka("Cinderella 7", 27, 42));
popelushkas.push(new Popelushka("Cinderella 8", 28, 43));
popelushkas.push(new Popelushka("Cinderella 9", 29, 44));
popelushkas.push(new Popelushka("Cinderella 10", 30, 45));

// Створюємо об'єкт принца та додаємо його до масиву princes
let prince = new Prince("Charming", 25, 40);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const popelushka of popelushkas) {
    if (popelushka.legSize==prince.foundShoeSize){
        console.log(popelushka);
    }
}