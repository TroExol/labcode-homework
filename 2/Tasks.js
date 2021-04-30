// // Задание 2
// const item = {count: 2, name: 'Какой-то предмет в магазине'};
// const increaseCount = (item) => {item.count++;};
// increaseCount(item);
//
// console.log(item);
//
// const value = 2;
// const square = (num) => num ** 2;
//
// console.log(square(value));
// console.log(value);
//
// // Задание 3
// const arr = [1, 23, 5, 4];
// const callbackFunction = (array, func) => array.forEach(func);
//
// callbackFunction(arr, console.log);
//
// // Задание 4
// const sumAsync = (a, b) => new Promise((resolve, reject) =>
// {
// 	setTimeout(() =>
// 	{
// 		if (typeof a === 'number' && typeof b === 'number')
// 			resolve(a + b);
// 		else
// 			reject('Не число');
// 	}, 1000);
// });
//
// sumAsync(2, 3).then(console.log).catch(console.log); // 5
// sumAsync('', 3).then(console.log).catch(console.log); // Не число
//
// try
// {
// 	console.log(await sumAsync(2, 3)); // 5
// } catch(e)
// {
// 	console.log(e); // Не вызовется
// }
//
// try
// {
// 	console.log(await sumAsync("", 3)); // Не вызовется
// } catch(e)
// {
// 	console.log(e); // Не число
// }

// Задание 5
/*Пример:
 Вход: nums = [2,7,11,15], target = 9
 Выход: [0,1]
 Пояснение:  nums[0] + nums[1] == 9 --> [0, 1].*/

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
