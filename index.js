var myString = "Hello, TypeScript, not JavaScript!";
var myNumber = 33;
var myBoolean = true;
var myNull = null;
var myUndefined = undefined;
var myArray = [1, 2, 3, 56, 77];
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
myArray.sort(function (a, b) { return a - b; }); // Сортировка по возрастанию
console.log("Sorted array:", myArray);
