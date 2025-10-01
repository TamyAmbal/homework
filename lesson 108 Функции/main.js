// 1) Функция приветствия
function greet(name) {
    return `Hello "${name}"`;
}

// 2) Функция для чисел больше 10
function printNumbersGreaterThanTen(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            console.log(arr[i]);
        }
    }
}

// 3) Калькулятор
function calculator(num1, num2, operator) {
    switch (operator) {
        case 'plus':
        case '+':
            return num1 + num2;
        case 'minus':
        case '-':
            return num1 - num2;
        case 'multiply':
        case '*':
            return num1 * num2;
        case 'divide':
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Ошибка: деление на ноль';
        default:
            return 'Ошибка: неизвестный оператор';
    }
}

// Демонстрация работы всех функций
console.log('=== Задача 1 ===');
console.log(greet('Alex'));

console.log('=== Задача 2 ===');
const numbers = [5, 12, 8, 15, 3, 20, 9];
printNumbersGreaterThanTen(numbers);

console.log('=== Задача 3 ===');
console.log(calculator(2, 3, 'minus')); // -1
console.log(calculator(10, 2, 'divide')); // 5
console.log(calculator(7, 4, 'multiply')); // 28
console.log(calculator(5, 3, 'plus')); // 8