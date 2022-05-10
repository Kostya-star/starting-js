
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

const people = [
  {name: 'Costya', age: 22, budget: 6000},
  {name: 'Ivan', age: 29, budget: 5000},
  {name: 'Igor', age: 28, budget: 4000},
  {name: 'Petr', age: 52, budget: 3000},
  {name: 'Nadya', age: 51, budget: 2000},
  {name: 'Julia', age: 15, budget: 1000},
]

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


function copySorted(arr) {
  return arr.slice().sort();
}
let arr = ['HTML', 'JavaScript', 'CSS'];
let sorted = copySorted(arr);
console.log(sorted);

// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);