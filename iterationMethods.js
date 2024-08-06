const numbers = [10, 13, 20, 25, 38, 35, 40];
//task1
let greaterOrEqual25 = numbers.filter((number) => {
  if (number >= 25) {
    return true;
  } else {
    return false;
  }
});
console.log(` this is the original array ${numbers}`);
console.log(` numbers larger or = 25 are: ${greaterOrEqual25}`);
let divisableBy5 = numbers.filter((number) => {
  if (number % 5 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(` this is the original array ${numbers}`);
console.log(` numbers divisable by 5 are: ${divisableBy5}`);
//task2
let squaredArray = numbers.map((number) => {
  return number * number; //should include return here yo save the values
});
console.log(` this is the original array ${numbers}`);
console.log(`squared array elements are: ${squaredArray}`);

let doubledArray = numbers.map((number) => {
  return number * 2; //should include return here yo save the values
});
console.log(` this is the original array ${numbers}`);
console.log(`doubled (x2) array elements are: ${doubledArray}`);
//task3
let filteredGreaterOrEqual20 = numbers.filter((number) => {
  if (number >= 20) {
    return true;
  } else {
    return false;
  }
});
console.log(` this is the original array ${numbers}`);
console.log(` numbers greater or equal 20 are: ${filteredGreaterOrEqual20}`);
let greaterOrEqual20Squared = filteredGreaterOrEqual20.map((number) => {
  return number * 2;
});
console.log(` numbers greater or = 20 squared are: ${greaterOrEqual20Squared}`);
//task 3 p2)
let filteredDivisableBy5 = numbers.filter((number) => {
  if (number % 5 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(` this is the original array ${numbers}`);
console.log(` numbers divisable by 5 are: ${filteredDivisableBy5}`);
let divisableBy5Mult3 = filteredDivisableBy5.map((number) => {
  return number * 3;
});
console.log(
  `this is divisable numbers by 5 multiplied by 3 : ${divisableBy5Mult3}`
);
