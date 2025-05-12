let myString: string = "Hello, TypeScript, not JavaScript!";
let myNumber: number = 33;
let myBoolean: boolean = true;
let myNull: null = null;
let myUndefined: undefined = undefined;
let myArray: number[] = [1, 2, 3, 56, 77];

console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myNull);
console.log(myUndefined);
console.log(myArray);

// Изменение значений переменных
myString = "Updated string!";
myNumber = 100;
myBoolean = false;
myArray.push(4); // Добавление элемента в массив

console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myArray);

// Работа с массивами
myArray.pop(); // Удаление последнего элемента из массива
console.log("Length of array:", myArray.length); // Получение длины массива

// Сортировка числового массива
myArray.sort((a, b) => a - b); // Сортировка по возрастанию
console.log("Sorted array:", myArray);