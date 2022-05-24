'use strict';
// const todos = [
//   {
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true
//   },
//   {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true
//   },
//   {
//     id: 3,
//     text: 'Dentist appointment',
//     isCompleted: false
//   }
// ];

// const { info } = require("autoprefixer")

// // for(let number of todos) {
// //   console.log(number.id)
// // }
// const todoCompleted = todos.filter(function(todo){
//   return todo.isCompleted === true;
// }).map(function(todo){
//   return todo.text;
// });


// console.log(todoCompleted);


// Conditionals
// const x = 10;
// if(x===10) {
//   console.log('x is 10');
// } else if (x > 10) {
//   console.log('x is greater than 10');
// }else{
//   console.log('x is less than 10');
// }

// const name = prompt('whats your name?');
// if (name == 'Costya') {
//   alert('Wow such a coincidence, I m Costya too');
// }else {
//   alert('go nd fuck yourself');
// }
// const sign = prompt("What's your sign?");

// if (sign.toLowerCase() == "scorpio") {
//   console.log("Wow! I'm a Scorpio too!");
// }

// let x = 4;
// let y = 5;
// if(x>5){
//   if(y>10){
//     console.log('good');
//   }
// }
//    if (x==5){
//     if(y==10){
//       console.log('fine')
//     }
//   }
// if(x<5){
//   if (y<10){
//     console.log('not good')
//   }
// }  

// ternary operator

// const x = 15;
// const color = x>10 ? 'red' : 'blue';
// console.log(color)

// let x = 10;

// let color = x>10 ? 'red' : 'blue';

// switch(color) {
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   default:
//     console.log('color is neither red nor blue');
//     break;    
// }
// let year = prompt('what year is my birthday?');
// if (year > 1999) {
//   console.log('too late');
// } else if (year < 1999) {
//   console.log('too early');
// }
//   else {
//   console.log('right on the money!');
// }

// let drinkAllowed;
// let age = prompt('How old are you?');

// if (age=>18) {
//   drinkAllowed = true;
// } else {
//   drinkAllowed = false;
// }
// console.log(drinkAllowed)
// let age = 18;
// let drinkAllowed = age >=18 ? true : false;
//   console.log(drinkAllowed)

// let age = prompt('are you mature?');

// let message = (age<18) ? 'you r not mature yet' :
//               (age==18) ? 'u r 18 so ur mature already' :
//               (age<100) ? 'u r over 18 so of course u r mature' :
//               (age>100) ? 'such a weird age!' :
//               'blablabla'
//               console.log(message);

// let language = prompt('what is the official name of JavaScript?');
// if (language == 'ecmascript') {
//   console.log('Right!');
// } else {
//   console.log('Dont u know? ecmascript!');
// }

// const number = prompt('write any number');
// if (number > 0) {
//   console.log('1');
// } else if (number < 0) {
//   console.log('-1');
// } else if (number == 0) {
//   console.log('0');
// }

// let a = 4;
// let b = 1;
// let result = (a + b < 4) ? 'little' : 'much' ;
// console.log(result);

// let login = 'Директор';
// let message = (login == 'Сотрудник') ? 'Hello!' :
//               (login == 'Директор') ? 'Good day, sir!' :
//               (login == '') ? 'No loggin' :
//               '';

// console.log(message);

// let login = prompt('Write your loggin please!');
// if (login == 'student') {
//   console.log('HELLO STUDENT!');
// }else if (login == 'boss') {
//   console.log('HELLO MY DEAR BOSS!');
// } else if (login == '') {
//   console.log ('write your loggin plz!');
// } else {
//   console.log('try again!')
// }

// let answer = prompt('2 + 2 = ?');
// switch (answer) {
//   case '1':
//   case '2':
//   case '3':      
//     console.log('not enough');
//     break;
//   case '4': 
//     console.log('RIGHT!');
//     break;
//   case '5':
//   case '6':
//   case '7':
//   case '8':
//   case '9':  
//     console.log('THats too mush');
//     break;
//   case '10':
//     console.log('omg really?')  
//     break;
//   default:
//     console.log('are you fucking kidding me?')  
// }

// let browser = prompt('Let us know what browser you use and we will tell you if we support the one');
//   if (browser === 'Edge') {
//     console.log('Okay we do support Edge!');
//   }else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     console.log('We do support this one!');
//   } else {
//     console.log('We are not surre. YOu better contact us!');
//   }

// let browser = prompt('Let us know what browser you use and we will tell you if we support the one');
//   switch(browser) {
//     case 'Edge':
//       console.log('We supoort it');
//       break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//       console.log('we do support this one');
//       break;
    
//     default:
//       console.log('we r not really sure');  
//   }

// let number = prompt('Insert any number from 0 to 3')
//   switch(number) {
//     case '0':
//       console.log('u just inserted zero!');
//       break;
//     case '1':
//       console.log('U just inserted one');
//       break;
//     case '2':
//     case '3':
//       console.log('u just inserted 2 o 3');
//       break;
//     default:
//       console.log('try again');      

//   }


// Arrays

// let fruits = ['Apples'];
//   fruits.unshift('Banana');
//   fruits.push('Berries');
//   console.log(fruits);

// let styles = ['Jazz', 'Bluz'];
//   styles.push('Rock-n-Roll');
//   styles[1] = 'Classic';
//   console.log(styles.shift());
//   styles.unshift('Rap', 'Raggi');
//   console.log(styles);

// let arr = ['I', 'study', 'js', 'right', 'now'];
// let removed = arr.splice(1,2, 'dance');
//   console.log(removed);

// let arr = ['I', 'study', 'right', 'now'];
//   arr.splice(2, 0, 'one', 'hard', 'language');
//   console.log(arr);
// let arr = [1, 2, 5];

// // начиная с индекса -1 (перед последним элементом)
// // удалить 0 элементов,
// // затем вставить числа 3 и 4
// arr.splice(2, 0, 3, 4);

// alert( arr ); // 1,2,3,4,5

// ['I', 'wanna', 'eat'].forEach((item, index, array) => {
//   console.log(`${item} has position ${index} in ${array}`);
// });




// functions
// ----------------------------------------
// function addNums(num1, num2) {
//   console.log(num1 + num2);
// }
// addNums(2,2);

// function addNums(num1 = 1, num2 = 1) {
//   return num1 + num2;
// }
// console.log(addNums());

// const addNums = (num1 = 1, num2 = 1) => {
//   return num1 + num2;
// }
// console.log(addNums());

// const addNums = (num1, num2) => num1 + num2;
//   console.log(addNums(1, 1));

// const addNums = num1 => num1 + 5;
// console.log(addNums(5))

// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
//   this.getBirthYear = function() {
//     return this.dob.getFullYear();
//   }
//   this.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// const person1 = new Person('Costya', 'Danilov', '11-26-1999');
// const person2 = new Person('Ivan', 'Danilov', '01-19-1991');
// console.log(person2.getBirthYear());
// console.log(person2.getFullName());

// DOM
// const form = document.getElementById('my-form');
// const heading = document.querySelector('h1');
// console.log(form);
// console.log(heading);

// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello!';
// ul.children[1].innerText = 'Costya';
// ul.lastElementChild.innerHTML = '<h1>Hello!</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseout', (e) => {
//   e.preventDefault();
//   document.querySelector('#my-form').style.background = '#439004';
//   document.querySelector('body').classList.add('bg-dark');
//   document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello!</h1>'
// });

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();

//   if(nameInput.value === '' || emailInput.value === '') {
//     msg.classList.add('error');
//     msg.innerHTML = 'plz enter all the fiels!';

//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

//     userList.appendChild(li);

//     nameInput.value = '';
//     emailInput = '';
//   }
// }

// Variables

// var firstname;
// let lastname;
// const patronymic = 'Petrovich';

// let num = 5;
// let string = 'Hello world!';
// let bool = true;
// let und;
// let bigInt = 2345678934567n;
// // let symbol = symbol();

// console.log(typeof string);

// let bool = true;
// let num = false;
// console.log(5<10)

// let firstName = 'Vitalik';
// console.log(`Hello ${firstName}, how are you doing?`);

// let family = {
//   father: 'Petr',
//   mother: 'Nadya',
//   brothers: ['Ivan', 'Igor'],
//   sisters: ['Julia', 'Liuba'],
//   me: 'Costya',
//   together: false
// };
// family.new = ['we', 'love', 'each', 'other'];
// console.log(family);

// Operators

// console.log(2+2);
// console.log(5-2);
// console.log(9*9);
// console.log(10/5);
// console.log(10%2);
// console.log(10%3);
// let num = 3;
// console.log(num-3)

// let num = 5;
// console.log(num++);
// console.log(num)

// let string = '5';
// console.log(+string + +'10')

// let num = 5;
// let string = '5';
// let bool = true;
// console.log(num===string);
// console.log(num>=3);
// console.log(num<=3);
// console.log(num==string);
// console.log(num!=5);

/*let num = 5;
num = num +3;
num+=3;
num -= 2;
num *= 3;
num /= 5;
console.log(num)*/

// Conditions

// let rain = true;
// if(rain) {
//   console.log('take an umbrella!')
// } else {
//   console.log('no need to take an umbrella!')
// }

// let value = 'promocode';
// if () {
//   console.log('u got a discount!')
// } else {
//   console.log('no discount!')
// }

// Cycles

// for(let a=0; a<10; a++) {
//   console.log(a);
// }
// let a = 0;
// while (a < 5) {
//   a++
//   console.log(a);
// }

// let i = 2;
// do {
//   i++
//   console.log(i);
// } while(i>2 && i<4)

// functions

// function printConsole(arg) {
//   console.log('msg from function');
//   console.log(arg + 3);
// }
// printConsole(5);

// function numbers(arg) {
//   console.log(arg + 4);
// }
// numbers(2);
// console.log();

// DOM

// console.log(document);

// const head = document.getElementById('name');
// console.log(head);

// const heading = document.querySelector('h1');
// const id = document.querySelector('#name');
// const msg = document.querySelector('.msg');


// msg.classList.toggle('blue');
// console.log(msg.classList.contains('msg'));
// console.log(msg.className);


// const user = document.querySelector('.user');

// user.style.color = 'red';

// console.log(user);


// const heading = document.querySelector('h1');

// heading.style.textDecoration = 'line-through'
// console.log(heading.className);
// const item = document.querySelectorAll('.item');
// for (let i = 0; i < item.length; i++){
//   item[i].addEventListener('click', () => {
//     item[i].classList.toggle('through');
//   });
// }

// alert('lets find out your age!');

// const birthYear = prompt('what year were you born?');

// let currentYear = 2022;
// let age = currentYear - birthYear;
// console.log(`You are ${age}`);

// let count = 10;
// do {
//   console.log(count);
//   count++;
// } while(count>7);

// function printText(myName, myAge) {
  
//   return 'Hello! My name is:' + myName + ', my age is:' + myAge;
// }
// let myVar = printText('Costya', 22);
// console.log(myVar)

// let obj = {
//   name: 'Petr',
//   age: 22,
//   outputName() {
//     console.log('Hello! My name is:' + this.name);
//   }
// }
// console.log(obj.age);


// let arr = [1, 5, 2, 25, 16, 14, 49, 3, 1, 7]
// arr.sort(function(a, b) {
//   if(a===b) return 0
//   if(a>b) return 1
//   if(a<b) return -1
// });
// console.log(arr);

// function calculateAge(year) {
//   return 2022 - year
// }
// const myAge = calculateAge(1999);
// console.log(myAge);

// function calculateAge(year) {
//   return 2022 - year
// }
// function aboutPerson(name, year) {
//   const age = calculateAge(year)
//   if (age < 100){
//   console.log('Your name is ' + name + ' and you are ' + age);
//   } else if(age > 100) {
//     console.log('Your name is ' + name + ' and you are ' + age + ' and by the way you are very old!')
//   }
//   else {
//     console.log('you are weird!')
//   }
// }
// aboutPerson('Costya', 2025);

