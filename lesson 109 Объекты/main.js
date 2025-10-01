// 1. Создаем объект с моим описанием
const myProfile = {
    name: "Alex",
    age: 28,
    occupation: "Developer",
    city: "Moscow",

    // 2. Метод для приветствия
    greet: function (name) {
        return `Hello "${name}"`;
    }
};

// 3. Создаем массив объектов с описанием пользователей
const users = [
    {
        name: "Alice",
        age: 25,
        isAdmin: false
    },
    {
        name: "Bob",
        age: 30,
        isAdmin: true
    },
    {
        name: "Charlie",
        age: 22,
        isAdmin: false
    },
    {
        name: "Diana",
        age: 28,
        isAdmin: false
    },
    {
        name: "Eve",
        age: 35,
        isAdmin: true
    }
];

// 4. Подсчет простых пользователей
let regularUsersCount = 0; // начальное значение

// Обходим массив пользователей
for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        regularUsersCount++; // прибавляем единицу, если пользователь не админ
    }
}

// Выводим результат в консоль
console.log(`Количество простых пользователей: ${regularUsersCount}`);

// Демонстрация работы метода greet
console.log(myProfile.greet("John")); // Выведет: Hello "John"