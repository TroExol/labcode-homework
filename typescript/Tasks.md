### 1. Что такое TypeScript? В чем разница между TS и JS?

TypeScript - это язык программирования со строгой типизацией и прочими плюшками, которые помогают разработчикам
допускать меньше ошибок в коде. TypeScript компилируется в JavaScript.

### 2. Как скомпилировать TS в JS?

1) Установить Node.js.
2) Установить пакет с TS:
    ```bash
    $ npm install -g typescript
    ```
3) Скомпилировать TS в JS:
    ```bash
    $ tsc <.ts file>
    ```

### 3. Какие есть типы в TS? Приведите пример использования по каждому типу.

Базовые типы данных:

1) Boolean - логическая
2) Number - число
3) String - строка
4) Array - массив
5) Tuple - кортеж
6) Enum - перечисление
7) Any - любой тип
8) Null - null
9) Undefined - undefined
10) Void - без значения (undefined)
11) Never - без значения (не возвращает вообще ничего, даже без undefined)

```ts
const bool: Boolean = true;
const num: Number = 2;
const str: String = 'str';
const arr: Array<Number> = [2, 3];
const tuple: [string, number] = ["key", 2];

enum numbers {One = 1, Two, Three};
let anyValue: any = 's';
anyValue = 2;
anyValue = false;
const nullValue: null = null;
const undefinedValue: undefined = undefined;
const voidRet = (): void => {
};
const neverRet = (): never => {
  throw new Error("Error");
};
```

### 4. Что такое type и interface? В чем разница между ними? Приведите примеры использования.

Type определяет тип переменной. Интерфейс определяет свойства и методы класса или объекта.

Interface правильнее использовать при работе с ООП, например, классами или объектами, в остальных случаях лучше
использовать типы.

```ts
type SomeType = string | undefined;
let value: SomeType = '2'; // ok
value = undefined; // ok
value = 2; // error

interface IPerson {
  name: string;
  birthday: string;

  getAge(): number;
}

const person: IPerson = {
  name: "Иван",
  birthday: "20.12.2010",
  getAge(): number {
    // Вычисление возраста
    return 10;
  }
};
```

### 5. Что такое generic? Для чего он нужен? Приведите пример использования

Generic позволяет дать возможность пользователю указать тип, который будет применен для всех привязанных к этому
обобщению переменных.

```ts
const add = <T>(a: T, b: T) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  }
  return undefined;
}

console.log(add<Number>(2, 3));
console.log(add<String>("3", "2"));
 ```
