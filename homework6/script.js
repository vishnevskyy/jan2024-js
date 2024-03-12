// - Знайти та вивести довижину настипних стрінгових значень
// let arr=['hello world', 'lorem ipsum', 'javascript is cool'];
// const findLength=(arr)=>{
//     for (const arrElement of arr) {
//        return arrElement.length;
//     }
// }

// - Перевести до великого регістру наступні стрінгові значення
// let arr2=['hello world', 'lorem ipsum', 'javascript is cool']
// const toUpperCase=(arr)=>{
//     for (const arrElement of arr) {
//         return arrElement.toUpperCase();
//     }
// }
// - Перевести до нижнього регістру настипні стрінгові значення
// let arr3=['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
// const toLowerCase=(arr)=>{
//     for (const arrElement of arr) {
//         return arrElement.toUpperCase();
//     }
// }
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// const cleanString=(element)=>element.trim();

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// const stringToarray=(str)=>{str.split()};
// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let arr4=[10,8,-7,55,987,-1011,0,1050,0];
// let aw=arr4.map((a)=>a.toString(),[]);
// console.log(aw);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// const sortNums=(nums,direction)=>{
//
// if (direction==='ascending'){
//     return nums.sort((a,b)=>a-b);
// }else if(direction==='descending'){
//     return nums.sort((a,b)=>b-a);
// }
// }
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));

// ==========================

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// const sortMonthDuration=(arr)=>{
//     arr.sort((a,b)=>a.monthDuration-b.monthDuration);
//     return arr;
// }
// console.log(sortMonthDuration(coursesAndDurationArray));

// const filterMonthDuration=(arr,moreThen)=>{
//      return arr.filter((a)=>+a.monthDuration>moreThen)
// }
// console.log(filterMonthDuration(coursesAndDurationArray, 5));

// const addIdToArray=(arr)=>{
//   return arr.map(value => Object.defineProperty(value,'id',{value:arr.indexOf(value),writable:true}));
// }
// console.log(addIdToArray(coursesAndDurationArray));
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
let cardStack = [];
function createCard(content) {
    let card = {};
    Object.defineProperties(card, content);
    cardStack.push(card);
}
let properties = {
    cardSuit: ['spade', 'diamond', 'heart', 'clubs'],
    value: ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'],
    color: ['red', 'black']
}
properties.cardSuit.map((cardSuit) => {
    if (cardSuit === 'spade' || cardSuit === 'clubs') {
        properties.value.map(value => {
            createCard({
                'cardSuit': {value: cardSuit, writable: true},
                'value': {value: value, writable: true},
                'color': {value: properties.color[1 ], writable: true}
            })
        })
    } else if (cardSuit === 'diamond' || cardSuit === 'heart') {
        properties.value.map(value => {
            createCard({
                'cardSuit': {value: cardSuit, writable: true},
                'value': {value: value, writable: true},
                'color': {value: properties.color[0], writable: true}
            })
        })
    }
});
    console.log(cardStack)
// console.log(cardStack.find(value => (value.value === 'ace' && value.cardSuit==='spade')));
// console.log(cardStack.filter(value => (value.value === '6')));
// console.log(cardStack.filter(value => (value.color === 'red')));
// console.log(cardStack.filter(value => (value.cardSuit === 'diamond')));
// console.log(cardStack.filter(value => (value.cardSuit==='clubs' && !(value.value<9))))


// let x={};
// let cards=[];
// const sortBy=(sort,sortByy)=>{
//     sortByy.map(suits => {
//         let x=cardStack.filter(value => value.cardSuit==suits)
//         cards.push(x);
//     })
// }
//
// sortBy(cardStack,properties.cardSuit);
//
// console.log(cards);

// =========================

//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const group = (items,fn) => {
  return items.reduce((prev,next)=>{
      (prev[next[fn]]=prev[next[fn]] || []).push(next);
      return prev;
  },{})
}
console.log(group(cardStack, 'cardSuit'));
console.log(group(cardStack, 'color'));
console.log(group(cardStack, 'value'));

// =========================
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter(value => value.modules.includes('sass')))
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter(value => value.modules.includes('docker')))

