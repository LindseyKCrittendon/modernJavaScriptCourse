// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;
// const str = 'Hello there my name is Brad';

// let val;

// val = firstName + lastName;
// //concatenation
// val = firstName + ' ' + lastName
// //adds a space
// //append
// val = 'Brad';
// val += 'Trebble';
// val = 'Hello, my name is ' + firstName+ 'and I am ' + age;
// //escaping
// val = 'That\'s awesome, I can\'t wait'
//length
// val = firstName.length;
// //concat
// val = firstName.concat(' ', lastName);
// //change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[0];

// //indexOf()
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// //charAt()
// val = firstName.charAt('2');
//get last character
// val = firstName.charAt(firstName.length - 1);
// //substring()
// val = firstName.substring(0, 4);
// //slice
// val = firstName.slice(-3);
// //split
// val = str.split(' ');
// //replace
// val = str.replace('Brad', 'Jack');
// //includes//returns true/false statement
// val = str.includes('Hello');

// console.log(val)

//template literals
// const name = 'John';
// const age = 31;
// const job = 'Web Developer';
// const city = 'Miami';

//without template strings (es5)

// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + '</li><li>City: '+ city +' </li></ul>';

// document.body.innerHTML = html;

// //with template strings(es6) or template literals - cleaner way
// html = 
// `<ul>
//     <li>${name}</li>
//     <li>${age}</li>
//     <li>${job}</li>
//     <li>${city}</li>
//     <li>${2 + 2}</li>
   
//     <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
// </ul>`;
// document.body.innerHTML = html;

//create some arrays
// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(22,45, 33,76,54);
// const fruit = ['apple', 'banana', 'orange', 'pear'];
// const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date()];
// console.log(mixed);

// let val;
// //get array length
// val = numbers.length;
// //lets you know if you are actually working with an array.
// val = Array.isArray(numbers);
// val = Array.isArray('hello');

// //get a single value

// val = numbers[3];
// val = numbers[0];
// //insert into array
// numbers[2] = 100;
// //find index of value
// val = numbers.indexOf(36);

//MUTATING ARRAYS
//add onto end
// numbers.push(250);
// //add onto front
// numbers.unshift(120);
// //take off from end
// numbers.pop();
// //take off from front
// numbers.shift();
// //splice values
// numbers.splice(1, 1);
// //reverse
// numbers.reverse();

// //concatenate arrays
// val = numbers.concat(numbers2);

//sort
// val = fruit.sort();
// val = numbers.sort();

// //use the compare function
// val = numbers.sort(function(x, y){
//     return x-y;
// });

// //to reverse that direction
// val = numbers.sort(function(x, y){
// return y-x;
// });

//find
// function under50(num){
//     return num < 50;
// }
// //found first number under 50
// val = numbers.find(under50)

// function over50(num){
//     return num > 50;
// }
// val = numbers.find(over50);

// console.log(numbers);
// console.log(val);


//OBJECT LITERALS

// const person = {
// firstName: 'Steve',
// lastName: 'Smith',
// age: 30,
// email: 'steve@aol.com',
// hobbies: ['music', 'sports'],
// address: {
//     city: 'Miami',
//     state: 'Florida'
// },
// getBirthYear: function(){
//     return 2020 - this.age;
// }
// };

// let val;

// val = person;
// //get specific value
// val = person.firstName;
// val = person['firstName'];
// val = person.age;
// val = person.hobbies;
// val = person.hobbies[1],
// val = person.address.state;
// val = person.getBirthYear();

// console.log(val);

// const people = [
// {name: 'John',
// age: 30,},
// {name: 'Mike',
// age: 23,},
// {name: 'Nancy',
// age: 40}
// ];

// for(let i = 0; i < people.length; i++){
// console.log(people[i].name)
// };

// let val;

// const today = new Date();
// let birthday = new Date('9-10-1981 11:25.00');
// birthday = new Date('September 10, 1981');
// birthday = new Date('9/10/1981');
// val = today.getMonth();
// val = today.getDate();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);
// console.log(birthday);
 
// console.log(val);

//IF STATEMENTS

// if(something){
//     do something
// }else{
//     do something else
// }

const id = 100;
//equal to
// if(id == 101){
// console.log('CORRECT');
// }else {
//     console.log('INCORRECT');
// }

// NOT EQUAL TO
// if(id != 101){
// console.log('correct')
// }else{
//     console.log('incorrect')
// };

//equal to value and type - use most of the time
// if(id === 100){
//     console.log('correct')
//     }else{
//         console.log('incorrect')
//     };