// function showMessage(from, text) {
//   from = '*' + from + '*';
//   console.log(from + ': ' + text);
// }
// let from = 'Ann';
// console.log(from);
// showMessage(from, 'Hello!');
// function showSms() {
//   let sms = 'hello im js';
//   console.log(sms)
// }
// showSms();

// const myName = 'Costya';
// function showSms() {
//   let sms = 'Hello ' + myName;
//   console.log(sms);
// }
// showSms();

// let myName = 'Costya';
// function showMessage() {
//   myName = 'Ivan';
//   let message = 'Hello ' + myName;
//   console.log(message);
// }

// console.log(myName);
// showMessage();
// console.log(myName);

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(22, 1));
// function sum(a, b) {
//   let messageSum= a + b;
//   console.log(messageSum);
// }
// sum(1, 1)

// function checkAge(age) {
//   age = prompt('u wanna buy ciggarettes? How old r u?');
//   if (age >= 18) {
//     alert('u got one');
//   } else {
//    alert('Did parents allow you?');
//   }
// }
// checkAge();

// function min() {
//   let a = prompt('Insert the first number');
//   let b = prompt('Insert the second number');
//   if (a>b){
//   console.log(a + ' is the greatest number of the two');
// } else if (a===b) {
//   console.log(a + ' and ' + b + ' are equal')
// }
// else {
//     console.log(b + ' is the greatest number of the two');
//   }
// }
// min();

// function pow(x,n) {
//   x = prompt('Insert the first number');
//   n = prompt('Insert the second number');
//   // console.log(x**n);
//   return x**n; 
//   return (x||n) < 1 ? 'Error';
// }
// console.log(pow());

// function sum(a, b) {
//   const math = a + b;
//   return math;
// }
// console.log(sum(1, 1));
// math = a + b;

// function nextInLine(arr, item) {

//   return item;

// }
// const testArr = [1, 2, 3, 4, 5];

// console.log('Before: ' + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log('After: ' + JSON.stringify(testArr));

// let greeting = function(name) {
//   console.log('Hello ' + name + ' !');
// }
// greeting('Costya');

// function multiply(number) {
//   return number * 2;
// }
// console.log(multiply(2));
// console.log(multiply(2) + multiply(2));



// function multiply(number) {
//   console.log(number * 2);
// }
// multiply(2);
// console.log(multiply(2) + multiply(2));

//  function pickRandomWord(words) {
//   return words[Math.floor(Math.random() * words.length)];
// };
// function generateRandomInsult() {
//   let randomBodyParts = ['Head', 'Leg', 'Arm', 'Neck'];
//   let randomAdjectives = ['Stupid', 'Ugly', 'Silly', 'Awkward', 'Awful'];
//   let randomInsult = ['Idiot', 'Bastard', 'Scumbag', 'Asshole', 'MotherFucker'];
//   let randomString = 'Your ' + pickRandomWord(randomBodyParts) + ' is ' + pickRandomWord(randomAdjectives) + ' because you are ' + pickRandomWord(randomInsult) + ' !!!';
//   return randomString;
// }
// console.log(generateRandomInsult());
// console.log(generateRandomInsult());
// console.log(generateRandomInsult());
// console.log(generateRandomInsult());
// console.log(generateRandomInsult());
// console.log(generateRandomInsult());
// console.log(generateRandomInsult());

// function fifthLetterOfName(name) {
//   if (name.length < 5) {
//     return 'Sorry. Your name you should contain at least 5 characters';
//   }
//   return 'The fifth letter of your name is: ' + name[4] + '.';
// };
// console.log(fifthLetterOfName('df'));

// let user = {
//   name: 'John',
//   age: '30'
// };
// console.log(user.name);

// user.isAdmin = true;
// delete user.age;

// console.log(user.age);

// let user = {};
// user['likes birds'] = true;
// console.log(user['likes birds']);
// delete ['likes birds']

// let user  = {
//   name: 'Costya',
//   age: '22',
//   city: 'Bender',
// }

// let key = prompt('What do you wanna know about the user?');
// console.log( user[key] );

// let key = 'name';
// console.log(user.key);

// let fruit = prompt('Which fruit to buy?', 'apple');

// let bag = {
//   [fruit]: 5,
// };

// console.log(bag.apple);

// let fruit = prompt('which fruit to buy', 'apple');
// let bag = {};

// bag[fruit] = 5;
// console.log(bag.apple);

// function makeUser(name, age){
//   return {
//     name: name,
//     age: age,
//   };
// }
// let user = makeUser('Costya', 22);
// console.log(user.age);

// let user = {};

// console.log( user.noSuchProperty === undefined );

// let user = {
//   name: 'Costya',
//   age: 22,
// };

// console.log('name' in user);
// console.log('agee' in user);
// let a = user.name;
// console.log(a);

// let user = {
//   name: 'Costya',
//   age: 22,
// };

// for (let key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// let codes = {
//   '+49': 'Germany',
//   '+44': 'Great B',
//   '+552': 'Bender',
//   '+553': 'Tiraspol',
//   '+1': 'USA',
// }

// for (let key in codes) {
//   console.log(key);
// }

// let user = {
//   name: 'John',
// }
// user.surname = 'Smith';
// user.name = 'Pete'
// delete user.name;
// console.log(user.name);

// let obj = {
//   name: 'Costya',
// }

// function isEmpty(obj) {
//   for(let key in obj) {
//     return false;
//   } 
//     return true;
//   }
//   console.log(obj.key);

// let sum = salaries.John + salaries.Ann + salaries.Pete;
// console.log(sum);

// let salaries = {
//   John: 100,
//   Ann: 100,
//   Pete: 100
// };

// let sum = 0;
// for (let key in salaries) {
//   sum = sum + salaries[key];
// }
// console.log(sum);

// let obj = {
//   n: 2,
// };
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] = obj[key]*2;
//     }
//   }
// }
// multiplyNumeric(obj); 
// console.log(obj.n);

// let user = {
//   name: 'Costya',
//   age: 22,
// };

// let clone = {};

// for (let key in user) {
//   clone[key] = user[key];
// }
// clone.name = 'Ivan';

// console.log(clone.name);

// let user = {
//   name: 'Costya',
//   sizes: {
//     height: 180,
//     width: 45,
//   }
// };

// let clone = Object.assign({}, user);

// console.log(user.sizes === clone.sizes);
// user.sizes.width++;
// console.log(clone.sizes.width);

// const user = {
//   name: 'Costya',
// };

// user.name = 'Costa!!!'
// console.log(user.name);

// let user = {
//   name: 'Costya',
// };
// let admin = user;
// user = null;

// console.log(admin);

// let user = {
//   name: 'Costya',
//   age: 22,
// };

// user.sayHi = function() {
//   console.log('Hello!');
// }

// user.sayHi();

// let user = {

// };

// function sayHi() {
//   console.log('Hello');
// }

// user.sayHi = sayHi;

// user.sayHi();

// let user = {
//   name: 'Costya',
//   age: 22,
//   sayHi() {
//     console.log('Hello! ' + this.name);
//   }
// };

// user.sayHi();


// let user = {
//   name: 'Costya',
//   age: 22,
//   sayHi() {
//     console.log('Hello! ' + user.name);
//   }
// };

// user.sayHi();

// let user = {
//   name: 'John',
//   age: 30
// }
// user.sayHi = function () {
//   console.log('Hey!');
// };
// user.sayHi();

// let user = {
//   name: 'Costya',
// }
// user.age = 22;

// console.log(user);

// let user = {};

// function sayHi() {
//   console.log('Hey!');
// }

// user.sayHi = sayHi;

// console.log(user);

// let user;
// user = {
//   sayHi: function() {
//     console.log('Hello!');
//   }
// }
// console.log(user);

// let user;
// user = {
//   sayHi() {
//     console.log('Hey!');
//   }
// }

// let user = {
//   name: 'Costya',
//   sayHi() {
//     console.log(this.name);
//   }
// };  

// user.sayHi();

// let user = {
//   name: 'Costya',
//   age: 22,
//   sayHi() {
//     console.log(user.age);
//   }
// };
// user.sayHi();

// let user = {
//   name: 'Costya',
//   age: 22,
//   sayHi() {
//     console.log(this.name);
//   }
// };

// let admin = user;
// user = null;

// admin.sayHi();

// let user = {name: 'John'};
// let admin = {name: 'Admin'};

// function sayHi () {
//   console.log(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f();
// admin['f']();

// let user = {
//   name: 'Costya',
//   go: function() { console.log(this.name) }
// };
// (user.go)()


// let calculator = {
  
//   read() {
//     let a = +prompt('insert a');
//     let b = +prompt('insert b');
//   },
//   sum() {return a + b;},
//   mul() {return a * b;}
// }
// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );


// let ladder = {
  //   step: 0,
  //   up() {
    //    console.log(this.step++);
    //    console.log(this.step);
    //   },
    //   down() {
      //    console.log(this.step--);
      //   },
      //   showStep: function() {
        //     console.log( this.step );
        //   }
        // };
        
        // ladder.showStep()
        // ladder.up()
        
        
        // function BigUser() {
          //   this.name = 'Costya';
          //   return {name: 'Godzilaa'};
          // }
          
          // console.log( new BigUser().name );
          
          // function SmallUser() {
            //   this.name = 'Costya';
            //   return;
            // }
            // console.log( new SmallUser().name );
// let calc = {
//   read() {
//     this.a = +prompt('insert a');
//     this.b = +prompt('insert b');
// },
//   sum() { return this.a + this.b; },
//   mul() { return this.a * this.b; }
// }

// calc.read();
// console.log( calc.sum() );
// console.log( calc.mul() );


// function Calc() {
//   this.read = function() {
//     this.a = +prompt('insert a');
//     this.b = +prompt('insert b');
//   };
//   this.sum = function() {
//     return this.a + this.b;
//   };
//   this.mul = function() {
//     return this.a * this.b;
//   };
// }

// let calc = new Calc();
// calc.read();

// console.log( 'Sum=' + calc.sum() );
// console.log( 'Mul=' + calc.mul() );


// --------------------------------------------

// let button = document.getElementById('finish');

// button.addEventListener('click', checkTest);
// function checkTest() {
//   let result = 0;

//   let answerOne = document.getElementById('q1').value;
//   if (answerOne === '4') {
//     result ++;
//   }
//   let answerTwo = document.getElementById('q2').value;
//   if (answerTwo === '6') {
//     result ++;
//   }
//   let answerThree = document.getElementById('q3').value;
//   if (answerThree === '10') {
//     result ++;
//   }
//   let answerFour = document.getElementById('q4').value;
//   if (answerFour === '-1') {
//     result ++;
//   }
//   let answerFive = document.getElementById('q5').value;
//   if (answerFive === '1') {
//     result ++;
//   }
//   alert('the quantity of the right answers: ' + result);
// }

// alert('щелкни "OK" чтоб начать игру')
// alert('давай посмотрим как хорошо ты меня знаешь(щелкай ок)')

// let btn = document.getElementById('btn');
// btn.addEventListener('click', finish);
// function finish() {
//   let outcome = 0;

//   let qOne = document.getElementById('q1').value;
//   if (qOne === '22') {
//     outcome++;
//   }
  
//   let qTwo = document.getElementById('q2').value;
//   if (qTwo === 'Costya') {
//     outcome++;
//   }

//   let qThree = document.getElementById('q3').value;
//   if (qThree === 'Danilov') {
//     outcome++;
//   }

//   let qFour = document.getElementById('q4').value;
//   if (qFour === '7') {
//     outcome++;
//   } 

//   alert('the quantity of the right answers is: ' + outcome)

//   function aplouse() {
//     if (outcome === 4) {
//       alert('You guessed all of the answers!')
//     } else{
//       alert('not good!')
//     }
//   }
//   aplouse()
// }


