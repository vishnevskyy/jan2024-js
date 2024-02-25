// // Масиви та об'єкти:
// // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// // let arr = [{
// //     name: '',
// //     username: '',
// //     password: ''
// // }, {
// //     name: '',
// //     username: '',
// //     password: ''
// // }, {
// //     name: '',
// //     username: '',
// //     password: ''
// // }, {
// //     name: '',
// //     username: '',
// //     password: ''
// // }, {
// //     name: '',
// //     username: '',
// //     password: ''
// // }, {
// //     name: '',
// //     username: '',
// //     password: ''
// // }, {
// //     name: '',
// //     username: '',
// //     password: ''
// // }, {
// //     name: '',
// //     username: '',
// //     password: ''
// // }, {
// //     name: '',
// //     username: '',
// //     password: ''
// // }, {
// //     name: '',
// //     username: '',
// //     password: ''
// // }]
// // console.log(arr);
// // // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// // let obj1 = {title: 'The Great Gatsby', pageCount: 218, genre: 'Fiction'};
// // let obj2 = {title: 'To Kill a Mockingbird', pageCount: 281, genre: 'Classic'};
// // let obj3 = {title: '1984', pageCount: 328, genre: 'Dystopian'};
// //
// // // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// // let obj4 = {
// //     title: 'The Great Gatsby',
// //     pageCount: 218,
// //     genre: 'Fiction',
// //     authors: [
// //         {name: 'F. Scott Fitzgerald', age: 44},
// //         {name: 'Francis Cugat', age: 54}
// //     ]
// // };
// //
// // let obj5 = {
// //     title: 'To Kill a Mockingbird',
// //     pageCount: 281,
// //     genre: 'Classic',
// //     authors: [
// //         {name: 'Harper Lee', age: 89}
// //     ]
// // };
// //
// // let obj6 = {
// //     title: '1984',
// //     pageCount: 328,
// //     genre: 'Dystopian',
// //     authors: [
// //         {name: 'George Orwell', age: 46}
// //     ]
// // };
//
// // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
// // let arr3 = [
// //     {
// //         name: 'John Doe',
// //         username: 'johndoe123',
// //         password: 'password123'
// //     },
// //     {
// //         name: 'Alice Smith',
// //         username: 'alicesmith456',
// //         password: 'qwerty456'
// //     },
// //     {
// //         name: 'Bob Johnson',
// //         username: 'bobjohnson789',
// //         password: 'letmein789'
// //     },
// //     {
// //         name: 'Emily Davis',
// //         username: 'emilydavis987',
// //         password: 'abc123'
// //     },
// //     {
// //         name: 'Michael Brown',
// //         username: 'michaelbrown321',
// //         password: 'p@ssw0rd'
// //     },
// //     {
// //         name: 'Sarah Wilson',
// //         username: 'sarahwilson654',
// //         password: 'sarah123'
// //     },
// //     {
// //         name: 'David Taylor',
// //         username: 'davidtaylor111',
// //         password: 'david456'
// //     },
// //     {
// //         name: 'Jessica Martinez',
// //         username: 'jessicamartinez222',
// //         password: '123456'
// //     },
// //     {
// //         name: 'Christopher Lee',
// //         username: 'christopherlee333',
// //         password: 'christopher789'
// //     },
// //     {
// //         name: 'Amanda Harris',
// //         username: 'amandaharris444',
// //         password: 'amanda@123'
// //     }
// // ];
// // console.log(arr3[0].password);
// // console.log(arr3[1].password);
// // console.log(arr3[2].password);
// // console.log(arr3[3].password);
// // console.log(arr3[4].password);
// // console.log(arr3[5].password);
// // console.log(arr3[6].password);
// // console.log(arr3[7].password);
// // console.log(arr3[8].password);
// // console.log(arr3[9].password);
//
// //
// // Логічні розгалуження:
// //     - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// //
// // let x=0;
// // if (x!==0){
// //     console.log('Вірно')
// // }else{
// //     console.log('Невірно')
//
// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає
// // число
// // (в першу, другу, третю или четверту частину години).
// // let time = 33;
// // let x = time;
// //
// // if (x >= 0 && x < 15) {
// //     console.log('1')
// // } else if (x >= 15 && x < 30) {
// //     console.log('2')
// // } else if (x >= 30 && x < 45) {
// //     console.log('3')
// // } else if (x >= 45 && x < 60) {
// //     console.log('4')
// // } else {console.log('uncorrect time')
// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у
// // першу, другу чи третю).
// //
// // let day = 21;
// // if (day >= 1 && day <= 10){
// //     console.log('1')
// // } else if(day > 10 && day < 21) {
// //     console.log('2')
// // }
// // if(day >= 21 && day <= 31){
// //     console.log('3')
// // }else {console.log('wrong data')
//
// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// // інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// //     let day=+prompt('enter day number')
// //     switch (day) {
// //         case 1:
// //             console.log('monday');
// //             break;
// //         case 2:
// //             console.log('tuesday');
// //             break;
// //         case 3:
// //             console.log('wensday');
// //             break;
// //         case 4:
// //             console.log('thursday');
// //             break;
// //         case 5:
// //             console.log('friday');
// //             break;
// //         case 6:
// //             console.log('saturday');
// //             break;
// //         case 7:
// //             console.log('sunday');
// //             break;
// //         default:
// //             console.log('wrong number')
// //             break;
// //
// }
// //     - Користувач вводить або має два числа.
// //         Потрібно знайти та вивести максимальне число з тих двох .
// //         Також потрібно врахувати коли введені рівні числа.
// //
// // let n1=prompt('enter n1')
// // let n2=prompt('enter n2')
// // if (n1==n2){
// //     console.log(`${n1}=${n2}`);
// // }
// // else if (n1>n2){
// //     console.log(`${n1}>${n2}`)
// // } else {
// //     console.log(`${n1}<${n2}`)
// // }
// //     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// //         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// //         (хибноподібні, тобто приводиться до false)
// // let x = 2 || 'default';
// // console.log(x);
// //
// //         - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
// //         його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
// //
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // if (coursesAndDurationArray[0].monthDuration>5){
// //     console.log(coursesAndDurationArray[0].title)
// //     console.log('Супер')
// // }
// // if (coursesAndDurationArray[1].monthDuration>5){
// //     console.log(coursesAndDurationArray[1].title)
// //     console.log('Супер')
// // }
// // if (coursesAndDurationArray[2].monthDuration>5){
// //     console.log(coursesAndDurationArray[2].title)
// //     console.log('Супер')
// // }
// // if (coursesAndDurationArray[3].monthDuration>5){
// //     console.log(coursesAndDurationArray[3].title)
// //     console.log('Супер')
// //
// // }
// // if (coursesAndDurationArray[4].monthDuration>5){
// //     console.log(coursesAndDurationArray[4].title)
// //     console.log('Супер')
// //
// // }
// // if (coursesAndDurationArray[5].monthDuration>5){
// //     console.log(coursesAndDurationArray[5].title)
// //     console.log('Супер')
// // }
