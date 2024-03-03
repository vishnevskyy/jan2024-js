// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function ploshaPramokutnika(a,b) {
//     return a*b;
// }

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function ploshaKola(r) {
//     return Math.PI*r*r;
// }

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function ploshaCilindra(h,r){
//     return 2*r*h;
// }

// - створити функцію яка приймає масив та виводить кожен його елемент

//  void function  consoleLogIterator(array){
//     for (const arrayElement of array) {
//        console.log(arrayElement)
//     }
// }

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function f(text) {
//     document.write(`<p>${text}</p>`);
// }

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function f1(argument) {
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${argument}</li>>`)
//     }
//     document.write(`</ul>`)
// }

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)

// function f2(argument,number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${argument}</li>>`)
//     }
//     document.write(`</ul>`)
// }

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function f3(array) {
//     document.write(`<ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>>`)
//     }
//     document.write(`</ul>`)
// }

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного
// об'єкту окремий блок.

// function f4(array) {
//     for (const arrayElement of array) {
//         document.write(`<div>`)
//         document.write(<h3>${arrayElement.id}</h3>)
//         document.write(<h3>${arrayElement.name}</h3>)
//         document.write(<h3>${arrayElement.age}</h3>)
//         document.write(`</div>`)
//     }
// }

// - створити функцію яка повертає найменьше число з масиву

// function f5(array) {
//     let num=0;
//     for (const arrayElement of array) {
//         if (+arrayElement<num){
//             num=arrayElement
//         } else{
//             console.log('is not a number');
//         }
//     }
// }

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10])
// ->13

// function sum(arr) {
//     let a;
//     for (const arrElement of arr) {
//         a+=arrElement;
//     }
//     return a;
// }

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr,index1,index2) {
//     let arg;
//     arg=arr[index1];
//     arr[index1]=arr[index2];
//     arr[index2]=arg;
// }

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// function exchange(sumUAH,currencyValues,exchangeCurrency) {
//     for (const currency of currencyValues) {
//         if (exchangeCurrency==currency.currency) {
// total=sumUAH/currency.value;
//         }
//     }
//     return total;
// }

