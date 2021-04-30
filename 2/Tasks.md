### 1. Создайте функцию, которая складывает массив чисел.

```js
const sum = (numArray) => numArray.reduce((sum, num) => sum + num, 0);
```

### 2. Что такое передача по ссылке и по значению? В чем разница между ними? Приведите пример.
Передача по ссылке — значение хранится в памяти, передается ссылка на этот адрес в памяти. При изменении значения в памяти, значение меняется во всех переменных, которые ссылались на этот адрес.

Передача по значению — передается само значение, его изменение не влечет за собой изменение значения во всех остальных переменных.

```js
// Передача по ссылке
const item = {count: 2, name: "Какой-то предмет в магазине"};
const increaseCount = (item) => {item.count++};
increaseCount(item);

console.log(item); // count = 3

// Передача по значению
const value = 2;
const square = (num) => num**2;

console.log(square(value)); // 4
console.log(value); // 2
```

### 3. Создайте любую функцию, которая использовала бы в качестве аргумента другую функцию (callback)

```js
const arr = [1,23,5,4];
const callbackFunction = (array, func) => array.forEach(func);

callbackFunction(arr, console.log);
```

### 4. Создайте любой промис используя setTimeout для задержки ответа. Обработайте его используя then/catch и async/await (используя try/catch). Почему если вызвать промис синхронно и обернуть в try/catch, то в случае ошибки catch блок не поймает ошибку?

```js
const sumAsync = (a, b) => new Promise((resolve, reject) =>
{
	setTimeout(() =>
	{
		if (typeof a === 'number' && typeof b === 'number')
			resolve(a + b);
		else
			reject('Не число');
	}, 1000);
});

sumAsync(2, 3).then(console.log).catch(console.log); // 5
sumAsync('', 3).then(console.log).catch(console.log); // Не число

try
{
	console.log(await sumAsync(2, 3)); // 5
} catch(e)
{
	console.log(e); // Не вызовется
}

try
{
	console.log(await sumAsync("", 3)); // Не вызовется
} catch(e)
{
	console.log(e); // Не число
}
```

В случае, когда Promise вызывается синхронно, try/catch не может его обработать из-за того, что исключение сработает позже того, как скрипт уже пройдет этот try/catch блок.

### 5*. Задача: Дан массив целых чисел и целочисленное целевое значение, верните масив двух индексов на которых сумма величин элементов равна целевому значению. Вы можете предположить что решение только одно и все элементы исходного массива уникальны. Если можете покрыть свое решение тестами.
Пример:
* Вход: nums = [2,7,11,15], target = 9
* Выход: [0,1]
* Пояснение:  nums[0] + nums[1] == 9 --> [0, 1].

```js
const findIndexesOfSum = (numbers, target) =>
{
	for(let i = 0; i < numbers.length; i++)
		for(let j = i + 1; j < numbers.length; j++)
			if (numbers[i] + numbers[j] === target)
				return [i, j];
};

const nums = [2, 7, 11, 15];

console.log(test(findIndexesOfSum(nums, 9), [0, 1])); // true
console.log(test(findIndexesOfSum(nums, 13), [0, 2])); // true
console.log(test(findIndexesOfSum(nums, 18), [1, 2])); // true
console.log(test(findIndexesOfSum(nums, 17), [0, 3])); // true
console.log(test(findIndexesOfSum(nums, 17), [0, 2])); // false
console.log(test(findIndexesOfSum(nums, 11), undefined)); // true

function test(value1, value2)
{
	if (Array.isArray(value1) && Array.isArray(value2))
	{
		return JSON.stringify(value1) === JSON.stringify(value2);
	} else
	{
		return value1 === value2;
	}
}
```