// let user = {};

// console.log(user.adress.street);

// let html = document.querySelector('.elem').innerHTML;

// let user = {};

// console.log(user.address ? user.address.street : undefined);

// let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;

// let user = {};

// alert(user.address && user.address.street && user.address.street.name);

// let user = {};

// console.log(user?.adress?.street);

// let html = document.querySelector('.elem')?.innerHTML;

// let user = null;

// console.log( user?.address );
// console.log( user?.address.street);

// let user = null;
// let x = 0;

// user?.sayHi(x++);

// console.log(user);

// let userAdmin = {
//   admin() {
//     console.log('I am Admin');
//   }
// };

// let userGuest = {};

// userAdmin.admin?.();
// userGuest.admin?.();

// let key = 'firstName';

// let user1 = {
//   firstName: 'Costya'
// };

// let user2 = null;

// console.log( user1?.[key] );
// console.log( user2?.[key] );

// delete user1?.[key];
// console.log(user1?.[key]);

// let family = {
//   mom: 'Nadya',
//   dad: 'Petr'
// }
// family.son = 'Costya';
// console.log(family);

// const person = {
//   name: 'Alex',
//   age: 22,
//   toString: null,
//   valueOf: null
// }

// const personList = {}
// personList[person] = 'Odessa'
// console.log(personList);


// let person = {
//   name: 'Costya',
//   sayHi: function() {
//     console.log('Hello, friend!');
//   }
// };

// person.sayHi();

// let string = "Hello, brother!";

// console.log( string.toUpperCase() );

// let name = 'Costya';

// console.log( name.toUpperCase() );

// let number = 1.123456;

// console.log(number.toFixed(3));

// console.log(typeof 1);
// console.log( typeof new Number(0) );

// let zero = new Number(0);

// if(zero) {
//   console.log('zero is true');
// }

// let num = Number('123');

// console.log(num);
// console.log(typeof num);

// let str = 'Hi';
// str.test = 5;

// console.log(str.test);

// let billion = 1e17;

// console.log(7.3e9);
// let ms = 0.000001;
// console.log(ms);
// let ms = 1e-6;
// console.log(ms);

// console.log(0xff);

// let num = 1.23456;
// console.log(Math.floor(num * 100)/100);

// let num = 12.34;
// console.log( num.toFixed(1) );

// let num = 12.39;
// console.log( num.toFixed(1) );

// let num = 12.34;
// console.log( num.toFixed(5) );

// console.log(1e20345);

// console.log(0.1 + 0.2 == 0.3);

// console.log(0.1.toFixed(20));

// let sum = 0.1 + 0.2;
// console.log( +sum.toFixed(1) );

// console.log( NaN === NaN );

// console.log( isNaN(NaN) );

// console.log( isFinite('15') );
// console.log( isFinite('str') ); 
// console.log(Object.is(0.1 + 0.1, 0.2)); 

// console.log( +'100px' );

// console.log( parseInt('100px') );
// console.log( parseFloat('12.5em') );
// console.log( parseInt('12.5em') );
// console.log( parseFloat('12.5.5') );
// console.log( parseInt('kl100') );

// console.log( Math.random() );
// console.log( Math.max(1,2,3,5,6) );
// console.log( Math.min(1,2,3,5,6) );

// console.log( Math.pow(2, 4));

// let a = +prompt('insert a', '');
// let b = +prompt('insert b', '');
// console.log( a + b );

// console.log( 4.35.toFixed(1) );

// function readNumber() {
//   let realNumber;
//   do{
//     realNumber = +prompt('insert a number!')
//   } while( !isFinite(realNumber) )

//   if(realNumber === null || realNumber === '') {
//     return null;
//   }
//   return +realNumber;
// }

// console.log(`your number is: ${readNumber()}`);

// function random(min, max) {
//   min =  Math.random(parseFloat());
//   max =  Math.random(parseFloat());
//   return min ;
  
// }
// console.log(random(2, 4));

// let i = 0;
// while (i < 11) {
//   i += 0.2;
//   if (i > 9.8 && i < 10.2) alert(i);
// }

// function sum(a, b) {
//   return a + b;
// }
// console.log(`1 + 2 = ${sum(1,2)}`);

// let guestList = `Guests:
// * John
// * Pete
// * Mary`;
// console.log(guestList);

// let guestList = 'Guests: \n*Costya \n*Vanya \n*Igor'
// console.log(guestList);

// let str1 = 'Hello \nWorld!';
// let str2 = `Hello 
// World!`
// console.log(str1);
// console.log(str2);
// console.log(str1 === str2);

// console.log('\u{1F60F}');

// console.log('I\'m Costya');
// console.log(`I'm Costya`);
// console.log(`I'm Costya and this is a backslash \\`);

// console.log('My length is'.length);

// let string = `Hello!`;

// console.log( string[0] );
// console.log( string.charAt(0));
// console.log( string[string.length - 1] );

// for(let char of 'Hello!') {
//   console.log(char);
// }

// let string = 'Hi!';

// string = 'h' + string[1];
// console.log(string);

// console.log('interfase'.toUpperCase() );
// console.log('INterface'.toLowerCase() );

// console.log('INTERFACE'[2].toLowerCase() );

// let string = 'i see everything';
// console.log(string.indexOf('see'));

// let string = 'Ослик Иа-Иа посмотрел на виадук';

// let target = 'Иа';
// let pos = 0;

// while (true) {
//   let foundPos = string.indexOf(target, pos);
//   if(foundPos == -1) break;

//   console.log( `Found: ${foundPos}` );
//   pos = foundPos + 1;
// }

// let string = 'Ослик Иа Иа посмотрел на виадук';
// console.log(string.indexOf('Иа', 7));

// let string = 'Costya';

// console.log(string.indexOf('a'));



// ----------------------------------
// let string = 'My mother is mad at me';
// console.log(string.indexOf('m', 2));

// let str = 'Widget id with id';
// console.log( str.indexOf('id', 1) ) 
// ----------------------------------

// console.log(~-5);

// let string = 'Widget Widget Widget Widget';
// // console.log(~string.indexOf('Widget'));
// if(~string.indexOf('Widget')) {
//   console.log('Совп есть');
// }

// let string = 'Widget with id';
// console.log(string.includes('id'));

// console.log('Widget with id'.includes('Widget'));

// console.log('Widget'.includes('id', 5));

// console.log('Constantin'.startsWith('Con'));
// console.log('Constantin'.endsWith('Tin'));

// let string = 'Costya';
// console.log(string.substr(2, 3));

// console.log(string.slice(0, 3));
// console.log(string.slice(0, 1));
// console.log(string.slice(4));

// console.log('a' > 'J');

// let string = '';

// for(let i = 65; i<=220; i++) {
//   // string = string + String.fromCodePoint(i);
//   string+=String.fromCodePoint(i);
// }
// console.log(string);

// console.log('a'.localeCompare('Z'));

// function ucFirst(string) {
//   string = string[0].toUpperCase() + string.slice(1);
//   return string;
// }
// console.log(ucFirst('costya'));

// function checkSpam(string) {
//   string = string.toLowerCase();
//   // return (string.includes('viagra') || string.includes('xxx'));
//   if (string.includes('viagra') || string.includes('xxx')) {
//     return true;
//   } else {
//     return false;
//   }
  
// } 
// console.log(checkSpam('viaGraa')); 

// function truncate(str, maxlength) {
//   if(str.length > maxlength) {
//     return str.slice(0, maxlength) + '...';
//   } else {
//     return str;
//   }
// }
// console.log(truncate('Hello', 2)); 

// function truncate(string, maxStringLength) {
//   if(string.length > maxStringLength) {
//     return string.slice(0, maxStringLength) + '...';
//   } else {
//     return string;
//   }
// }

// console.log(truncate('I wanna sleep so baaaaddddd', 20));

// function extractCurrencyValue(string) {
//   return +string.slice(1)
// }
// console.log(extractCurrencyValue('*120'));

// function extractCurrencyValue(string) {
//   let newNumber = '';
//   for(num of string) {
//     if (isFinite(num)) {
//       newNumber = newNumber + num
//     }
//   }
//   return +newNumber;
// }
// console.log(extractCurrencyValue('^&*320^&5678'));

// let fruits = ['Apple', 'Orange', 'Pear'];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// fruits[2] = 'Beetroot';
// console.log(fruits[2]);
// fruits[3] = 'Lemon';
// console.log(fruits[3]);

// let fruits = ['Apple', 'Orange', 'Pear'];

// console.log(fruits);

// let arr = ['apple', {name: 'Costya'}, function() {console.log('hey!');}];

// console.log(arr[1].name);
// arr[2]();

// let fruits = ['Apple', 'Orange', 'Plum'];
// // console.log(fruits[fruits.length - 1]);
// console.log(fruits.at(-1));

// let fruits = ['Apple', 'Orange', 'Pear'];
// console.log( fruits.pop() );
// console.log(fruits);
// console.log( fruits.push('Pear') );
// console.log(fruits);

// let fruits = ['Apple', 'Orange', 'Pear'];
// console.log( fruits.shift() );
// console.log( fruits );
// console.log( fruits.unshift('Apple') );
// console.log( fruits );

// let fruits = ['Apple', 'Orange', 'Pear'];
// fruits.unshift('begining');
// fruits.push('end')
// console.log(fruits);

// let fruits = ['Banana']
// let arr = fruits;
// console.log( arr === fruits );
// arr.push('Pear');
// console.log( fruits );

// let fruits = ['Apple', 'Orange', 'Pear'];
// for(let i = 0; i<fruits.length; i++) {
//   console.log(fruits[i]);
// }

// let fruits = ['Apple', 'Orange', 'Pear'];
// for ( fruit of fruits ) {
//   console.log(fruit);
// }

// let fruits = ['Apple', 'Orange', 'Pear'];
// for (let key in fruits) {
//   console.log(fruits[key]);
// }

// let fruits = ['Apple', 'Orange', 'Pear'];
// fruits.length = 2;
// console.log(fruits);
// fruits.length = 3;
// console.log(fruits[1]);

// let arr = new Array(2);
// console.log( arr[0] );
// console.log( arr.length );

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[2][2]);

// let arr = [1, 2, 3];

// console.log( arr );
// console.log( String(arr) === '1,2,3' );

// console.log( [] + 1);
// console.log( [1] + 1);
// console.log( [1, 2] + 1);

// let letters = ['a', 'b', 'c'];

// let alphabet = letters;
// alphabet.push('d');
// console.log(letters.length);

// let styles = ['Джаз', 'Блюз'];

// styles.push('рок-н-ролл');
// styles[1] = 'Классика';
// console.log(styles.shift());
// styles.unshift('Рэп', 'Рэгги');

// console.log(styles);

// let styles = ['0', '1', '2', '3', '4', '5', '5'];
// styles[Math.floor((styles.length) / 2)] = 'number';
// console.log(styles);

// let arr = ['a', 'b'];

// arr.push(function() {
//   console.log(this);
// })

// arr[2]();

// function sumInput() {
//   let arr = [];

//   while (true) {
//     let value = prompt('insert a number!')
//     if(value === '' || value === null || !isFinite(value)) {
//       break;
//     } else {
//       arr.push(+value);
//     }
//   }
//   let sum = 0;
//   for (let i = 0; i<arr.length; i++) {
//     sum = sum + arr[i];
//   }


//   // for(let number of arr) {
//   //   sum = sum + number;
//   // }
//   return sum;
// } 
// console.log( sumInput() );

// let arr = ['1', '2', '3'];

// for (let i = 0; i<arr.length; i++) {
//   console.log(arr[i]);
// }

// function sumInput() {
//   let array = [];

//   while (true) {
//     let number = prompt('insert a number')
//     if (number === '' || number === null || !Number(number)) {break}
//     array.push(+number)
//   }