//     if(id !== 100){
//         console.log('correct')
//         }else{
//             console.log('incorrect')
//         };

// if(id){
//     console.log(`the idea is ${id}`);
// }else{
//     console.log('NO ID');
// };

//test if undefined
// if(typeof id !== 'undefined'){
//     console.log(`the id is ${id}`);
// }else{
//     console.log('NO ID');
// };

//greater than or less than

// if(id > 200){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// };

// if(id >= 100){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// };

// if(id < 200){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// };

// if(id <= 200){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// };


//IF ELSE
// const color = 'yellow';
// if(color === 'red'){
// console.log(`color is ${color}`);
// }else if(color === 'blue'){
//     console.log('color is blue')
// }else{
//     console.log('color is not red or blue');
// }

//LOGICAL OPERATORS
// const name = 'Steve';
// const age = 70;

// AND &&
// if(age > 0 && age < 12){
// console.log(`${name} is a child`);
// }else if(age >= 13 && age <= 19){
//     console.log(`${name} is a teenager`)
// }else{
//     console.log(`${name} is an adult`)
// };

//OR ||

// if(age < 16 || age > 65){
//     console.log(`${name} can not run in race`)
// }else{
//     console.log(`${name} is registered for the race`)
// };


// //TERNARY OPERATOR
// console.log(id === 100 ? 'Correct' : 'Incorrect');

// //without braces but don't recommend
// if(id === 100)
//     console.log('correct');
// else
//     console.log('incorrect');


//SWITCHES

// const color = 'yellow';

//use switch if you have a lot of different cases.  It probably would have worked well with the translator app today.
// switch(color){
//     case 'red':
//         console.log('Color is red');
//         break;
//     case 'blue':
//         console.log('color is blue')
//         break;
//     default:
//         console.log('color is not red or blue')
// }

// switch(new Date().getDay()){
// case 0:
//     day = 'Sunday';
//     break;
//     case 1:
//     day = 'Monday';
//     break;
//     case 2:
//     day = 'Tuesday';
//     break;
//     case 3:
//     day = 'Wednesday';
//     break;
//     case 4:
//     day = 'Thursday';
//     break;
//     case 5:
//     day = 'Friday';
//     break;
//     case 6:
//     day = 'Saturday';
//     break;
// }
// console.log(`Today is ${day}`);


//FUNCTION DECLARATIONS

// function greet(firstName = 'John', lastName = 'Doe'){
    // if(typeof firstName === 'undefined'){firstName = 'John'}
    // if(typeof lastName === 'undefined'){lastName = 'Doe'}
    // console.log('hello');
    // return 'Hello, ' + firstName + ' ' + lastName;
// }
// console.log(greet());

//FUNCTION EXPRESSIONS

// const square = function(x = 3){
// return x*x;
// };

// console.log(square());

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//     console.log('IIFE Ran..');
// })();
// (function(name){
//     console.log('Hello ' + name);
// })('brad');

//PROPERTY METHODS

// const toDo = {
//     add: function(){
//         console.log('add todo..');
//     },
//     edit: function(id){
// console.log(`edit todo ${id}`)
//     }
// }
// toDo.delete = function(){
//     console.log('Delete todo...')
// }
// toDo.add();
// toDo.edit(22);
// toDo.delete();

//ITERATIONS AND LOOPS

//FOR LOOP

// for(let i = 0; i < 10; i++){
//     // console.log('Number ' + i);
//     if(i === 2){
//         console.log('2 is my favorite number');
//         continue;
//     }
// if(i === 5){
//     console.log('Stop the loop');
//     break;
// }
//     console.log('Number ' + i);
// }

//WHILE LOOP

// let i = 0;

// while(i < 10){
// console.log('Number ' + i);
// i++;
// }

//DO WHILE - will always run once no matter what

// let i = 0;

// do{
//     console.log('Number ' + i);
// }

// while(i<10);

//LOOP THROUGH ARRAY
const cars = ['ford', 'chevy', 'honda', 'toyota'];


// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

//FOREACH LOOP - LOOKS CLEANER
// cars.forEach(function(car, index, array){
// console.log(`${index} : ${car}`);
// console.log(array);
// });

//MAP
// const users = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Sara'},
//     {id: 3, name: 'Karen'},
//     {id: 4, name: 'Steve'}
// ];

// const ids = users.map(function(user){
//     return user.name;
// });
// console.log(ids);

//FOR IN LOOP

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user){
console.log(`${x} : ${user[x]}`);
}