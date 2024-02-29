// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i}</div>`);
// }
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i}</div>`);
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i=0;
// while(i<20){
//     i++;
//     document.write(`<h1>${i}</h1>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//

// let i=0;
// while(i<20){
//     i++;
//     document.write(`<h1>${i}</h1>`);
// }

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//

//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
// for (const item of listOfItems) {
//     document.write(`<li>${item}</li>`)
// }
// document.write(`</ul>`)


// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (const product of products) {
//
//     document.write(`<div className="product-card">`)
//     document.write(`<h3 className="product-title">${product.title} Price - ${product.price}</h3>`);
//     document.write(`<img src="${product.image}" alt="" className="product-image">`);
//     document.write(`</div>`)
// }

//
//
// --------------------
//     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// for (const user of users) {
//     if (user.status===true){
//         console.log(user)
//     }
// }
//
// for (const user of users) {
//     if (user.status===false){
//         console.log(user)
//     }
// }
//
// for (const user of users) {
//     if (user.age>30){
//         console.log(user)
//     }
// }

// _---------------------ADDICTIONAL----------------------------------------
//
// --створити масив з:
// - з 5 числових значень
// let ar=[4,2,2,3,5];
// - з 5 стічкових значень
// let ar=['lorem','lorem','lorem','lorem','lorem'];
// - з 5 значень стрічкового, числового та булевого типу
// let ar=[true,2,'lorem',3,false];
// - та вивести його в консоль
// let ar=[4,2,2,3,5];
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
//
//
// let arr=[];
// arr[1]='awd';
// console.log(arr)

//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
// 1. перебрати його циклом while
// while (i<arr.length){
//     i++;
//     console.log(arr[i])
// }
//     2. перебрати його циклом for
// for (let j = 0; j < arr.length; j++) {
//     const arrElement = arr[j];
//     console.log(arrElement)
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// while (i<arr.length){
//     i++;
//     if (i%2==0){
//         console.log(arr[i])
//     }
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let j = 0; j < arr.length; j++) {
//     const arrElement = arr[j];
//     if (j%2!==0){
//         console.log(arrElement)
//     }
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// while (i<arr.length){
//     i++;
//     if (arr[i]%2!==0){
//         console.log(arr[i])
//     }
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let j = 0; j < arr.length; j++) {
//     const arrElement = arr[j];
//     if (arrElement%2==0){
//         console.log(arrElement)
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let j = 0; j < arr.length; j++) {
//     let arrElement = arr[j];
//     if (arrElement%3==0){
//         arrElement ='okten';
//     }
//     console.log(arrElement)
// }
// 8. вивести масив в зворотньому порядку.
//
// for (let j = arr.length - 1; j >= 0; j--) {
//     const arrElement = arr[j];
//     console.log(arrElement)
// }

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        title: "1984",
        pageCount: 328,
        authors: ["George Orwell", "George Orwell"],
        genres: ["Science Fiction", "Dystopian","Dystopian"]
    },
    {
        title: "To Kill a Mockingbird",
        pageCount: 336,
        authors: ["Harper Lee"],
        genres: ["Fiction", "Classic"]
    },
    {
        title: "The Great Gatsby",
        pageCount: 180,
        authors: ["F. Scott Fitzgerald"],
        genres: ["Fiction", "Tragedy"]
    },
    {
        title: "Pride and Prejudice",
        pageCount: 279,
        authors: ["Jane Austen"],
        genres: ["Fiction", "Romance"]
    },
    {
        title: "Anna Karenina",
        pageCount: 864,
        authors: ["Leo Tolstoy"],
        genres: ["Fiction", "Romance"]
    }
];

let biggestPageCount = books[0];
// ----------------
let genresCount = books[0];
// ----------------
let titleCount = books[0];
// ----------------
let oneAuthor=[];
// ----------------
let twoAuthors=[];

// ----------------
// -знайти наібльшу книжку.
for (let j = 0; j < books.length; j++) {
    const book = books[j];
    /// ---------------
    if (book.pageCount > biggestPageCount.pageCount) {
        biggestPageCount = book;
    }
    // ----------------
// - знайти книжку/ки з найбільшою кількістю жанрів
    if (book.genres.length > biggestPageCount.genres.length) {
        genresCount = book;
    }
    // ----------------
// - знайти книжку/ки з найдовшою назвою
    if (book.title.length > titleCount.title.length) {
        titleCount=book;
    }
    // ----------------
// - знайти книжку/ки які писали 2 автори

    if (book.authors.length===2){
        twoAuthors.push(book);
    }
    // ----------------
// - знайти книжку/ки які писав 1 автор

    if (book.authors.length===1){
        oneAuthor.push(book);
    }

    // ----------------
    if (book === books[books.length - 1]){
        console.log('biggest pages');
        console.log(biggestPageCount)
        console.log('biggest genres');
        console.log(genresCount)
        console.log('biggest title');
        console.log(titleCount);
        console.log('book with one author');
        console.log(oneAuthor);
        console.log('book with two authors');
        console.log(twoAuthors);
    }
    // ----------------
}