//   let sum = 0;
//   for (let i=0; i<array.length; i++) {
//     sum = sum + array[i]
//   }
//   return sum;
// }
// console.log(sumInput());

// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let partialSum = 0;

//   for (let item of arr) {
//     partialSum = partialSum + item;
//     maxSum = Math.max(maxSum, partialSum);
//     if (partialSum < 0) partialSum = 0;
//   }
//   return maxSum;
// }

// console.log(getMaxSubSum([1, 2, 3, 4, 5])); 


// let arr = ['I', 'go', 'home'];
// delete arr[1];
// console.log(arr[1]);
// console.log(arr.length);

// let arr = ['I', 'learn', 'js'];

// arr.splice(1, 1)
// console.log(arr);

// let arr = ['Я', 'изучаю', 'js', 'прямо', 'сейчас'];
// arr.splice(0, 3, "let's", 'dance')
// console.log(arr);

// let arr = ['Я', 'изучаю', 'js', 'прямо', 'сейчас'];
// let removed = arr.splice(0, 2);
// console.log(removed);

// let arr = ['Я', 'изучаю', 'js', 'прямо', 'сейчас'];
// arr.splice(2, 0, 'hard', 'language');
// console.log(arr);

// let arr = ['t', 'e', 's', 't'];

// console.log(arr.slice(1, 3));
// console.log(arr.slice(-2));

// let arr = [1, 2];
// console.log(arr.concat([3, 4]));
// console.log(arr.concat([3, 4],[5, 6]));
// console.log(arr. concat([3, 4], 5, 6));

// let arr = [1, 2];
// let arraylike = {
//   0: 'smth',
//   length: 1
// };
// console.log(arr.concat(arraylike));

// ['one', 'two', 'three'].forEach(alert)
// ['one', 'two', 'three'].forEach( (item, index, array) => {
//   console.log(`${item} has a position ${index} in ${array}`);
// })

// ['one', 'two', 'three'].forEach(( item, index, array) => {
//   console.log(`${item} has a position ${index} in ${array}`);
// })

// let arr = [1, 0, false];

// console.log(arr.indexOf(0));
// console.log(arr.indexOf(false));
// console.log(arr.indexOf(null));

// console.log(arr.includes(1));

// let users = [
//   {id: 1, name: 'Vasya'},
//   {id: 2, name: 'Petr'},
//   {id: 3, name: 'Masha'}
// ];
// let user = users.find(item => item.id == 1);
// console.log(user.name);

// let users = [
//   {id: 1, name: 'Vasya'},
//   {id: 2, name: 'Petr'},
//   {id: 3, name: 'Masha'}
// ];

// let someUsers = users.filter(item => item.id < 3);
// console.log(someUsers.length);

// let lengths = ['costa', 'vana', 'igor'].map(item => item.length);
// console.log(lengths);

// function compareNumeric(a, b) {
//   if(a>b) return 1;
//   if(a==b) return 0;
//   if(a<b) return -1
// }
// let arr = [1, 2, 3, 7, 4];
// arr.sort(compareNumeric);
// console.log(arr);


// let arr = [1, 2, 15];
// arr.sort( (a, b) => a - b );
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);

// let names = 'Vasya, Petr, Masha';
// let arr = names.split(', ');
// for(let name of arr) {
//   console.log(`this sms will be received by ${name}`);
// }

// let arr = 'Vasya, Petr, Sasha'.split(', ', 2);
// console.log(arr);

// let str = 'test';
// console.log(str.split(''));

// let arr = ['Vasya', 'Petr', 'Masha'];
// let str = arr.join(', ')
// console.log(str);

// let arr = [1, 2, 3, 4, 5];
// let result = arr. reduce((sum, current) => sum + current, 0);
// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum + current);
// console.log(result);

// console.log(typeof {});
// console.log(typeof []);

// console.log(Array.isArray([]));
// console.log(Array.isArray({}));

// let arr = [1, 2, 3, 4, 5];

// let sum = 0;
// for(let i = 0; i<arr.length; i++) {
//   sum = sum + arr[i]
// }
// console.log(sum);

// let arr = [1, 2, 3, 4, 5];
// let b = arr.reduce( (prev, item, index) => {
//   return prev + item;
// }, 0)
// console.log(b);

// let arr = [1,2,3,5,7,3,9,444,7];
// let max = arr[0];
// for(let i = 0; i<arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);


// let arr = [1,2,3,5,7,3,9,444,7];

// let c = arr.reduce( (prev, item) => {
//   if(prev < item) {
//     return item;
//   }
//   else {
//     return prev;
//   }
// }, arr[0]);
// console.log(c);

// const people = [
//   {name: 'Costya', age: 22, budget: 6000},
//   {name: 'Ivan', age: 29, budget: 5000},
//   {name: 'Igor', age: 28, budget: 4000},
//   {name: 'Petr', age: 52, budget: 3000},
//   {name: 'Nadya', age: 51, budget: 2000},
//   {name: 'Julia', age: 15, budget: 1000},
// ]

// for(let i = 0; i<people.length; i++) {
//   console.log(people[i]);
// }
// for(let person of people) {
//   console.log(person);
// }

// people.forEach(function(person, index, pplArr) {
//   console.log(person);
// })

// people.forEach( person => console.log(person));

// const newPpl = people.map( person => `${person.age * 2}`)

// console.log(newPpl);
// const adults = [];
// for(let i = 0; i<people.length; i++) {
//   if (people[i].age >= 18) {
//     adults.push(people[i])
//   }
// }
// console.log(adults);

// const adults = people.filter(person => person.age >= 18);
// console.log(adults);

// let sum = 0;
// for(let i = 0; i<people.length; i++) {
//   sum += people[i].budget;
// }
// console.log(sum);

// let sum = people.reduce( (prev, item) => prev + item.budget, 0)
// console.log(sum);

// const igor = peopl
// const igorIndex = people.findIndex( person => person.name === 'Igor');
// console.log(igorIndex);

// const sum = people
//   .filter( person => person.budget > 3000)
//   .map(person => {
//     return {
//       info: `${person.name} (${person.age})`,
//       budget: person.budget,
//     }
//   })
//   .reduce( (sum, person) => sum + person.budget, 0)

//   console.log(sum);


// let names = 'Costya, Petr, Masha';
// let arr = names.split(', ');
// for(let name of arr) {
//   console.log(`sms will be received by ${name}`);
// }

// let arr = ['Costya', 'Petr', 'Vanya'];
// let str = arr.join(', ');
// console.log(typeof str);

// function camelize(str) {
//   return str
//   .split('-')
//   .map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1) )
//   .join('');
// }
// console.log(camelize('string-mother-again'));

// function camelize(str) {
//   return str
//   .split('-')
//   .map( (word, index) => (index === 0) ? word : word[0].toUpperCase() + word.slice(1) )
//   .join('')
// }
// //  'border-left-width' ----- ['border', 'left', 'width']------- 
// console.log(camelize('border-left-width'));


// let arr = [1, 2, 54, 86, 45,3,6,364,2,5];

// function filterRange(a, b) {
  
//   return arr.filter( item => (a < item && item < b));
// }

// console.log(filterRange(1, 46 ));  
// console.log(arr);

// let users = [
//   {id: 1, name: "Вася"},
//   {id: 2, name: "Петя"},
//   {id: 3, name: "Маша"}
// ];

// let someUsers = users.filter(item => item.id < 3);

// console.log((someUsers));


// function filterRangeInPlace(arr, a, b) {
//   for(let i=0; i<arr.length; i++) {
//     let value = arr[i];
    
//     if(value < a || value > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// filterRangeInPlace(arr, 3, 7)
// console.log(arr);

// function compareNumeric(a, b) {
//   if(a>b) return -1;
//   if(a==b) return 0;
//   if(a<b) return 1;
// }
// let arr = [1,2,15,3,1,67]
// arr.sort(compareNumeric);
// console.log(arr);

// let arr = [5, 2, 1, -10, 8];
// function sortArr(a, b) {
//   if(a>b) return -1;
//   if(a==b) return 0;
//   if(a<b) return 1
// }
// arr.sort(sortArr)
// console.log(arr);

// let arr = [5, 2, 1, -10, 8];
// arr.sort( (a, b) => {
//   console.log(a + '<>' + b);
// })

// let arr = [5, 2, 1, -10, 8];
// arr.sort( (a, b) => a-b);
// // arr.reverse();
// console.log(arr);


// function copySorted(arr) {
//   return arr.slice().sort();
// }
// let arr = ['HTML', 'JavaScript', 'CSS'];
// let sorted = copySorted(arr);
// console.log(sorted);

// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);

// let user = [
//   {name: 'Vasya'},
//   {name: 'Petr'},
//   {name: 'Masha'},
// ];
// let names = user.map( (item) => item.name);
// console.log(names);

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];
// console.log(users[0]);
// let names = users.map(item => item.name);

// console.log(names); // Вася, Петя, Маша

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map( item => item.name);
// console.log(names);

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map( user => {
//   return (
//     {
//       fullName: `${user.name} ${user.surname}`,
//       id: `${user.id}`,
//     }
//   )
// }
// );
// console.log(usersMapped[0].fullName);
// console.log(usersMapped[0].id);

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// function sortByAge(arr) {
//   return arr.sort( (a, b) => a.age - b.age )
// }
// console.log(sortByAge(arr));

// let arr = [1, 2, 3];

// function shuffle(arr) {
//   return arr.sort( () => Math.random() - 0,5)
// }
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let kiril = { name: "Маша", age: 21 };
// let costya = { name: "Маша", age: 22 };


// let arr = [ vasya, petya, masha, kiril, costya ];


// function getAverage(any) {
//   return Math.round (any.reduce((prev, item) => prev + item.age, 0) / arr.length);
// }
// console.log(getAverage(arr)); 

// function unique(arr) {
//   result = [];
//   for(let item of arr) {
//     if(!result.includes(item)) {
//       result.push(item)
//     }
//   }
//   return result;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// console.log(unique(strings));

// let map = new Map();

// map.set('1', 'str1');
// map.set(1, 'num1');
// map.set(true, 'bool1');

// console.log(map.get(1));
// console.log(map.get('1'));

// console.log(map.size);

// let costya = {name: 'Costya'};
// let visitsCountMap = new Map();
// visitsCountMap.set(costya, 123);
// console.log(visitsCountMap.get(costya));

// let john = {name: 'John'};
// let visitsCountObj = {};
// visitsCountObj[john] = 123;
// console.log(visitsCountObj['[object Object]']);

// let recipeMap = new Map([
//   ['pickle', 500],
//   ['tomato', 350],
//   ['onion', 50]
// ]);

// for (let veg of recipeMap.keys()) {
//   console.log(veg);
// }

// for (let amount of recipeMap.values()) {
//   console.log(amount);
// }

// for (let entry of recipeMap.entries()) {
//   console.log(entry);
// }


// let recipeMap = new Map([
//   ['pickle', 500],
//   ['tomato', 350],
//   ['onion', 50]
// ]);


// recipeMap.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// })

// let map = new Map([
//   ['1', 'str1'],
//   [1, 'num1'],
//   [true, 'bool1']
// ]);

// console.log(map.get('1'));

// let obj = {
//   name: 'John',
//   age: 30,
// };

// let map = new Map(Object.entries(obj));
// console.log(map);

// let prices = Object.fromEntries([
//   ['banana', 1],
//   ['orange', 2],
//   ['meat', 4]
// ]);
// console.log(prices);
// console.log(prices.orange);

// let map = new Map();
//   map.set('banana', 1);
//   map.set('orange', 2);
//   map.set('meat', 4);

// let obj = Object.fromEntries(map) ;
// console.log(obj.banana); 

// let john = {name: 'John'};
// let pete = {name: 'Pete'};
// let mary = {name: 'Mary'};

// let set = new Set();

// set.add(john);
// set.add(john);
// set.add(pete);
// set.add(pete);
// set.add(mary);
// set.add(mary);
// set.add(mary);

// console.log(set.size);
// for (let user of set) {
//   console.log(user.name);
// }

// let set = new Set(['item1', 'item2', 'item3']);
// // for (let val of set) {
// //   console.log(val);
// // }
// set.forEach((val,valAgain,set) => {
//   console.log(val);
// });

// function unique(arr) {
//   arr = [];
//   let set = new Set();
//   for (let value of arr) {
//     if(!set.includes(value)) {
//       arr.add(value)
//     }
//   }
//   return set;
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(values));

// function unique(arr) {
//   return Array.from(new Set(arr));
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// console.log(unique(values));

// const obj = {
//   name: 'Costya',
//   age: 22,
//   job: 'fullStackDev!',
// }
// const arr = [
//   ['name', 'Costya'],
//   ['age', 22],
//   ['job', 'fullStackDev!!'],
// ]

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(arr));

