// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

const greet = (name) => `Hello , ${name}`; //task1
console.log(greet("aziz"));

const sum = (num1, num2) => num1 + num2; //task2
console.log(sum(4, 4));
const square = (number) => number * number; //task3
console.log(square(2));

const array = (number) => {
  let square = array.every(number * number);
  return square;
};
console.log(array(2, 3));
