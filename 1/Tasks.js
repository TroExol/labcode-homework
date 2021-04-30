// Задание 3
const obj = {a: 2, b: 'same'};
obj.c = 23;

delete obj.b;

console.log(obj);

Object.entries(obj).forEach(([key, value]) => console.log(key, value));
Object.values(obj).forEach(value => console.log(value));
Object.keys(obj).forEach(key => console.log(key));

// Задание 4
const arr = [];
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.unshift(1);

// console.log(arr);
//
// console.log(arr.shift());
// console.log(arr.pop());

console.log(arr);

// Удаление по индексу
const index = 1;
// Вариант 1
arr.splice(index, 1);

console.log(arr);

// Вариант 2
console.log(arr.filter((val, i) => i !== index));

// Вариант...

console.log(arr);

// Удаление по значению
const value = 4;
const indexOfValue = arr.indexOf(value);
indexOfValue !== -1 && arr.splice(indexOfValue, 1);