// const map = new Map(arr);
// map
//   .set('newField', 42)
//   .set(obj, 'val of obj')

  // // map.delete('job')
  // console.log(map.has('job'));
  // console.log(map.size);
  // map.clear()
  // console.log(map.size);


  // const obj = {
  //   name: 'Costya',
  //   age: 22,
  //   job: 'fullStackDev!',
  // }

  // const arr = [
  //   ['name', 'Costya'],
  //   ['age', 22],
  //   ['job', 'fullStackDev!!'],
  // ]

  // const map = new Map(arr);
  // map
  //   .set('newField', 42)
  //   .set(obj, 'val of obj')
// for (let [key, value] of map) {
//   console.log(key, value);
// }   
//  for (let val of map.values()) {
//    console.log(val);
//  }

// for (let key of map.keys()) {
//   console.log(key);
// }

// map.forEach( (value, key) => {
//   console.log(value, key);
// })

// const obj = {
//   name: 'Costya',
//   age: 22,
//   job: 'fullStackDev!',
// }

// const arr = [
//   ['name', 'Costya'],
//   ['age', 22],
//   ['job', 'fullStackDev!!'],
// ]

// const map = new Map(arr);
// map
//   .set('newField', 42)
//   .set(obj, 'val of obj')

// const array = [...map]
// console.log(array);  

// const array = Array.from(map)
// const mapObj = Object.fromEntries(map)
// console.log(mapObj);  

// const users = [
//   {name: 'Elena'},
//   {name: 'Alex'},
//   {name: 'Irina'},
// ]

// const visits = new Map()

// visits
//   .set(users[0], new Date())
//   .set(users[1], new Date(new Date().getTime() + 1000 * 60))
//   .set(users[2], new Date(new Date().getTime() + 10000 * 60))

// function lastVisit(user) {
//   return visits.get(user)
// }  

// console.log(lastVisit(users[0]));

const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6])

set.add(10).add(20).add(30).add(20)
// console.log(set);

// console.log(set.has(0));
// console.log(set.size);
// console.log(set.delete(1)); 
// console.log(set.size);
// console.log(set.clear());
// console.log(set);

// console.log(set.entries());
// for (let key of set) {
//   console.log(key);
// }

// function uniqueVal(array) {
//   return Array.from(new Set(array))
// }
// console.log(uniqueVal([1,2,3,4,5,7,4,3,2,3,45,6,6,3,3,32,4,56,5]));

// function unique(arr) {
//   return result = Array.from(new Set(arr))
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// let num = [1,1,1,1,1,1,1,1,1,1,1,1,1]
// console.log(unique(num));

// function aclean(arr) {
//   let result = [];
//   let set = new Set(arr)
//   for(let value of set) {
//     if (!set.has(arr[value])) {
//       set.add(value)
//     }
//   }
//   return result;
// }

// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     let sorted = word.toLowerCase().split('').sort().join('');
//     map.set(sorted, word);
//   }
//   return Array.from(map.values());
// }
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log(aclean(arr));

// function aclean(arr) {
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     let sorted = arr[i].toLowerCase().split('').sort().join('');
//     obj[sorted] = arr[i];
//   }
//   return Object.values(obj);
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log(aclean(arr));

// let map = new Map();
// map.set('name', 'John');
// let keys = map.keys();
// // keys.push('more')
// console.log(map);

// let map = new Map();
// map.set('name', 'John');
// let keys = Array.from(map.keys())
// keys.push('more')
// console.log(keys);
// console.log(map.has(''));

// console.log(Array.from(['foo']));
// console.log(Array.from([1, 2, 3], x => x+x));
// let num = Array.from('foo');
// console.log(typeof num);

// let obj = {name: 'Costya',
// age: 22,
// city: 'Bender',}
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// let user = {
//   name: 'John',
//   age: 30,
// };

// for (let value of Object.values(user)) {
//   console.log(value);
// }

// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };
// let doublePrices = Object.fromEntries(
//   Object.entries(prices).map( ([key, value]) => [key, value * 2]));

// console.log(doublePrices.meat);

// function sumSalaries(salaries) {
//   let result = 0;
//   for (let salary of Object.values(salaries)) {
//     result = result + salary;
//   }
//   return result;
// }

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250,
// }
// console.log(sumSalaries(salaries));

// function count(obj) {
//   // let arr = Object.keys(obj) // ['john', 30]
//   // // obj = [];
//   // // for (let quantity of arr) {
//   // //   obj.push(quantity)
//   // // }
//   // return arr.length;
//   return Object.keys(obj).length
// }

// let user = {
//   name: 'John',
//   age: 30,
//   age1: 30,
//   age3: 30,
// };

// console.log(count(user));

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// function sumSalaries(arr) {
//   return Object.values(arr).reduce( (prev, sum) => prev+sum, 0)
// }
// console.log(sumSalaries(salaries));


// function sumSalaries(arr) {
//   let convertToArr = Object.keys(arr); // ["John", "Pete", "Mary"]
//   return convertToArr.join('')
// }
// console.log(sumSalaries(salaries));

// let arr = ['Costya', 'Vanya']
// let [onePerson, secondPerson] = arr;
// console.log(onePerson);
// console.log(secondPerson);

// let [firstName, surname] = 'Costya Danilov'.split(' ')
// console.log(firstName);
// console.log(surname);

// let firstName = arr[0];
// let surname = arr[1];
// console.log(arr);

// let [fN,,, sN] = ['a', 'b', 'c', 'd']
// console.log(sN);

// let [a, b, c] = 'abc';
// console.log(c);

// let [one, two, three] = [1, 2, 3];
// console.log(two);

// let user = {};
// [user.name, user.surname] = 'Costya Danilov'.split(' ');
// console.log(user);

// let user = {
//   name: "John",
//   age: 30
// };

// for (let [keys, values] of Object.entries(user)) {
//   console.log(`${keys}: ${values}`);
// }

// let user = new Map();
//     user.set('name', 'John');
//     user.set('age', '30')
// for(let [key, value] of user) {
//   console.log(`${key}: ${value}`);
// }    


// console.log(user);
// console.log(typeof user);
// let user = new Map();
// console.log(user);

// let arr = ['Costya', 'Danilov'];
// let [firstName, surname] = arr;

// let[firstName, surname] = 'Costya Danilov'.split(' ');

// let [firstName,, surname] = ['Costya', 'nobody', 'Danilov', 'brodilov'];
// console.log(surname);

// let [a, b, c] = 'abc'
// console.log(b);

// let [one, two, three] = [1, 2, 3]
// console.log(two);

// let obj = {};
// [obj.name, obj.surname] = 'Costya Danilov'.split(' ');
// console.log(obj.name);

// let user = {
//   name: 'Costya',
//   age: 22,
// };
// for (let [key, value] of Object.entries(user)) {
//   console.log(`${key}: ${value}`);
// }

// let user = new Map();
//     user.set('name', 'John');
//     user.set('age', '30');
//     console.log(user);

// for (let [key, value] of user) {
//   console.log(`${key}: ${value}`);
// }    

// let user = new Map([['name', 'John'], ['age' ,'30']]);

//     console.log(user);

// let [name1, name2, ...rest] = ['Costya', 'Danilov', 'successful', 'developer'];
// console.log(rest[0]);
// console.log(rest[1]);
// console.log(rest.length);

// let [name = 'Guest', surname = 'Anon'] = ['Costya'];
// console.log(name);

// let [name = prompt('name?'), surname = prompt('surname?')] = ['Costya'];
// console.log(name);
// console.log(surname);

// let person = {
//   name: 'Costya',
//   surname: 'Danilov',
//   age: 22,
// }

// let {surname, age, name} = person;

// console.log(surname, name, age);

// let person = {
//   name: 'Costya',
//   surname: 'Danilov',
//   age: 22,
// }

// let {name: n, age: a, surname} = person;
// console.log(surname);

// let person = {
//   name: 'Costya',
// };

// let {name, height = 185, weight = 75} = person;
// console.log(weight);

// let person = {};

// let { name = prompt('name?'), surname = prompt('surname?') } = person;
// console.log(name);
// console.log(surname);

// let person = {
//   name: 'Costya',
// };
// let {name: n = Costya, surname: s = prompt('whats your surname?'), age: a = prompt('how old r u?')} = person;
// console.log(n);
// console.log(s);
// console.log(a);

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// let {title, ...rest} = options;
// console.log(title);
// console.log(rest.height);

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// let {title, ...rest} = options;
// console.log(rest.height);

// let title, width, height;
// ({title: t, height: h, width: w} = {title: 'Menu', width: 200, height: 100});
// console.log(h);

// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// let {size: {width, height}, items: [item1, item2]} = options;
// console.log(width);
// console.log(height);
// console.log(item1);

// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };

// function showMenu({title = 'untitled', width = 200, height = 100, items = []}) {
//   console.log( `${title} ${width} ${height}` );
//   console.log( items );
// }
// showMenu(options)

// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };

// function showMenu({
//   title = 'Untitled',
//   width: w = 100,
//   height: h = 200,
//   items: [item1, item2],
// }) {
//   console.log( `${title} ${w} ${h}`);
//   console.log(item1);
//   console.log(item2);
// }
// showMenu(options)

// function showMenu( {title = 'Menu', width = 100, height = 200} = {} ) {
//   console.log( `${title} ${width} ${height}`);
  
// }
// showMenu()

// let user = {
//   name: "John",
//   years: 30
// };

// let {name, years: age, isAdmin = false} = user;;
// console.log(years);


// function topSalary(salaries) {
  //     let arrMax = [];
  
  //     for (let [name, salary] of Object.entries(salaries)) {
    //         if (![name, salary]) return null
    //         arrMax.push(salary)
    //       }
    
    //       return ( 
      //           'the highest salary in the company is:' + Math.max.apply(null, arrMax)
      //           );
      //       }
      
      //       console.log(topSalary(salaries)); 
      
      // function topSalary(salaries) {
        
        //   let max = 0;
        //   let maxName = null;
        
        //   for(let [name, salary] of Object.entries(salaries)) {
          //     if (salary > max) {
            //       max = salary;
            //       maxName = name;
            //     }
            //   }
            
            //   return maxName;
            // }
            // console.log(topSalary(salaries));

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250,
// };

// function topSalary(salaries) {

//   maxSalary = 0;
//   maxName = null;

//   for (let [name, salary] of Object.entries(salaries)) {
//     if (salary > maxSalary) {
//       maxSalary = salary;
//       maxName = name;
//     }
//   }
//   return 'the most paid worker of the company is: ' + maxName 
//           + ' and he makes: ' + maxSalary;
// }
// console.log(topSalary(salaries));

// let now = new Date();
// console.log(now);

// let jan01_1970 = new Date(0);
// console.log(jan01_1970);

// let jan02_1970 = new Date(24 * 3600 * 1000);
// console.log(jan02_1970);

