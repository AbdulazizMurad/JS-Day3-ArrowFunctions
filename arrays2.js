function isArrayLengthOdd(numbers) {
  if (numbers.length % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isArrayLengthOdd([1, 2, 3, 4])); //should return false since length here is even

function isArrayLengthOdd(numbers) {
  if (numbers.length % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isArrayLengthOdd([1, 2, 3, 4])); //should return true since length here is even

function addLailaToArray(instructors) {
  instructors.push("laila");
  return instructors;
}

console.log(addLailaToArray(["meshary", "hasan"]));
