//Завдання 1:
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

const numbers = [1, 2, 3, 4, 5]
let total = [];

numbers.forEach(function (number) {
    total.push(number ** 2);
});
console.log(total);

//Завдання 2:
// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
 { id: 1, values: [1, 2, 3] },
 { id: 2, values: [4, 5, 6] },
 { id: 3, values: [7, 8, 9] },
];
const addTotal = [];

data.forEach(item => {      
    addTotal.push(...item.values);
})
console.log(addTotal);

//Завдання 3:
// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

const people = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
];
const hasUnder20 = people.some(item => item.age < 20);

console.log(hasUnder20); // true



//Завдання 4:
// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. 
// Очікуваний результат: true.

const numbersA = [2, 4, 6, 8, 10];

const parNumberA = numbersA.every((value) => value % 2 === 0);

console.log(parNumberA);


//Завдання 5:
// Знайдіть перше непарне число

const numbersB = [2, 1, 6, 8, 9, 10, 12];

const enyNumbers = numbersB.find((value) => value % 2 !== 0);
console.log(enyNumbers);

//Завдання 6:
// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numbersArray = [4, 2, 5, 1, 3];

const newArray = numbersArray.toSorted((a, b) => a - b);
console.log(newArray);

//Завдання 7:
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].
// !wwwwwwwwwwwwwwwwwwwwwww
// ⚠️ Маленький нюанс (на майбутнє)
// Якщо будуть регістр або локаль:
// ["Äpfel", "Banane", "apple"].toSorted();
// Тоді краще:
// array.toSorted((a, b) => a.localeCompare(b));
// Але для цього завдання — 100% ок 👍
// !WWWWWWWWWWWWWWWWWWWWWWWWWWW

const stringArray = ['banana', 'orange', 'apple', 'pear'];
const newStringArray = stringArray.toSorted();
console.log(newStringArray);

//Завдання 8:
//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

const users = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
];
const usersSort = users.toSorted((firstUser, secondUser) => firstUser.age - secondUser.age);
console.log(usersSort);



//Завдання 9:
// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const user = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
]
const ageArray = user.filter(item => item.age > 20);
console.log(ageArray);

//Завдання 10:
// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

const numbersC = [1, 2, 3, 4, 5];
const totalNumbersC = numbersC.reduce((total, number) => {
    return total + number;
}, 0);
console.log(totalNumbersC);

//Завдання 11:
 // Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод subtract - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
class Calculator {
    constructor() {
        this.value = 0;
    }

    number(value) {
        this.value = value;
        return this; // 🔗 chaining
    }

    add(value) {
        this.value += value;
        return this;
    }

    subtract(value) {
        this.value -= value;
        return this;
    }

    multiply(value) {
        this.value *= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw new Error('Ділення на 0 неможливе');
        }
        this.value /= value;
        return this;
    }

    getResult() {
        return this.value;
    }
} 
// Приклад використання:
const calc = new Calculator();


const result = calc
  .number(10)   // Встановлюємо початкове значення 10
  .add(5)       // Додаємо 5 (10 + 5 = 15)
  .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
  .multiply(4)  // Множимо на 4 (12 * 4 = 48)
  .divide(2)    // Ділимо на 2 (48 / 2 = 24)
  .getResult(); // Отримуємо результат: 24


  console.log(result); // 24



//Завдання 12:
 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email

class Client {
    #login;
    #email;

    constructor(params) {
        this.#login = params.login;
        this.#email = params.email;
    }

    get login() {
        return this.#login;
    }

    set login(newLogin) {
        this.#login = newLogin;
    }

    get email() {
        return this.#email;
    }

    set email(newEmail) {
        this.#email = newEmail;
    }
}
const client = new Client({
  login: 'john123',
  email: 'john@mail.com',
});

client.login = 'john_new';
client.email = 'new@mail.com';

console.log(client.login); // john_new
console.log(client.email); // new@mail.com



//Завдання 13:
  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` 
  // і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, 
  // який повертає об'єкт з зарплатою співробітника та відділом,
  //  в якому він працює.

class Person {
    name;
    age;
    gender;
    email;

    constructor(params) {
        this.name = params.name;
        this.age = params.age;
        this.gender = params.gender;
        this.email = params.email;
    }
    // АБО...
// class Person {
//   constructor({ name, age, gender, email }) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
    //   } 

    getDetails() {
        return {
            name: this.name,
            age: this.age,
            gender: this.gender,
            email: this.email,
        };
    }
}
class Employee extends Person {
  constructor({ name, age, gender, email, salary, department }) {
    super({ name, age, gender, email }); // 👈 наслідування
    this.salary = salary;
    this.department = department;
  }

  getEmployeeDetails() {
    return {
      salary: this.salary,
      department: this.department,
    };
  }
}
const emp = new Employee({
  name: 'John',
  age: 30,
  gender: 'male',
  email: 'john@mail.com',
  salary: 3000,
  department: 'IT',
});

console.log(emp.getDetails());
// { name, age, gender, email }

console.log(emp.getEmployeeDetails());
// { salary, department }



// !WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

function greet(name) {
  console.log(`Welcome ${name}!`);
}
greet("Alex");

function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}
notify("poly");

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}
registerGuest("anna", greet)





class User {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const mango = new User({ 
	name: "Mango", 
	email: "mango@mail.com" 
});

console.log(mango.getEmail());  // “mango@mail.com”