// let Dec31_1969 = new Date(-24 * 3600 * 1000)
// console.log(Dec31_1969);

// let a = new Date(0)
// console.log(a);

// let date = new Date(2022,04,14,11,16,23);
// console.log(date);

// let date = new Date();
// console.log( date.getHours() );
// console.log( date.getUTCHours() );
// console.log( date.getTime() );
// 1652516982827

// console.log(new Date().getTimezoneOffset());

// let today = new Date();
// today.setHours(0,0,0,0);
// console.log(today);

// let date = new Date(2013, 0, 36)
// console.log(date);

// let date = new Date(2022, 04, 14);
// date.setDate(date.getDate() + 1);
// console.log(date);

// let date = new Date();
// date.setSeconds(date.getSeconds() + 70);
// console.log(date);

// let date = new Date();
// date.setDate(0);
// console.log(date);

// let date = new Date();
// console.log(+date);

// let start = new Date();
// for (let i = 0; i < 1000; i++) {
//   let dosmth = i * i * i;
// }
// let end = new Date();
// console.log( ` ${end - start} `);

// let start = Date.now()
// let end = Date.now()
// console.log(start-end);

// let date = new Date();
// date.getTime();
// console.log(date);

// let date = Date.now();
// console.log(date);

// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }
// console.log(diffGetTime(date1, date2));

// let date = Date.parse('2022-04-14')
// console.log(date);

// let date = new Date( Date.parse('2022-05-14') )
// console.log(date);





// function addZero(d) {
  //   return (d<10) ? '0' + d : d;
  // }

// let arrWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// function currentUserTime(t = new Date()) {
//   let Y = t.getFullYear();
//   let M = addZero(t.getMonth() + 1);
//   let D = addZero(t.getDate());  
//   let d = arrWeek[t.getDay()];
//   let h = addZero(t.getHours());
//   let m = addZero(t.getMinutes());
//   console.log(Y, M, D, d, h, m);

//   return `${Y}.${M}.${D} ${h}:${m} (${d})`;
// }
// console.log(currentUserTime(new Date())); 
// console.log(Date.now());

// console.log(new Date(2012,01,20)); 

// function getWeekDay(date) {
  //   let arrWeekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  //   return arrWeekDay[date.getDay()]
  // }
  // let date = new Date(2022,04,14);
  // console.log(getWeekDay(date));
  
  // let date = new Date(2022, 0, 3);
  
  // function getLocalDay(date) {
    //   let currentDay = date.getDay();
    //   if (currentDay == 0) {
      //     day = 7;
      //   }
      //   return currentDay;
      // }
      // console.log(getLocalDay(date)); 


      // ///////////////////////////////////////////
      // const date = new Date();
      // console.log(date.getFullYear());
      // console.log(date.getMonth()); //current month[0]...[11]
      // console.log(date.getDate()); // curent date 1...31
      // console.log(date.getDay()); //current day (sunday[0]-saturday[6])
      // console.log(date.getHours());
      // console.log(date.getMinutes());
      // console.log(date.getSeconds());
      // console.log(date.getTime());
      // console.log(Date.now());
      ///////////////////////////////////////////


//   let date = new Date(2015, 0, 2);
      
//   function getDateAgo(date, days) {
//    let dateCopy = new Date(date);
//     dateCopy.setDate(date.getDate() - days)
//     return dateCopy.getDate();
//   } 
// console.log(getDateAgo(date, 1));

// console.log(Date.now());

// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month + 1, 0)
//   return date.getDate().getDay()
// }
// console.log(getLastDayOfMonth(2022, 4));
// function getSecondsToday() {
//   let today = new Date();
//   return today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
  
// }
// console.log(getSecondsToday());

// function getSecondsToday() {
//   let now = new Date();
//   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//   let diff = now - today;
//   return Math.round(diff / 1000);  
//   console.log(today);
// }
// console.log(getSecondsToday());

// function secondsTillTmrw() {
//   let timeRn = new Date();
//   let dateTmrw = new Date(timeRn.getFullYear(), timeRn.getMonth(), timeRn.getDate() + 1)
//   let diff = (dateTmrw - timeRn) / 1000;
//   return Math.round(diff);
// }
// console.log(secondsTillTmrw());

// function formatDate(date) {
//   let dayOfMonth = date.getDate();
//   let month = date.getMonth() + 1;
//   let year = date.getFullYear();
//   let hour = date.getHours();
//   let minutes = date.getMinutes();
//   let diffMs = new Date() - date;
//   let diffSec = Math.round(diffMs /1000);
//   let diffMin = diffSec / 60;
//   let diffHour = diffMin / 60;

//   year = year.toString().slice(-2);
//   month = month <10 ? '0' + month : month;
//   dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
//   hour = hour < 10 ? '0' + hour : hour;
//   minutes = minutes < 10 ? '0' + minutes : minutes;

//   if (diffSec < 1) {
//     return 'right away!';
//   }else if (diffMin < 1) {
//     return `${diffSec} a sec ago`;
//   } else if (diffHour < 1) {
//     return `${diffMin} a min ago`;
//   } else {
//     return `${dayOfMonth}.${month}.${year} ${hour}: ${minutes}`
//   }
// }
// alert( formatDate(new Date(new Date - 1)) );
// alert( formatDate(new Date(new Date - 30 * 1000)) );
// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) );
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

// let user = {
//   name: 'Costya',
//   age: 22,
//   toString() {
//     return `{name: '${this.name}', age: ${this.age}}`;
//   }
// };
// console.log(user);

// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   wife: null
// };
// let json = JSON.stringify(student);
// console.log(json);

// let user = {
//   sayHi() { // будет пропущено
//     alert("Hello");
//   },
//   [Symbol("id")]: 123, // также будет пропущено
//   something: undefined // как и это - пропущено
// };
// console.log(JSON.stringify(user));

// let meetup = {
//   title: "Conference",
//   room: {
//     number: 23,
//     participants: ["john", "ann"]
//   }
// };
// console.log(JSON.stringify(meetup));

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup ссылается на room
// };

// room.occupiedBy = meetup; // room ссылается на meetup
// console.log( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup ссылается на room
// };

// room.occupiedBy = meetup; // room ссылается на meetup

// console.log( JSON.stringify(meetup, function replacer(key, value) {
//   console.log(`${key}: ${value}`);
//   return (key === 'occupiedBy') ? undefined : value;
// }));
// let user = {
//   name: "John",
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true
//   }
// };
// console.log( JSON.stringify(user, null, 2));

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   date: new Date(Date.UTC(2017, 0, 1)),
//   room
// };
// console.log( JSON.stringify(meetup));

// let room = {
//   number: 23,
//   toJSON() {
//     return this.number;
//   }
// };

// let meetup = {
//   title: "Conference",
//   room
// };

// console.log( JSON.stringify((room)));
// console.log(JSON.stringify(meetup));

// let numbers = '[0,1,2,3]';
// numbers = JSON.parse(numbers);
// console.log(numbers);

// let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// user = JSON.parse(user);
// console.log(user.friends[3]);

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// let meetup = JSON.parse(str);
// console.log( meetup.date.getDate() );

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// let meetup = JSON.parse(str, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// })
// console.log(meetup.date.getDate());

// let schedule = `{
//   "meetups": [
//     {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//     {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//   ]
// }`;

// schedule = JSON.parse(schedule, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });
// console.log( schedule.meetups[1].date.getDate() );

// let user = {
//   name: "Василий Иванович",
//   age: 35
// };

// let user2 = JSON.parse(JSON.stringify(user))
// console.log(user2);
// let toJson = JSON.stringify(user);
// let fromJson = JSON.parse(toJson)
// console.log(fromJson);

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//   place: room
// };

// цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log( JSON.stringify(meetup, function replacer(key, value) {
//   console.log( `${key}: ${value}`);
//   return (key === 'self' || key === 'occupiedBy') ? undefined : value;
// }) );

// console.log( JSON.stringify(meetup, function replacer(key, value) {
//   return (key != "" && value == meetup) ? undefined : value;
// }));


// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup ссылается на room
// };

// room.occupiedBy = meetup; // room ссылается на meetup
// console.log(JSON.stringify(meetup, ['title', 'participants', 'name']));

// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result = result * x;
//   }
//   return result;
// }
// console.log( pow(2, 2) );

// function pow(x, n) {
//   if (n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }
// console.log( pow(2, 3) );

// function pow(x, n) {
//   return (n === 1) ? x : (x * pow(x, n - 1));
// }
// console.log( pow(2, 3) );

// let company = { // тот же самый объект, сжатый для краткости
//   sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//   development: {
//     sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//     internals: [{name: 'Jack', salary: 1300}]
//   }
// };

// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     return department.reduce( (prev, item) => prev + item.salary, 0); 
//   } else {
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum = sumSalaries(subdep);
//     }
//     return sum;
//   }
// }
// console.log(sumSalaries(company));

// function sumTo(n) {
//   result = 0;
//   for(let i = 1; i <= n; i++) {
//     result += i;
//   }
//   return result;
// }
// console.log(sumTo(5));

// function sumTo(n) {
//   if (n == 1) return 1;
//   return n + sumTo(n - 1)
// }
// console.log(sumTo(4));

// function sumTo(n) {
//   return n * (n + 1) / 2;
// }
// console.log(sumTo(2));

// function factorial(n) {
//   return (n === 1) ? 1 :  n * factorial(n - 1);
// }
// console.log(factorial(5));

// function factorial(n) {
//   console.log(Boolean(0));
//   return n ? n * factorial(n - 1) : 25;
// }

// console.log( factorial(1) ); // 120

// function factorial(n) {
//   let result = 1;
//   for(let i = n; i >= 1; i--) {
//     result *= i;
//   } 
//   return result;
// }
// console.log( factorial(2));

// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// console.log(fib(3));

// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }
// console.log(fib());

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList(list) {
//   let a = list;

//   while(a) {
//     console.log(a.value);
//   }
// }

// printList(list)

// function printList(list) {
//   console.log(list.value);

//   if(list.next) {
//     printList(list.next)
//   }
// }
// printList(list);\

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
//  function printReverseList(list) {
//    if(list.next) {
//      printReverseList(list.next);
//    }
//    console.log(list.value);
//  }
//  printReverseList(list)

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// function printReverse(list) {
//   let arr = [];
//   let tmp = list;

//   while (tmp) {
//     arr.push(tmp.value);
//     tmp = tmp.next;
//   }
//   for(let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }
// printReverse(list);

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(45,5,3,4,5,6));

// function sumAll(...args) {
//   let sum = 0;
//   for(let item of args) {
//     sum = sum + item;
//   }
//   return sum;
// }
// console.log(sumAll(1,2,3));

// function showName(firstName, lastName, ...rest) {
//   console.log(firstName + ' ' + lastName);
//   console.log(rest[0]);
//   console.log(rest[1]);
//   console.log(rest.length);
// }
// showName('Costya', 'Danilov', 'Petrovich', 'blablabla')

// function showName() {
//   console.log(arguments.length);
//   console.log(arguments[0]);
//   console.log(arguments[1]);
// }
// showName('Costya', 'Danilov');
// showName('Costya');

// function f() {
//   let showArg = () => console.log(arguments[0]);
//   showArg(2);
// }
// f(3);

// console.log(Math.max(3, 5, 1));

// let arr = [3,5,1];
// console.log(Math.max(...arr));

// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];
// console.log(Math.max(...arr1, ...arr2));

// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];
// console.log(Math.max(...arr1, ...arr2, 25));

// let arr = [3, 5, 1];
// let arr2 = [8, 9, 15];

// let merged = [...arr, ...arr2];
// console.log(merged);

// let str = 'Hello!';
// console.log([...str]);

// let str = 'Hello!';
// console.log(Array.from(str));

// let name = 'John';

// function sayHi() {
//   console.log('Hi, ' + name);
// }
// name = 'Pete';
// sayHi();

