
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





// functions











