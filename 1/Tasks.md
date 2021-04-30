### 1. Что такое переменная? И в чем ее разница со значением?
Переменная — именованная ссылка на адрес в памяти, который может хранить значение.
Значение — так сказать, самостоятельная единица данных, а переменная предназначена, чтобы ссылаться на это значение.

### 2. Что такое примитивный тип и неприметивный? В чем разница между ними? Приведите конкретный пример.
Примитивный тип данных — это данные, значения которых не могут быть модифицированы, а могут быть только перезаписаны. Непримитивные типы могут быть как модифицированы, так и перезаписаны.

Примеры:
* Примитив:
  ```js
  let number = 2;
  number = 5;
  ```
* Непримитив:
    ```js
    let obj = {a: 2};
    obj.b = 3;
    obj.a = 3;
    obj = {c: 2};
    ```  

### 3. Создайте любой объект, добавьте в него новый ключ со значением, потом удалите любой существующий ключ. Потом проитерируйте объект используя Object.entries, Object.values, Object.keys.

```js
const obj = {a: 2, b: 'same'};
obj.c = 23;

delete obj.b;

console.log(obj);

Object.entries(obj).forEach(([key, value]) => console.log(key, value));
Object.values(obj).forEach(value => console.log(value));
Object.keys(obj).forEach(key => console.log(key));
```

### 4. Создайте любой массив, измените массив используя методы push, unshift, shift, pop. Как можно удалить элемент из массива по значение и по номер элемента в массиве, напишите пример?

```js
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
```

### 5. Что такое поверхностное и глубокое копирование? В чем разница между ними? Приведите примеры
Поверхностное копирование копирует только первый уровень иерархии свойств объекта, все нижние уровни копируют не значения, а ссылки на значения.

Пример:
```js
const obj = {a: 2, b: { c: 3 }};
const copiedObj = Object.assign({}, obj);

copiedObj.a = 20; // obj.a = 2, copiedObj.a = 20
copiedObj.b.c = 20; // obj.b.c = 20, copiedObj.b.c = 20
```

Глубокое копирование копирует все значения по всей иерархии свойств.

```js
const obj = {a: 2, b: { c: 3 }};
const copiedObj = JSON.parse(JSON.stringify(obj));

copiedObj.a = 20; // obj.a = 2, copiedObj.a = 20
copiedObj.b.c = 20; // obj.b.c = 3, copiedObj.b.c = 20
```