// function makeWorker() {
//   let name = 'Pete';

//   return function() {
//     console.log(name);
//   }
  
// }
// let name = 'John';

// let work = makeWorker();
// work();

// let phrase = 'Hello!';
// function sayHi(name) {
//   console.log( `${phrase}, ${name}`);
// }
// sayHi('Costya');

// function sayHiBye(fN, lN) {
//   function fullN() {
//     fN = 'Costya';
//     lN = 'Danilov';
//     return fN + ' ' + lN;
//   }
//   console.log( 'Hello, ' + fullN() )
//   console.log( 'Bye, ' + fullN() )
// }
// sayHiBye()

// function user(name) {

//   this.sayHi = function() {
//     console.log(name);
//   };
// }

// let person = user("John");
// user.sayHi(); 

// function makeCounter() {
//   let count = 0;
//   return function() {
//     return count++;
//   };
// }
// let counter = makeCounter()
// console.log(counter());
// console.log(counter());
// console.log(counter());

// {
//   let sms = 'Hello!';
//   console.log(sms);
// }
// console.log(sms);

// function f() {
//   let value = Math.random();

//   function g() {
//     debugger; // в консоли: напишите alert(value); Такой переменной нет!
//   }

//   return g;
// }

// let g = f();
// g();

// let value = "Сюрприз!";

// function f() {
//   let value = "ближайшее значение";

//   function g() {
//     debugger; // в консоли: напишите alert(value); Сюрприз!
//   }

//   return g;
// }

// let g = f();
// g();

// function counter() {
//   let count = 0;

//   return function a() {
//     return ++count;
//   }
// }
// let counter1 = counter();
// console.log(counter1());
// console.log(counter1());
// 'use strict'
// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   };
// };

// sayHi();

