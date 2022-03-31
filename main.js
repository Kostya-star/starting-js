
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
const item = document.querySelectorAll('.item');
for (let i = 0; i < item.length; i++){
  item[i].addEventListener('click', () => {
    item[i].classList.toggle('through');
  });
}
