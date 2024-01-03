// reduce 

// let myArr = [1,2,3,4,5];

// const reducedMyArr = myArr.reduce((list,current) => {
//   list.push(current * 2) // 1 * 2, 2 * 2, 3 * 2, 4 * 2, 5 * 2
//   return list
// },[])

// console.log(reducedMyArr);

// const initialValue = 0;
// const sum = [{x:1},{x:2},{x:3}].reduce((accumulator,currentValue) => accumulator + currentValue.x,0)
// console.log(sum)

// friends - список из объектов(друзей)
// где поле "books" - список любимых книг друга
// const friends = [
//   { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//   { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//   { name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 },
// ];

// const allBooks = friends.reduce((prev,curr) => {
//   return [
//     ...prev,
//     ...curr.books,
//   ]
// },["Alphabet"])

// console.log(allBooks)

let arr = [1,2,3,4,5];

const updatedArr = arr.reduce((acc,curr) => {
   const pushedAcc = curr * 2;
    acc.push(pushedAcc);
    return acc;
},[]);

console.log(updatedArr)

// splice
//let arr = ["Я", "изучаю", "JavaScript"];
//arr.splice(1,1);  // начиная с позиции 1, удалить 1 элемент
//console.log(arr);

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// arr.splice(0,3,"Давай","танцевать");
// console.log(arr); // теперь ["Давай", "танцевать", "прямо", "сейчас"]

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// let removed = arr.splice(0,2);
// console.log(removed) // [ 'Я', 'изучаю' ]

// let arr = ["Я", "изучаю", "JavaScript"];

// с позиции 2
// удалить 0 элементов
// вставить "сложный", "язык"
// arr.splice(2,0,"сложный","язык");

// console.log(arr);

// let arr = [1, 2, 5];
// arr.splice(-1,0,3,4);
// console.log(arr); // 1,2,3,4,5

// slice
// let arr = ["t", "e", "s", "t"];

// console.log(arr.slice(1, 3)); // e,s (копирует с 1 до 3)

// let arr = ['Ч',"Я","чушпан","и","точка","lf"];

// console.log(arr.slice(1,5)); // "Я",

// let arr = ["t", "e", "s", "t"];
// console.log(arr.slice(-3)); // s,t (копирует с -2 до конца)

// concat 
// Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.

// let arr = [1, 2];

// console.log(arr.concat(3,4));
// console.log(arr.concat([3,4],[5,6])); // добавление элементов 

// console.log(arr.concat([3, 4], 5, 6));

// find 

// let users = [
//   { id: 1, name: "Вася" },
//   { id: 2, name: "Петя" },
//   { id: 3, name: "Маша" },
// ];

// let user = users.find(item => item.id == 1);

// console.log(user); // { id: 1, name: 'Вася' }
// console.log(user.name); // Вася

// filter 
// let users = [
//   { id: 1, name: "Вася" },
//   { id: 2, name: "Петя" },
//   { id: 3, name: "Маша" },
// ];


// const user = users.filter(item => item.id < 3);

// console.log(user);

// const userFind = user.find(user => user.id === 1);
// console.log(userFind.id);

// split 

// let names = "Вася, Петя, Маша";

// let arr = names.split(', ');

// console.log(arr);

// for(let name of arr){
//   return console.log(`Сообщение получит ${name}`);
// }

// let str = "тест";

// console.log(str.split(''))


// join 

// let arr = ["Вася", "Петя", "Маша"];

// let str = arr.join(' ');

// console.log(str);