// function sum(a) {
//   return function(b) {
//     return a + b;
//   }
// }
// console.log(sum(3)(2));

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//   return function(x) {
//     return x >= a && x <= b;
//   };
// }
// console.log( arr.filter(inBetween(3,6 )) ); 

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inArray(arr) {
//   return function(x) {
//     return arr.includes(x)
//   };
// }
// console.log( arr.filter(inArray([1,2,3,45,82])));

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(a, b, c) {
//   // let users1 =[]
//   // for(let i = 0; i < users.length; i++){
//   //   users1.push(users[i])
//   //   a = 
//   //   b = 
//   //   c = 
//   // }
//   // if ()

//   for (let item of Object.entries(users)) {
//     console.log(item);
//   }
// }
// byField()

// b = 20;
// function hey() {
//   a = 10;
//   var b = 15;
// }
// hey();
// console.log(a + b);

// function createGreeting() {
//   let message = 'Hello';

//   return function(str) {
//     console.log(message, str);
//   }
// }
// let helloWorld = createGreeting();
// helloWorld('world');
// helloWorld('John');

// function addByX(num) {
//   return function(x) {
//     return num + x;
//   }
// }

// let addByTwo = addByX(2);
// let addByFive = addByX(5);

// console.log(addByTwo(3));
// console.log(addByFive(3));

// function makeCounter(count) {
//   return function() {
//     return count++;
//   }
// }
// let counter = makeCounter(20);
// let counter1 = makeCounter(30);
// console.log(counter());
// console.log(counter());
// console.log(counter());

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }

// sayHi();

// function sum(a) {
//   function two(b) {
//     return function(c) {
//       return a + b + c;
//     }
//   }
// }
// // let sum1 = sum(1)
// // console.log(sum1(1));
// let sum1 = sum(two(1)) 
// console.log(sum1(2)(3));

// let arr = [1, 2, 3, 4, 5, 6, 7];
// //  ========================================
// function inBetween(a, b) {
//   return function(x) {
//     return x >= a && x <= b; 
//   }
// }
// console.log(arr.filter(inBetween(3, 6)));
// // ============================================

// function inArray(arr) {
//   return function(item) {
//     return arr.includes(item);
//   }
// }
// console.log(arr.filter(inArray([1, 2, 3,4,5,78,9,4,45])));

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(field) {
//   return function(a, b) {
//     return a[field] > b[field] ? 1 : -1;
//   }
// }
// users.sort(byField('name'))
//       .forEach(user => console.log(user.name));

// let sorted = users.sort(byField('age'))
//       .forEach(user => console.log(user.name + ' ' + user.age));   

// function makeArmy() {
//   let shooters = [];

//   for(let i = 0; i < 10; i++) {
//     let shooter = function() {
//       console.log(i);
//     };
//     shooters.push(shooter);
//   }
//   return shooters;
// }
// let army = makeArmy();
// army[0]();
// army[1]();
// army[2]();

// if (true) {
//   var test = true;
// }
// console.log(test);

// for (var i = 0; i < 10; i++) {
//   // ...
// }

// alert(i);

// function sayHi() {
//   if (true) {
//     var phrase = "Привет!";
//   }

//   alert(phrase); // срабатывает и выводит "Привет"
// }

// sayHi();
// alert(phrase); 

// console.log('Hi!');
// window.console.log('Hi!');

// window.currentUser = {
//   name: 'John',
// };
// console.log(currentUser.name);
// console.log(window.currentUser.name);

// if (!window.Promise) {
//   console.log('your browser is damn old');
// }

// function sayHi() {
// console.log('Hi');
// }
// console.log(sayHi.name);

// // функция объявлена внутри массива
// let arr1 = [function() {}];

// alert( arr1[0].name ); 
// function f1(a) {}
// function f2(a, b) {}
// function many(a, b, ...more) {}

// alert(f1.length); // 1
// alert(f2.length); // 2
// alert(many.length); // 2

// function sayHi() {
//   console.log('Hi');
//   sayHi.counter++;
// }
// sayHi.counter = 0;
// sayHi();
// sayHi();
// sayHi();

// console.log( `the function was called ${sayHi.counter} time(s)` );\

// function makeCounter() {

//   function counter() {
//     return counter.count++;
//   };
//   counter.count = 0;
//   return counter;
// }
// let counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function makeCounter() {

//   function counter() {
//     return counter.count++;
//   };

//   counter.count = 0;

//   return counter;
// }

// let counter = makeCounter();

// // counter.count = 100;
// console.log( counter() ); // 10

// let sayHi = function (who) {
//   console.log(`Hello, ${who}`);
// };
// sayHi('Costya')

// let sayHi = function func(who) {
//   if (who) {
//     console.log(`Hello, ${who}`);
//   } else {
//     func('Guest')
//   }
// };
// sayHi()

// let sayHi = function func(who) {
//   if (who) {
//     console.log(`Hello, ${who}`);
//   } else {
//     sayHi("Guest"); // Ошибка: sayHi не является функцией
//   }
// };

// let welcome = sayHi;
// // sayHi = null;

// sayHi(); // Оши
// ==========================================================================
// function makeCounter() {
//   let counter = 0;
//   function increaseCounter() {
//     return increaseCounter.counter++;
//   }
//   function setCounter(value) {
//     return setCounter.counter = value;
//   }
//   function decreaseCounter() {
//     return decreaseCounter.counter--;
//   }
  
//   if (increaseCounter) {
//     return increaseCounter;
//   } else if (setCounter) {
//     return setCounter;
//   } else {
//     return decreaseCounter;
//   }
  
// }
// console.log(makeCounter(increaseCounter()));
// console.log(count(increaseCounter()));/
// ==========================================================================


// как сделать так чтоб по моему варианту работало??? И я так понял что мой вариант это кокраз вариант замыканий???
// function makeCounter() {
//   let count = 0;

//   function counter(){}
//   counter.increase = () => count++; //function() {return count++}
//   counter.set = value => count = value; //  value => count = value; function(value) {return count = value}
//   counter.decrease = () => count--; //function() {return count--}
//   return counter;
// }
// let count = makeCounter(); // почему вариант с прямым вызовом функции не работает???
// console.log(count.increase()); // почему здесь increase при первом вызове =0 а потом при втором только начинает увеличивать?
// console.log(count.increase()); 
// console.log(count.decrease()); // почему здесь decrease при первом вызове сперва увеличивает а потом при втором только начинает уменьшать?
// console.log(count.decrease()); 
// console.log(count.set(10)); 
// console.log(count.set(20)); 
// console.log(count.set(30)); 
// console.log(count.decrease()); 
// console.log(count.decrease()); 
// ==========================================================================

// function sum(a) {
//   return function(b, ...) {
//     return a + b;
//   }
// }
// let sum1 = sum(1);
// console.log(sum1(7)(5));

// b = 20;
// function hey() {
//   a = 10;
//   var b = 15;
// }
// hey();
// console.log(a + b);
// b = 20;
// console.log(b);

// function sum(a) {
//   let currentSum = a;

//   function f(b) {
//     currentSum += b;
//     return f;
//   }
//   f.toString = function() {
//     return currentSum;
//   };
//   return f;
// }
// alert(sum(1)(2)(3))

// function sayHi() {
//   console.log('Hello!');
// }
// setTimeout(sayHi, 2000)

// function sayHi(phrase, who) {
//   console.log(phrase + ', ' + who);
// }
// setTimeout(sayHi, 1000, 'Hi', 'Costya');

// setTimeout(`alert('Hey')`, 1000)
// let timreId = setTimeout(() => console.log('Hey'), 1000)
// clearTimeout(timreId)

// let timerId = setTimeout(() => console.log('nothing happens'), 1000);
// console.log(timerId);

// clearTimeout(timerId)
// console.log(timerId);

// let timerId = setInterval(() => console.log('tick'), 1000);
// setTimeout(() => {clearInterval(timerId); console.log('stop');}, 5000)

// let timerId = setTimeout(function tick() {
//   console.log('tick');
//   timerId = setTimeout(tick, 1000);
// }, 1000)
// let i = 1;
// setInterval(function() {
//   func(i);
// }, 100);

// let i = 1;
// setTimeout(function run() {
//   func(i);
//   setTimeout(run, 100);
// }, 100);
// let i = 1;
// setTimeout(function run() {
//   func(i);
//   setTimeout(run, 100);
// }, 100);
// setTimeout(() => console.log('wrld'));
// console.log('hey');
// function printNumbers(from, to) {
//   let timer = setInterval(() => {
//     console.log(from);
//     (from === to) ? clearInterval(timer) : from++;
//   }, 200)
// }
// printNumbers(2, 10);

// function printNumbers(from, to) {
//   let current = from;

//   setTimeout(function go() {
//     console.log(current);
//     if (current < to) {
//       setTimeout(go, 1000);
//     }
//     current++;
//   }, 1000);
// }

// // использование:
// printNumbers(5, 150);

// function sayHi() {
//   console.log(this.name);
// }

// let user = {name: 'Costya'};
// let admin = {name: 'Admin'};

// sayHi.call(user);
// sayHi.call(admin);

// function say(phrase) {
//   console.log(this.name + ': ' + phrase);
// }
// let user = {name: 'Costya'};
// say.call(user, 'Hello!')

// let btn1 = document.querySelector('.btn');

// btn1.onclick = test;

// function test() {
//   this.style.background = 'orange';
// }    

// function hello() {
//   console.log('Hello', this);
// }

// let person = {
//   name: 'Costya',
//   age: 22,
//   sayHello: hello,
//   sayHelloWindow: hello.bind(document),
//   logInfo: function(job, phone) {
//     console.group(`${this.name} info`);
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`Job is ${job}`);
//     console.log(`Phone is ${phone}`);
//     console.groupEnd()
//   }
// }

// let vanya = {
//   name: 'Vanya',
//   age: 29,
// }
// person.logInfo.bind(vanya, 'FE', '77982502')();
// person.logInfo.call(vanya, 'FE', '77982502')
// person.logInfo.apply(vanya, ['FE', '77982502'])

// const array = [1, 2, 3, 4, 5]

// function mult(arr, n) {
//   return arr.map( i => {
//     return i * n;
//   })
// }

// Array.prototype.multBy = function(n) {
//   return this.map( i => {
//     return i * n;
//   })
// }
// console.log(array.multBy(2)); 

// function makeCounter() {
//   let count = 0;

//   function counter() {};
//   counter.increase = () => count++;
//   counter.set = value => count = value;
//   counter.decrease = () => count--;
//   return counter;
// }
// let count = makeCounter();
// console.log(count.increase());
// console.log(count.increase());
// console.log(count.decrease());
// console.log(count.decrease());
// console.log(count.decrease());
// console.log(count.decrease());
// console.log(count.decrease());
// console.log(count.set(10));

// const auto = {
//   brand: 'Tesla',
//   drive() {
//     console.log(this);
//     return `Lets start our ${this.brand}`
//   }
// }
// // console.log(auto.drive());

// const motorBike = {
//   brand: 'Suzuki',
// }

// const autoDrive = auto.drive.bind(auto); 
// const motorDrive = auto.drive.bind(motorBike)

// const bill = {
//   tip: 0.1,
//   calculate(total) {
//     return total + total * this.tip
//   },
//   detail(dish1, dish2, sum) {
//     return `your meal (${dish1}, ${dish2}) costs ${this.calculate(sum)})`
//   }
// }

// const pay = bill.detail('pizza', 'salad', 1000);

// const payCount = bill.detail.call(bill, 'pizza', 'salad', 1000);

// const payCount2 = bill.detail.apply(bill, ['pizza', 'salad', 1000]);

// console.log(pay);
// console.log(payCount);
// console.log(payCount2);

// const person = {
//   name: 'Costya',
// }

// function info(phone, email) {
//   console.log(`Name is ${this.name}, tel: ${phone}, email: ${email}`);
// }

// info.bind(person)('77967825', 'costya@mail.ru');
// info.bind(person, '77967825')('costya@mail.ru')

// 1 method
// function bind(fn, context, ...rest ) {
//   return fn.bind(context, ...rest)
// }

// 2 method(uncompleted)
// function bind(fn, context, ...rest) {
//   return function() {
//     const uniqId = Date.now().toString() 
     
//   }
// }

// 3 method
// function bind(fn, context) {
//   const rest = Array.prototype.slice.call(arguments, 2)
//   return function() {
//     const args = Array.prototype.slice.call(arguments)
//     return fn.apply(context, rest.concat(args))
//   }
// }

// function bind(fn, context, ...rest) {
//   return function(...args) {
//     return fn.apply(context, rest.concat(args))
//   }
// }

// bind(info, person)('12345', 'costa@mail.ru')
// bind(info, person, '12345')('costa@mail.ru')
// bind(info, person, '12345', 'costa@mail.ru')()

// let user = {
//   firstName: 'Costya',
//   sayHi() {
//     console.log(`Hello ${this.firstName}`);
//   }
// };

// // setTimeout(user.sayHi, 1000);

// setTimeout(function() {
//   user.sayHi();
// }, 1000);
// let user = {
//   firstName: 'Costya',
//   sayHi() {
//     console.log(`Hello ${this.firstName}`);
//   }
// };
// // setTimeout(function() {
// //   user.sayHi();
// // }, 1000)
// setTimeout(() => user.sayHi(), 1000)

// let user = {
//   firstName: 'Costya',
// };
// function func() {
//   console.log(this.firstName);
// }

// funcLink = func.bind(user);
// funcLink()

// let user = {
//   firstName: 'Costya',
// };
// function func(phrase) {
//   console.log(phrase + ', ' + this.firstName);
// }

// funcLink = func.bind(user);
// funcLink('Hello')
// let user = {
//   firstName: "Вася",
//   sayHi() {
//     console.log(`Привет, ${this.firstName}!`);
//   }
// };

// let sayHiLink = user.sayHi.bind(user);
// sayHiLink()
// setInterval(sayHiLink, 1000)

// let person  = {
//   name: 'Costya',
//   age: 22,
//   info(phrase1 = 'your name is', phrase2 = 'your age is') {
//     console.log(`${phrase1} ${this.name}, ${phrase2} ${this.age}`);
//   }
// };
// let say = person.info.bind(person);
// say()

// let person  = {
//   name: 'Costya',
//   age: 22,
//   info(phrase1 = 'your name is', phrase2 = 'your age is') {
//     console.log(`${phrase1} ${this.name}, ${phrase2} ${this.age}`);
//   }
// };

// for (let key in person) {
//   if (typeof person[key] === 'function') {
//     person[key].bind(person)
//     let link = person[key]()
//   }
// }

// function mul(a, b) {
//   return a * b;
// }

// let bound = mul.bind(null, 2);
// console.log(bound(4));

// function func() {
//   console.log(this.name);
// }
//  let linked = func.bind( {name: 'Costya'} )
//  linked()

// function sayHi() {
//   alert( this.name );
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//   name: "Вася"
// });

// bound()
// 'use strict';

// function askPassword(ok, fail) {
//   let password = prompt('insert your password plz');
//   (password === 'rockstar') ? ok() : fail();
// }
// let user = {
//   name: 'Costya',
//   loginOk() {
//     console.log(`${this.name} logged in successfully`);
//   },
//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };
//  askPassword( user.loginOk.bind(user), user.loginFail.bind(user) );

// function askPassword(ok, fail) {
//   let password = prompt('insert your password plz')
//   password === 'rockstar' ? ok() : fail()
// }
// let user = {
//   name: 'Costya',
//   login(result) {
//     console.log( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false));
// askPassword(() => user.login(true), () => user.login(false))
// askPassword(function() {user.login(true)}, function() {user.login(false)})

// let group = {
//   title: 'Our group',
//   students: ['Costya', 'Vanya', 'Igor'],
//   showList() {
//     this.students.forEach(
//       student => console.log(this.title + ': ' + student)
//     );
//   }
// };
// group.showList();
// let user = {
//   name: 'Costya',
//   surname: 'Danilov',
//   get fullName() {
//     return `${this.name} ${this.surname}`
//   }
// };
// console.log(user.fullName);

// let user = {
//   name: 'Costya',
//   surname: 'Danilov',
//   patronamic: 'Petrovich',

//   get fullName() {
//     return `${this.name} ${this.surname} ${this.patronamic}`
//   },

//   set fullName(value) {
//     [this.name, this.surname, this.patronamic] = value.split(' ');
//   }
// };

// user.fullName = 'Alice Cooper Bolt';
// console.log(user.fullName);

// let user = {
//   name: 'Costya',
//   surname: 'Danilov',
// };

//   Object.defineProperty(user, 'fullName', {
//     get() {
//       return `${this.name} ${this.surname}`;
//     },

//     set(value) {
//       [this.name, this.surname] = value.split(' ');
//     }
//   });
//   console.log(user.fullName);
//   for (let key in user) console.log(key);

// let user = {
//   get name() {
//     return this._name
//   },

//   set name(value) {
//     if (value.length < 4) {
//       console.log('The name is too short'); return
//     }
//     this._name = value;
//   }
// };

// user.name = 'Costya';
// console.log(user.name);


// try {
//   console.log('start');
//   cfghjk2
//   console.log('end');

// } catch(err) {
//   console.log('ops an error');
// }

// setTimeout(function() {
//   try {
//     noVariable;
//   } catch {
//     console.log( 'the error is caught!' );
//   }
// }, 1000)

// try{
//   dfgh
// } catch(err) {
//   console.log(err.name);
//   console.log(err.message);
//   console.log(err.stack);
//   console.log(err);
// }

// let json = '{"name":"John", "age": 30}';
// let user = JSON.parse(json)
// console.log(user);

// let json = '{ "age": 30 }';

// try {
//   let user = JSON.parse(json)
//   console.log(user.name);
// } catch(e) {
//   console.log('sorry dude ur fucked up so bad!');
//   console.log(e);
// }

// let json = '{"age": 30}';

// try {
//   let user = JSON.parse(json);
//   if(!user.name) throw new SyntaxError('the data is not complete');
//   console.log(user.name);
// } catch(e) {
//   console.log('JSON ERROR: ' + e.message);
// }


// try {
  //   user = JSON.parse(json);
  //   console.log(user);
  // } catch(e) {
    //   console.log('Json error: ' + e);
    // }

    // let json = '{"age": 30}';
    // try {
    //   let user = JSON.parse(json);
    //   if (!user.name) throw new SyntaxError('data isnt complete');
    //   blabla();
    //   console.log(user.name);
    // } catch(e) {
    //   if (e.name == 'SyntaxError') {
    //     console.log('JSON Error: ' + e.message);
    //   } else throw e;
    // } 

// function readData() {
//   let json = '{"age: 30"}';

//   try{
//     bla()
//   } catch(e) {
//     if (e.name != 'SyntaxError') throw e;
//   }
// }

// try {
//   readData();
// } catch(e) {
//   console.log('the outer catch is caught: ' + e);
// }


// try {
//   console.log('try');
//   if (confirm('generate an error')) fuckedupcode();
// } catch(err) {
//   console.log('catch');
// } finally {
//   console.log('finally');
// }

// function loadScript(src) {
//   let script = document.createElement('script');
//   script.src = src;
//   document.head.append(script)
// }
// loadScript('/my/script.js');

// function myFunc(callback) {
//   const arr = [1, 2, 3, 4, 5];
//   let element = document.querySelector('.out-1');
//   callback(element, arr);
// }

// function out(elem, array) {
//   elem.innerHTML = array.join('+');
// }

// myFunc(out)

// function copyArrAndDoSmth(arr, instructions) {
//   let output = [];

//   for (let item of arr) output.push(instructions(item));

//   return output;
// }

// function numSquared(num) {
//   return num * num;
// }

// function divideByTwo(num) {
//   return num / 2;
// }

// console.log(copyArrAndDoSmth([1,2,3], numSquared));
// console.log(copyArrAndDoSmth([10,20,30], divideByTwo));

// function first(func) {
//   console.log(1);
//   func()
// }
// first(second)


// function second() {
//   setTimeout(function() {console.log(2)},1000)
// }

// function first(func) {
//   console.log(1);
//   func()
// }

// function second(a, b) {
//   console.log(a * b);
// }

// // first(second(2, 2))
// first(function() {
//   second(2, 2)
// })

// const arr = [2,4,5,8,9];
// let out1 = document.querySelector('.out-1')

// function func(arr1, myFunc, block) {
//   arr1[3] = arr1[3] * 2;
//   // out1.innerHTML = arr
//   myFunc(arr1, block)
// }

// function showArr(arr1, block) {
//   let out = '';
//   for (let item of arr1) out = out + item + '_';
//   block.innerHTML = out
// }

// func(arr, showArr, out1)


// const arr = [2,4,5,8,9];
// let out1 = document.querySelector('.out-1')


// function square(item) {
//   return item ** 2;
// } 

// const arr2 = arr.map(square);
// console.log(arr2);

// const makePizza = function(title, cb) {
//   console.log(`The order to make pizza ${title} is received. It will be made soon!`);
//   setTimeout(cb, 3000)
// }

// const readBook = function() {
//   console.log(`Reading a book!...`);
// }

// const eatPizza = function() {
//   console.log(`Hooraaay, the pizza has been made! Time to eat!`);
// }

// makePizza('Pepperoni', eatPizza);
// readBook();

// let x = [1,2,3,4,5,6,7,8,9,10];

// let y = x.filter(n => n % 2 === 0)
// console.log(y);

// function greeting(name) {
//   console.log('hey ' + name);
// }

// function processUserInput(callback) {
//   let name = prompt('Plz enter your name');
//   callback(name);
// }
// processUserInput(greeting)

function greeting(name) {
  console.log(`Hello ${name}`);
}

function processUserInput(callback) {
  let name = prompt('plz insert your name');

  return callback(name)
}

processUserInput(greeting)